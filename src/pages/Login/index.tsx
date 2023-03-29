import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { ToastStyle } from "../../components/Toast";
import { SideComponentLayout } from "../../layout/SideComponentLayout";

import { AuthToken } from "../../services/authToken";
import { accoutApi, api } from "../../services/axios";
import { loginSchema, loginSchemaType } from "./schema";

import * as S from "./styles";
import { Input } from "../../components/Input";
import { IClientRequest } from "./interfaces";
import ReactLoading from "react-loading";
import { getClientService } from "./service";

export function Login() {
  const navigation = useNavigate();

  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [client, setClient] = useState<IClientRequest>();

  const method = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [cookies, setCookies] = useCookies(["user", "client", "clientCode"]);

  async function getClient() {
    setLoadingButton(true);
    const clientCode = method.watch("clientCode");
    try {
      const request = await getClientService(clientCode);
      setClient(request);
      const showClient = {
        avatar: request?.avatar_url,
        clientCode: request.requestCode,
        name: request.name,
        paymentDate: request.paymentDate,
        paymentValue: request.paymentValue,
      };
      setCookies("client", showClient, { path: "/" });
      getAuth();
    } catch (error) {
      setLoadingButton(false);
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  async function getAuth() {
    const username = method.watch("username");
    const password = method.watch("password");
    const clientCode = method.watch("clientCode");
    const body = {
      username,
      password,
      clientCode,
    };

    try {
      const response = await api.post("user/session", body);
      if (response.status === 200) {
        const { data } = response;
        setCookies("user", data, { path: "/" });
        setCookies("clientCode", data.clientCode, { path: "/" });
        AuthToken(data.token, clientCode);
        navigation("/service");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoadingButton(false);
    }
  }

  async function handleLogin() {
    getClient();
  }

  useEffect(() => {
    const values = Object.values(method.formState.errors);
    values.map((value) => {
      ToastStyle({
        message: value.message ? value.message : "Fill in all fields!",
        styleToast: "warning",
      });
    });
  }, [method.formState.errors]);

  return (
    <S.Main>
      {loading ? (
        <S.LoadingContainer>
          <ReactLoading type="spin" />
        </S.LoadingContainer>
      ) : (
        <>
          <SideComponentLayout />
          <S.Container id="content">
            <FormProvider {...method}>
              <S.Content onSubmit={method.handleSubmit(handleLogin)}>
                <h1>Dados de Acesso</h1>
                <S.InputContent>
                  <label htmlFor="clientCode">Conta</label>
                  <Input
                    hasError={method.formState.errors.clientCode?.message ? true : false}
                    placeholder="Digite a conta da Oficina"
                    registerText="clientCode"
                  />
                </S.InputContent>

                <S.InputContent>
                  <label htmlFor="username">Usuário</label>
                  <Input
                    hasError={method.formState.errors.username?.message ? true : false}
                    placeholder="Digite o usuário"
                    registerText="username"
                  />
                </S.InputContent>

                <S.InputContent>
                  <label htmlFor="password">Senha</label>
                  <Input
                    hasError={method.formState.errors.password?.message ? true : false}
                    placeholder="Digite a senha"
                    registerText="password"
                    type="password"
                  />
                </S.InputContent>

                <Button type="submit" text="Entrar" loading={loadingButton} />
              </S.Content>
            </FormProvider>
            <S.Footer>
              <span>© 2023 WM WorkShop Manager - Todos os direitos reservados.</span>
            </S.Footer>
          </S.Container>
        </>
      )}
    </S.Main>
  );
}

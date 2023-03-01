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
  const firstRender = useRef(true);
  const navigation = useNavigate();

  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [client, setClient] = useState<IClientRequest>();
  const subdomain = window.location.host.split(".")[0];

  const method = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [cookies, setCookies] = useCookies(["user", "client"]);

  async function getClient() {
    setLoading(true);

    try {
      const request = await getClientService(subdomain);
      setClient(request);
      setCookies("client", request, { path: "/" });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin() {
    setLoadingButton(true);
    const username = method.watch("username");
    const password = method.watch("password");
    const body = {
      username,
      password,
    };

    try {
      const response = await api.post("user/session", body);
      if (response.status === 200) {
        const { data } = response;
        setCookies("user", data, { path: "/" });
        AuthToken(data.token);
        navigation("/");
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

  useEffect(() => {
    const values = Object.values(method.formState.errors);
    values.map((value) => {
      ToastStyle({
        message: value.message ? value.message : "Fill in all fields!",
        styleToast: "warning",
      });
    });
  }, [method.formState.errors]);

  useEffect(() => {
    if (client !== undefined) {
      if (client === null) {
        navigation("/not-found");
      } else {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement("link");
          link.rel = "icon";
          document.getElementsByTagName("head")[0].appendChild(link);
        }
        link.href = client.avatar;
        document.title = client.name;
      }
    }
  }, [client]);

  useEffect(() => {
    getClient();
  }, []);

  return (
    <S.Main>
      {loading || !client ? (
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

                <Button text="Entrar" loading={loadingButton} />
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

import { useEffect, useState } from "react";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { ToastStyle } from "../../components/Toast";
import { SideComponentLayout } from "../../layout/SideComponentLayout";

import { AuthToken } from "../../services/authToken";
import { api } from "../../services/axios";
import { loginSchema, loginSchemaType } from "./schema";

import * as S from "./styles";
import { Input } from "../../components/Input";

export function Login() {
  const navigation = useNavigate();

  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const method = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [cookies, setCookies] = useCookies(["user"]);

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

  console.log(method.getValues());

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
      </S.Container>
    </S.Main>
  );
}

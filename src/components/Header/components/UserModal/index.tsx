import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { ToastStyle } from "../../../../components/Toast";
import { AuthUserContext } from "../../../../services/authUserContext";
import { IUserCreate, IUserRequest, IUserUpdate } from "./interfaces";
import { managerUserSchema, managerUserSchemaType } from "./schema";
import { createUser, getUser, updateUser } from "./services";

import * as S from "./styles";

interface IManagerModalProps {
  token: string;
  user: {
    name: string;
    username: string;
    isAdmin: string;
    id: string;
  };
  setModalOpen: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

export function ManagerUserModal({ setModalOpen, user, token }: IManagerModalProps) {
  const { setCookies, info } = useContext(AuthUserContext);

  const [loading, setLoading] = useState({ loadingData: false, submitted: false });

  const method = useForm<managerUserSchemaType>({
    resolver: zodResolver(managerUserSchema),
    mode: "onSubmit",
  });

  async function onSubmit() {
    setLoading((prev) => {
      return { loadingData: prev.loadingData, submitted: true };
    });
    const values: IUserUpdate = method.getValues();
    values.id = user.id;
    const userInfo = {
      token,
      user: {
        name: user.name,
        username: values.username ? values.username : user.username,
        isAdmin: user.isAdmin,
        id: user.id,
      },
    };
    try {
      await updateUser(values);
      setCookies("user", userInfo);
      ToastStyle({
        message: "Dados alterados com sucesso",
        styleToast: "success",
      });
      setModalOpen(<></>);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading((prev) => {
        return { loadingData: prev.loadingData, submitted: false };
      });
    }
  }

  useEffect(() => {
    method.reset({
      name: user.name,
      username: user?.username,
    });
  }, [user]);

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
    <Modal
      setModalOpen={setModalOpen}
      title={"Editar usuário"}
      confirmButtonText={"Editar"}
      content={
        <FormProvider {...method}>
          <S.Container id="formModal" onSubmit={method.handleSubmit(onSubmit)}>
            <S.InputContent>
              <S.Row>
                <label htmlFor="name">Nome</label>
                <Input
                  hasError={method.formState.errors.name?.message ? true : false}
                  placeholder="Nome"
                  registerText="name"
                  disabled={true}
                />
              </S.Row>
              <S.Row>
                <label htmlFor="name">Usuário</label>
                <Input
                  hasError={method.formState.errors.username?.message ? true : false}
                  placeholder="Usuário"
                  registerText="username"
                />
              </S.Row>
            </S.InputContent>
            <S.InputContent>
              <S.Row>
                <label htmlFor="name">Senha</label>
                <Input
                  hasError={method.formState.errors.password?.message ? true : false}
                  placeholder="Senha"
                  registerText="password"
                  type="password"
                />
              </S.Row>
              <S.Row></S.Row>
            </S.InputContent>
          </S.Container>
        </FormProvider>
      }
    />
  );
}

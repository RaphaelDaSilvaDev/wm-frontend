import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { ToastStyle } from "../../../../components/Toast";
import { IUserCreate, IUserRequest, IUserUpdate } from "./interfaces";
import { managerUserSchema, managerUserSchemaType } from "./schema";
import { createUser, getUser, updateUser } from "./services";

import * as S from "./styles";

interface IManagerModalProps {
  id?: string;
  setModalOpen: React.Dispatch<React.SetStateAction<JSX.Element>>;
  reload: () => void;
}

export function ManagerUserModal({ reload, setModalOpen, id }: IManagerModalProps) {
  const [loading, setLoading] = useState({ loadingData: false, submitted: false });

  const [user, setUser] = useState<IUserRequest>();

  const method = useForm<managerUserSchemaType>({
    resolver: zodResolver(managerUserSchema),
    mode: "onSubmit",
  });

  async function LoadUser() {
    if (id) {
      setLoading((prev) => {
        return { loadingData: true, submitted: prev.submitted };
      });

      try {
        const request = await getUser(id);
        setUser(request);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoading((prev) => {
          return { loadingData: false, submitted: prev.submitted };
        });
      }
    }
  }

  async function onSubmit() {
    setLoading((prev) => {
      return { loadingData: prev.loadingData, submitted: true };
    });
    if (id) {
      const values: IUserUpdate = method.getValues();
      values.id = id;
      try {
        await updateUser(values);
        ToastStyle({ message: "Editado com sucesso", styleToast: "success" });
        setModalOpen(<></>);
        reload();
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
    } else {
      const values: IUserCreate = method.getValues();
      try {
        await createUser(values);
        ToastStyle({ message: "Adicionado com sucesso", styleToast: "success" });
        setModalOpen(<></>);
        reload();
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
  }

  useEffect(() => {
    method.reset({
      name: user?.name,
      username: user?.username,
    });
  }, [user]);

  useEffect(() => {
    if (id) {
      LoadUser();
    }
  }, [id]);

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
      title={id ? "Editar usuário" : "Adicionar Usuário"}
      confirmButtonText={id ? "Editar" : "Adicionar"}
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
                  disabled={id ? true : false}
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

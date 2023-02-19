import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

import { zodResolver } from "@hookform/resolvers/zod";

import { Wrapper } from "../../layout/Wrapper";
import { Button } from "../../components/Button";
import { ToastStyle } from "../../components/Toast";

import { AuthUserContext } from "../../services/authUserContext";
import { api } from "../../services/axios";
import { editSchema, editSchemaType } from "./schema";

import * as S from "./styles";
import { Page } from "../../components/Page";

interface PayloadProps {
  name?: string;
  password?: string;
}

export function Home() {
  const [cookie, setCookie] = useCookies(["user"]);
  const { info } = useContext(AuthUserContext);

  const [loadingButton, setLoadingButton] = useState<boolean>(false);

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<editSchemaType>({
    resolver: zodResolver(editSchema),
    mode: "onSubmit",
  });

  async function handleUpdateProfile() {
    setLoadingButton(true);
    const payload: PayloadProps = {};
    const name = watch("name");
    const password = watch("password");

    if (name) payload.name = name;
    if (password) payload.password = password;

    name ? (info.user.name = name) : "";

    if (JSON.stringify(payload) !== "{}") {
      try {
        await api.patch("/user/update", payload);
        setCookie("user", info);
        ToastStyle({
          message: "Successfully updated user",
          styleToast: "success",
        });
        reset();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoadingButton(false);
      }
    } else {
      ToastStyle({
        message: "You need set a name or a password for update",
        styleToast: "warning",
      });
      setLoadingButton(false);
    }
  }

  useEffect(() => {
    const values = Object.values(errors);
    values.map((value) => {
      ToastStyle({
        message: value.message ? value.message : "Fill in all fields!",
        styleToast: "warning",
      });
    });
  }, [errors]);

  return (
    <Page>
      <S.Content onSubmit={handleSubmit(handleUpdateProfile)}>
        <h1>Edit your account</h1>

        <Button text="Update Account" loading={loadingButton} />
      </S.Content>
    </Page>
  );
}

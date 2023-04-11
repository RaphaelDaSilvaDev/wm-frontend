import { FormProvider, useForm } from "react-hook-form";
import { Page } from "../../components/Page";
import * as S from "./styles";
import { InputLabel } from "../../components/InputWithLabel";
import { feedbackSchema, feedbackSchemaType } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { ToastStyle } from "../../components/Toast";
import { CreateFeedBackService } from "./service";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function FeedBack() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const methods = useForm<feedbackSchemaType>({
    resolver: zodResolver(feedbackSchema),
    mode: "onSubmit",
  });

  async function handleOnSubmit() {
    setLoading(true);
    const payload = { title: methods.getValues("title"), text: methods.getValues("text") };
    const clientCode = Cookies.get("clientCode");
    try {
      if (clientCode) {
        await CreateFeedBackService(payload, clientCode);
        ToastStyle({ message: "FeedBack enviado com sucesso", styleToast: "success" });
        navigate("/service");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const values = Object.values(methods.formState.errors);
    values.map((value) => {
      ToastStyle({
        message: value.message ? value.message : "Fill in all fields!",
        styleToast: "warning",
      });
    });
  }, [methods.formState.errors]);

  return (
    <Page>
      <S.Container>
        <S.Header>
          <span>Deixar FeedBack</span>
        </S.Header>
        <FormProvider {...methods}>
          <S.Body id="FeedBackUpload" onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <S.Lines>
              <InputLabel
                label="Título do FeedBack"
                registerText="title"
                placeholder="Insira o título do feedBack"
                hasError={methods.formState.errors.title?.message ? true : false}
              />
            </S.Lines>
            <S.Lines>
              <TextArea
                hasError={methods.formState.errors.text?.message ? true : false}
                placeholder="Insira o feedBack"
                registerText="text"
                label="FeedBack"
              />
            </S.Lines>
          </S.Body>
        </FormProvider>
        <S.Footer>
          <S.ButtonSize>
            <Button loading={loading} text="Adicionar" form="FeedBackUpload" type="submit" />
          </S.ButtonSize>
        </S.Footer>
      </S.Container>
    </Page>
  );
}

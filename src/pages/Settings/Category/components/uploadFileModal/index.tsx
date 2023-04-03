import { useState } from "react";
import * as S from "./styles";
import { UploadCategoriesFileService, UploadProductsFileService } from "./service";
import axios from "axios";
import { ToastStyle } from "../../../../../components/Toast";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

interface Props {
  page: "category" | "product";
}

export function UploadFileModal({ page }: Props) {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);

  const methods = useForm({
    mode: "onSubmit",
  });

  function alterFile({ target }: React.ChangeEvent<HTMLInputElement>) {
    const file = target && target.files && target.files[0];
    setFile(file);
  }

  async function handleUploadCategories() {
    try {
      if (file) {
        if (page === "category") {
          await UploadCategoriesFileService(file);
          navigate("/settings/categories");
        } else {
          await UploadProductsFileService(file);
          navigate("/products");
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <S.Container id="formModal" onSubmit={methods.handleSubmit(handleUploadCategories)}>
        <input type="file" accept="csv" onChange={(e) => alterFile(e)} />
      </S.Container>
    </FormProvider>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { InputLabel } from "../../../../../components/InputWithLabel";
import { Page } from "../../../../../components/Page";
import { ToastStyle } from "../../../../../components/Toast";
import { ICategoryCreate, ICategoryRequest, ICategoryUpdate } from "./interface";
import { CategorySchema, CategorySchemaType } from "./schemas";
import { CreateCategoryService, GetCategoryService, UpdateCategoryService } from "./service";

import * as S from "./styles";
export function AddCategory() {
  const navigation = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const methods = useForm<CategorySchemaType>({
    resolver: zodResolver(CategorySchema),
    mode: "onSubmit",
  });

  const [category, setCategory] = useState<ICategoryRequest>();
  const [loading, setLoading] = useState<boolean>(false);

  async function getCategory() {
    if (id) {
      setLoading(true);
      try {
        const response = await GetCategoryService(id);
        setCategory(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoading(false);
      }
    }
  }

  async function handleOnSubmit() {
    setLoading(true);
    if (!id) {
      const payload: ICategoryCreate = { name: methods.watch("name") };

      try {
        await CreateCategoryService(payload);
        navigation("/settings/categories");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoading(false);
      }
    } else {
      const payload: ICategoryUpdate = { name: methods.watch("name") };
      try {
        await UpdateCategoryService(payload, id);
        navigation("/settings/categories");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    if (category) {
      methods.reset({
        name: category.name,
      });
    }
  }, [category]);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Page>
      <S.Container>
        <S.Header>
          <span>{id ? "Editar Categoria" : "Adicionar Categoria"}</span>
        </S.Header>
        <FormProvider {...methods}>
          <S.Body id="BasicDataUpdate" onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <S.LinesWithSpace>
              <InputLabel
                registerText="name"
                label="Nome da Categoria"
                placeholder="Insira o nome da Categoria"
                hasError={methods.formState.errors.name?.message ? true : false}
              />
            </S.LinesWithSpace>
          </S.Body>
        </FormProvider>
        <S.Footer>
          <S.Button styleBnt="secondary" onClick={() => navigation("/settings/categories")}>
            <span>Cancelar</span>
          </S.Button>
          <S.Button
            type="submit"
            form="BasicDataUpdate"
            styleBnt="primary"
            disabled={!methods.formState.isDirty}
          >
            <span>{id ? "Editar" : "Adicionar"}</span>
          </S.Button>
        </S.Footer>
      </S.Container>
    </Page>
  );
}
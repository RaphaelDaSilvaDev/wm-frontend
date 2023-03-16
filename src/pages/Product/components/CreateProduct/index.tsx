import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { InputSelect } from "../../../../components/InputSelect";
import { InputLabel } from "../../../../components/InputWithLabel";
import { Page } from "../../../../components/Page";
import { TextArea } from "../../../../components/TextArea";
import { ToastStyle } from "../../../../components/Toast";
import { IResponsible } from "../../../Home/components/CreateService/interfaces";
import { CategoryRequest, ProductPayload } from "./interfaces";
import { ProductSchema, ProductSchemaType } from "./schema";
import { CreateProductService, GetCategoriesService } from "./service";

import * as S from "./style";

export function CreateProduct() {
  const location = useLocation();
  const navigation = useNavigate();

  const methods = useForm<ProductSchemaType>({
    resolver: zodResolver(ProductSchema),
    mode: "onSubmit",
  });

  const [category, setCategory] = useState<IResponsible>();
  const [categories, setCategories] = useState<CategoryRequest[]>([]);
  const [loadingCategory, setLoadingCategory] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const id = location.state?.id;

  async function GetCategory() {
    setLoadingCategory(true);
    try {
      const response = await GetCategoriesService();
      setCategories(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoadingCategory(false);
    }
  }

  async function handleOnSubmit() {
    setLoading(true);
    const values: ProductPayload = {
      ...methods.getValues(),
      categoryId: category?.value ? category.value : "",
    };
    try {
      await CreateProductService(values);
      navigation("/products");
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
    GetCategory();
  }, []);

  const categoryOptions =
    categories.length !== 0
      ? categories.map((category) => {
          return { value: category.id, label: category.name };
        })
      : [];

  return (
    <Page>
      <S.Container>
        <S.Header>
          <span>{id ? "Editar Produto" : "Adicionar Produto"}</span>
        </S.Header>
        <FormProvider {...methods}>
          <S.Body id="BasicDataUpdate" onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <S.LinesWithSpace>
              <InputLabel
                registerText="name"
                label="Nome do Produto"
                placeholder="Insira o nome do Produto"
                hasError={methods.formState.errors.name?.message ? true : false}
              />

              <InputLabel
                registerText="brand"
                label="Marca do Produto"
                placeholder="Insira a Marca do Produto"
                hasError={methods.formState.errors.brand?.message ? true : false}
              />
            </S.LinesWithSpace>
            <S.LinesWithSpace>
              <InputLabel
                registerText="quantity"
                label="Quantidade do Produto"
                placeholder="Insira a quantidade do Produto"
                hasError={methods.formState.errors.quantity?.message ? true : false}
                type="number"
              />

              <InputLabel
                registerText="minQuantity"
                label="Quantidade mínima do Produto"
                placeholder="Insira a quantidade mínima do Produto"
                hasError={methods.formState.errors.minQuantity?.message ? true : false}
                type="number"
              />
            </S.LinesWithSpace>
            <S.LinesWithSpace>
              <InputLabel
                registerText="valueToBuy"
                label="Valor de Compra do Produto"
                placeholder="Insira o valor de Compra do Produto"
                hasError={methods.formState.errors.valueToBuy?.message ? true : false}
                type="number"
              />

              <InputLabel
                registerText="valueToSell"
                label="Valor de Venda do Produto"
                placeholder="Insira o valor de Venda do Produto"
                hasError={methods.formState.errors.valueToSell?.message ? true : false}
                type="number"
              />
            </S.LinesWithSpace>
            <S.LinesWithSpace>
              <TextArea
                hasError={methods.formState.errors.description?.message ? true : false}
                placeholder="Insira a descrição do Produto"
                registerText="description"
                label="Descrição do Produto"
              />

              <InputSelect
                label="Categoria do Produto"
                placeHolder="Selecione a Categoria"
                disabled={loadingCategory}
                options={categoryOptions}
                setValue={setCategory}
                value={category}
              />
            </S.LinesWithSpace>
          </S.Body>
        </FormProvider>
        <S.Footer>
          <S.Button styleBnt="secondary" onClick={() => navigation("/products")}>
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

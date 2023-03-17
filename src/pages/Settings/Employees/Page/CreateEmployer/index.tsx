import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { InputLabel } from "../../../../../components/InputWithLabel";
import { Page } from "../../../../../components/Page";
import { ToastStyle } from "../../../../../components/Toast";
import { EmployeePayload } from "./interfaces";
import { CreateEmployerSchema, CreateEmployerSchemaType } from "./schemas";
import { CreateEmployeeService } from "./service";

import * as S from "./styles";

export function CreateEmployer() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const [loading, setLoading] = useState<boolean>(false);

  const methods = useForm<CreateEmployerSchemaType>({
    resolver: zodResolver(CreateEmployerSchema),
    mode: "onSubmit",
  });

  async function handleOnSubmit() {
    setLoading(true);
    const values: EmployeePayload = methods.getValues();
    try {
      await CreateEmployeeService(values);
      navigate("/settings/employees");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Page>
      <S.Container>
        <S.Header>
          <span>Adicionar Funcionário</span>
        </S.Header>
        <FormProvider {...methods}>
          <S.Body id="BasicDataUpdate" onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <S.LinesWithSpace>
              <InputLabel
                registerText="name"
                label="Nome do Funcionário"
                placeholder="Insira o nome do Funcionário"
                hasError={methods.formState.errors.name?.message ? true : false}
              />
              <InputLabel
                registerText="username"
                label="Usuário do Funcionário"
                placeholder="Insira o usuário do Funcionário"
                hasError={methods.formState.errors.username?.message ? true : false}
              />
            </S.LinesWithSpace>
            <S.LinesWithSpace>
              <InputLabel
                registerText="document"
                label="CPF do Funcionário"
                placeholder="Insira o CPF do Funcionário"
                hasError={methods.formState.errors.document?.message ? true : false}
                mask="999.999.999-99"
              />
              <InputLabel
                registerText="bornAt"
                label="Nascimento do Funcionário"
                placeholder="Insira o nascimento do Funcionário"
                hasError={methods.formState.errors.bornAt?.message ? true : false}
                type="date"
              />
            </S.LinesWithSpace>
            <S.LinesWithSpace>
              <InputLabel
                registerText="cellphoneNumber"
                label="Celular do Cliente"
                placeholder="Insira o celular do Cliente"
                hasError={methods.formState.errors.cellphoneNumber?.message ? true : false}
                mask="(99) 9 9999-9999"
              />
              <InputLabel
                registerText="phoneNumber"
                label="Telefone do Cliente"
                placeholder="Insira o telefone do Cliente"
                hasError={methods.formState.errors.phoneNumber?.message ? true : false}
                mask="(99) 9999-9999"
              />
              <InputLabel
                registerText="email"
                label="Email"
                placeholder="Insira o Email do Cliente"
                hasError={methods.formState.errors.email?.message ? true : false}
              />
            </S.LinesWithSpace>
            <S.LinesWithSpace>
              <InputLabel
                registerText="addressState"
                label="Estado"
                placeholder="Insira o Estado"
                hasError={methods.formState.errors.addressState?.message ? true : false}
              />
              <InputLabel
                registerText="addressCity"
                label="Cidade"
                placeholder="Insira a Cidade"
                hasError={methods.formState.errors.addressCity?.message ? true : false}
              />
            </S.LinesWithSpace>
            <S.LinesWithSpace>
              <InputLabel
                registerText="addressDistrict"
                label="Bairro"
                placeholder="Insira o Bairro"
                hasError={methods.formState.errors.addressDistrict?.message ? true : false}
              />
              <InputLabel
                registerText="addressStreet"
                label="Rua"
                placeholder="Insira a Rua"
                hasError={methods.formState.errors.addressStreet?.message ? true : false}
              />
              <InputLabel
                registerText="addressNumber"
                label="Número"
                placeholder="Insira o Número"
                hasError={methods.formState.errors.addressNumber?.message ? true : false}
              />
            </S.LinesWithSpace>
          </S.Body>
        </FormProvider>
        <S.Footer>
          <S.Button styleBnt="secondary" onClick={() => navigate("/settings/employees")}>
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

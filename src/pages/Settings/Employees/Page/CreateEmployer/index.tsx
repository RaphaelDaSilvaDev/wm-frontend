import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { format, subYears } from "date-fns";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Loading from "react-loading";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/Button";
import { InputLabel } from "../../../../../components/InputWithLabel";
import { LoadingContainer } from "../../../../../components/Modal/styles";
import { Page } from "../../../../../components/Page";
import { ToastStyle } from "../../../../../components/Toast";
import { EmployeePayload, IEmployeeRequest, IEmployeeUpdate } from "./interfaces";
import { CreateEmployerSchema, CreateEmployerSchemaType } from "./schemas";
import { CreateEmployeeService, GetEmployeeService, UpdateEmployessService } from "./service";

import * as S from "./styles";

export function CreateEmployer() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const [employee, setEmployee] = useState<IEmployeeRequest>();
  const [loading, setLoading] = useState<boolean>(true);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  const methods = useForm<CreateEmployerSchemaType>({
    resolver: zodResolver(CreateEmployerSchema),
    mode: "onSubmit",
  });

  async function getEmployee() {
    if (id) {
      setLoading(true);
      try {
        const response = await GetEmployeeService(id);
        setEmployee(response);
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
    setButtonLoading(true);
    if (!id) {
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
        setButtonLoading(false);
      }
    } else {
      const payload: IEmployeeUpdate = {};

      const phoneNumber = methods.watch("phoneNumber");
      const cellphoneNumber = methods.watch("cellphoneNumber");
      const email = methods.watch("email");
      const addressState = methods.watch("addressState");
      const addressCity = methods.watch("addressCity");
      const addressDistrict = methods.watch("addressDistrict");
      const addressStreet = methods.watch("addressStreet");
      const addressNumber = methods.watch("addressNumber");

      if (phoneNumber) payload.phoneNumber = phoneNumber;
      if (cellphoneNumber) payload.cellphoneNumber = cellphoneNumber;
      if (email) payload.email = email;
      if (addressState) payload.addressState = addressState;
      if (addressCity) payload.addressCity = addressCity;
      if (addressDistrict) payload.addressDistrict = addressDistrict;
      if (addressStreet) payload.addressStreet = addressStreet;
      if (addressNumber) payload.addressNumber = addressNumber;

      try {
        await UpdateEmployessService(payload, id);
        navigate("/settings/employees");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setButtonLoading(false);
      }
    }
  }

  function failSubmit() {
    console.log(methods.formState.errors);
  }

  useEffect(() => {
    if (employee) {
      methods.reset({
        addressCity: employee.addressCity,
        addressDistrict: employee.addressDistrict,
        addressNumber: employee.addressNumber,
        addressState: employee.addressState,
        addressStreet: employee.addressStreet,
        bornAt: format(new Date(employee.bornAt), "yyyy-MM-dd"),
        cellphoneNumber: employee.cellphoneNumber,
        document: employee.document,
        email: employee.email,
        name: employee.name,
        phoneNumber: employee.phoneNumber,
        username: employee.username,
      });
    }
  }, [employee]);

  useEffect(() => {
    getEmployee();
    if (!id) {
      setLoading(false);
    }
  }, []);

  return (
    <Page>
      <S.Container>
        <S.Header>
          <span>Adicionar Funcionário</span>
        </S.Header>
        {loading ? (
          <LoadingContainer>
            <Loading type="spin" />
          </LoadingContainer>
        ) : (
          <>
            <FormProvider {...methods}>
              <S.Body
                id="BasicDataUpdate"
                onSubmit={methods.handleSubmit(handleOnSubmit, failSubmit)}
              >
                <S.LinesWithSpace>
                  <InputLabel
                    registerText="name"
                    label="Nome do Funcionário"
                    placeholder="Insira o nome do Funcionário"
                    hasError={methods.formState.errors.name?.message ? true : false}
                    disabled={id ? true : false}
                  />
                  <InputLabel
                    registerText="username"
                    label="Usuário do Funcionário"
                    placeholder="Insira o usuário do Funcionário"
                    hasError={methods.formState.errors.username?.message ? true : false}
                    disabled={id ? true : false}
                  />
                </S.LinesWithSpace>
                <S.LinesWithSpace>
                  <InputLabel
                    registerText="document"
                    label="CPF do Funcionário"
                    placeholder="Insira o CPF do Funcionário"
                    hasError={methods.formState.errors.document?.message ? true : false}
                    mask="999.999.999-99"
                    disabled={id ? true : false}
                  />
                  <InputLabel
                    registerText="bornAt"
                    label="Nascimento do Funcionário"
                    placeholder="Insira o nascimento do Funcionário"
                    hasError={methods.formState.errors.bornAt?.message ? true : false}
                    type="date"
                    disabled={id ? true : false}
                    max={subYears(new Date(), 14).toISOString().split("T")[0]}
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
              <S.ButtonSize>
                <Button
                  loading={buttonLoading}
                  text={id ? "Editar" : "Adicionar"}
                  type="submit"
                  form="BasicDataUpdate"
                />
              </S.ButtonSize>
            </S.Footer>
          </>
        )}
      </S.Container>
    </Page>
  );
}

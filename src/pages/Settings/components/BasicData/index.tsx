import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { CaretDown, CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputLabel } from "../../../../components/InputWithLabel";
import { getClientService } from "../../../Login/service";
import { IBasicDataRequest } from "./interfaces";
import { BasicDataSchema, BasicDataSchemaType } from "./schemas";
import * as S from "./styles";

export function BasicData() {
  const methods = useForm<BasicDataSchemaType>({
    resolver: zodResolver(BasicDataSchema),
    mode: "onSubmit",
  });

  const [data, setData] = useState<IBasicDataRequest>();

  async function GetData() {
    const clientCode = Cookies.get("clientCode");
    if (clientCode) {
      const response = await getClientService(clientCode);
      setData(response);
    }
  }

  async function handleOnSubmit() {}

  useEffect(() => {
    if (data) {
      methods.reset({
        name: data.name,
        socialName: data.socialName,
        document: data.document,
        cep: data.cep,
        addressState: data.addressState,
        addressCity: data.addressCity,
        addressStreet: data.addressStreet,
        addressNumber: data.addressNumber,
        addressDistrict: data.addressDistrict,
        phoneNumber: data.phoneNumber,
        cellphoneNumber: data.cellphoneNumber,
        email: data.email,
      });
    }
  }, [data]);

  useEffect(() => {
    GetData();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <span>Dados da Empresa</span>
      </S.Header>
      {
        <>
          <FormProvider {...methods}>
            <S.Body id="BasicDataUpdate" onSubmit={methods.handleSubmit(handleOnSubmit)}>
              <S.Lines>
                <InputLabel
                  label="Nome Fantasia"
                  registerText="name"
                  placeholder="Insira o nome da Empresa"
                  disabled
                  hasError={methods.formState.errors.name?.message ? true : false}
                />
                <InputLabel
                  label="Razão Social"
                  registerText="socialName"
                  placeholder="Insira a Razão Social"
                  disabled
                  hasError={methods.formState.errors.socialName?.message ? true : false}
                />
                <InputLabel
                  registerText="document"
                  label="CNPJ"
                  placeholder="Insiar o CNPJ da Empresa"
                  disabled
                  hasError={methods.formState.errors.document?.message ? true : false}
                  mask="99.999.999/9999-99"
                />
              </S.Lines>

              <S.Lines>
                <InputLabel
                  registerText="cep"
                  label="CEP"
                  placeholder="Insira o CEP"
                  hasError={methods.formState.errors.cep?.message ? true : false}
                  mask="99999-999"
                />
                <InputLabel
                  registerText="addressState"
                  label="Insira o Estado"
                  placeholder="Insira o Estado"
                  hasError={methods.formState.errors.addressState?.message ? true : false}
                />
                <InputLabel
                  registerText="addressCity"
                  label="Cidade"
                  placeholder="Insira a Cidade"
                  hasError={methods.formState.errors.addressCity?.message ? true : false}
                />
              </S.Lines>

              <S.Lines>
                <InputLabel
                  registerText="addressStreet"
                  label="Endereço"
                  placeholder="Insira o Endereço"
                  hasError={methods.formState.errors.addressStreet?.message ? true : false}
                />
                <InputLabel
                  registerText="addressNumber"
                  label="Número"
                  placeholder="Insira o Número"
                  hasError={methods.formState.errors.addressNumber?.message ? true : false}
                />
                <InputLabel
                  registerText="addressDistrict"
                  label="Bairro"
                  placeholder="Insira o Bairro"
                  hasError={methods.formState.errors.addressDistrict?.message ? true : false}
                />
              </S.Lines>

              <S.Lines>
                <InputLabel
                  registerText="phoneNumber"
                  label="Telefone"
                  placeholder="Insira o Telefone"
                  hasError={methods.formState.errors.phoneNumber?.message ? true : false}
                  mask="(99) 9 9999-9999"
                />
                <InputLabel
                  registerText="cellphoneNumber"
                  label="Celular"
                  placeholder="Insira o Celular"
                  hasError={methods.formState.errors.cellphoneNumber?.message ? true : false}
                  mask="(99) 9 9999-9999"
                />
                <InputLabel
                  type="email"
                  registerText="email"
                  label="Email"
                  placeholder="Insira o Email"
                  hasError={methods.formState.errors.email?.message ? true : false}
                />
              </S.Lines>
            </S.Body>
          </FormProvider>
          <S.Footer>
            <S.Button
              type="submit"
              form="BasicDataUpdate"
              styleBnt="primary"
              disabled={!methods.formState.isDirty}
            >
              <span>Editar</span>
            </S.Button>
          </S.Footer>
        </>
      }
    </S.Container>
  );
}

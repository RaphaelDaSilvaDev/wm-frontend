import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FormProvider, useForm } from "react-hook-form";
import Loading from "react-loading";
import { Button } from "../../../components/Button";
import { InputAvatar } from "../../../components/InputAvatar";
import { InputLabel } from "../../../components/InputWithLabel";
import { Page } from "../../../components/Page";
import { ToastStyle } from "../../../components/Toast";
import { getClientService } from "../../Login/service";
import { LoadingContainer } from "../../Login/styles";
import { IBasicDataRequest, IBasicDataUpdate } from "./interfaces";
import { BasicDataSchema, BasicDataSchemaType } from "./schemas";
import { UpdateBasicDataService } from "./service";
import * as S from "./styles";

export function EditAccount() {
  const methods = useForm<BasicDataSchemaType>({
    resolver: zodResolver(BasicDataSchema),
    mode: "onSubmit",
  });
  const [cookies, setCookies] = useCookies(["client"]);

  const [data, setData] = useState<IBasicDataRequest>();
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<File | undefined>(undefined);

  async function GetData() {
    setLoading(true);
    try {
      const clientCode = Cookies.get("clientCode");
      if (clientCode) {
        const response = await getClientService(clientCode);
        setData(response);
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

  async function handleOnSubmit() {
    setButtonLoading(true);
    const payload: IBasicDataUpdate = {};

    const cep = methods.watch("cep");
    const addressState = methods.watch("addressState");
    const addressCity = methods.watch("addressCity");
    const addressStreet = methods.watch("addressStreet");
    const addressNumber = methods.watch("addressNumber");
    const addressDistrict = methods.watch("addressDistrict");
    const phoneNumber = methods.watch("phoneNumber");
    const cellphoneNumber = methods.watch("cellphoneNumber");
    const email = methods.watch("email");

    if (cep) payload.cep = cep;
    if (addressState) payload.addressState = addressState;
    if (addressCity) payload.addressCity = addressCity;
    if (addressStreet) payload.addressStreet = addressStreet;
    if (addressNumber) payload.addressNumber = addressNumber;
    if (addressDistrict) payload.addressDistrict = addressDistrict;
    if (phoneNumber) payload.phoneNumber = phoneNumber;
    if (cellphoneNumber) payload.cellphoneNumber = cellphoneNumber;
    if (email) payload.email = email;
    if (avatar) payload.avatar = avatar as File;

    try {
      const response = await UpdateBasicDataService(payload, data?.id);
      const newCookie = { ...cookies.client, avatar: response.avatar_url };
      setCookies("client", newCookie);
      ToastStyle({ message: "Dados atualizados com sucesso", styleToast: "success" });
      GetData();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setButtonLoading(false);
    }
  }

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
    <Page>
      <S.Container>
        <S.Header>
          <span>Dados da Empresa</span>
        </S.Header>
        {loading ? (
          <LoadingContainer>
            <Loading type="spin" />
          </LoadingContainer>
        ) : (
          <>
            <FormProvider {...methods}>
              <S.Body id="BasicDataUpdate" onSubmit={methods.handleSubmit(handleOnSubmit)}>
                <S.Lines>
                  <InputAvatar setAvatar={setAvatar} />
                </S.Lines>
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
              <S.ButtonSize>
                <Button
                  loading={buttonLoading}
                  text="Editar"
                  form="BasicDataUpdate"
                  type="submit"
                />
              </S.ButtonSize>
            </S.Footer>
          </>
        )}
      </S.Container>
    </Page>
  );
}

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { InputSelect } from "../../../../components/InputSelect";
import { InputLabel } from "../../../../components/InputWithLabel";
import { Page } from "../../../../components/Page";
import { getAllClients } from "../../../Clients/services";
import { IResponsible } from "../../../Home/components/CreateService/interfaces";
import { IClientRequest } from "../../../Clients/interfaces";
import { CreateVehicleSchema, CreateVehicleSchemaType } from "./schemas";

import * as S from "./styles";
import { IVehicleRequest, IVehicleUpdate, VehiclePayload } from "./interfaces";
import { CreateVehicleService, GetVehicle, UpdateVehicle } from "./services";
import axios from "axios";
import { ToastStyle } from "../../../../components/Toast";
import { format } from "date-fns";
import { LoadingContainer } from "../../../../components/Modal/styles";
import Loading from "react-loading";
import { Button } from "../../../../components/Button";

export function CreateVehicle() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const [vehicle, setVehicle] = useState<IVehicleRequest>();
  const [client, setClient] = useState<IResponsible>();
  const [clients, setClients] = useState<IClientRequest[]>([]);
  const [loadClients, setLoadClients] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);

  async function getVehicle() {
    if (id) {
      setLoading(true);
      try {
        const response = await GetVehicle(id);
        setVehicle(response);
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

  async function getClientes() {
    setLoadClients(true);
    try {
      const response = await getAllClients();
      setClients(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoadClients(false);
    }
  }

  async function handleOnSubmit() {
    setButtonLoading(true);
    if (!id) {
      const values: VehiclePayload = {
        ...methods.getValues(),
        clientId: client?.value ? client.value : "",
      };
      try {
        await CreateVehicleService(values);
        navigate("/vehicles");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setButtonLoading(false);
      }
    } else {
      const payload: IVehicleUpdate = { client_id: client?.value || "" };

      try {
        await UpdateVehicle(payload, id);
        navigate("/vehicles");
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

  const methods = useForm<CreateVehicleSchemaType>({
    resolver: zodResolver(CreateVehicleSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (vehicle) {
      methods.reset({
        brand: vehicle.brand,
        color: vehicle.color,
        fuel: vehicle.fuel,
        launchYear:
          (Number(format(new Date(vehicle.launchYear), "yyyy")) + 1).toString() +
          (Number(format(new Date(vehicle.modelYear), "yyyy")) + 1).toString(),
        model: vehicle.model,
        plate: vehicle.plate,
      });

      setClient({ value: vehicle.Client.id, label: vehicle.Client.name });
    }
  }, [vehicle]);

  useEffect(() => {
    getClientes();
    getVehicle();
    if (!id) {
      setLoading(false);
    }
  }, []);

  const clientOptions =
    clients.length !== 0
      ? clients.map((client) => {
          return { value: client.id, label: client.name };
        })
      : [];

  return (
    <Page>
      <S.Container>
        <S.Header>
          <span>{id ? "Editar Veículo" : "Adicionar Veículo"}</span>
        </S.Header>
        {loading ? (
          <LoadingContainer>
            <Loading type="spin" />
          </LoadingContainer>
        ) : (
          <>
            <FormProvider {...methods}>
              <S.Body id="BasicDataUpdate" onSubmit={methods.handleSubmit(handleOnSubmit)}>
                <S.LinesWithSpace>
                  <InputLabel
                    label="Modelo do Veículo"
                    placeholder="Insira o modelo do veículo"
                    hasError={methods.formState.errors.model?.message ? true : false}
                    registerText="model"
                    disabled={id ? true : false}
                  />
                  <InputLabel
                    label="Marca do Veículo"
                    placeholder="Insira a marca do veículo"
                    hasError={methods.formState.errors.brand?.message ? true : false}
                    registerText="brand"
                    disabled={id ? true : false}
                  />
                  <InputLabel
                    label="Placa do Veículo"
                    placeholder="Insira a placa do veículo"
                    hasError={methods.formState.errors.plate?.message ? true : false}
                    registerText="plate"
                    mask="aaa-9*99"
                    disabled={id ? true : false}
                  />
                </S.LinesWithSpace>
                <S.LinesWithSpace>
                  <InputLabel
                    label="Ano/Modelo do Veículo"
                    placeholder="Insira o Ano/Modelo do veículo"
                    hasError={methods.formState.errors.launchYear?.message ? true : false}
                    registerText="launchYear"
                    mask="9999/9999"
                  />
                  <InputLabel
                    label="Combustível do Veículo"
                    placeholder="Insira o combustível do veículo"
                    hasError={methods.formState.errors.fuel?.message ? true : false}
                    registerText="fuel"
                    disabled={id ? true : false}
                  />
                  <InputLabel
                    label="Cor do Veículo"
                    placeholder="Insira a cor do veículo"
                    hasError={methods.formState.errors.color?.message ? true : false}
                    registerText="color"
                    disabled={id ? true : false}
                  />
                </S.LinesWithSpace>
                <S.LinesWithSpace>
                  <InputSelect
                    label="Cliente"
                    options={clientOptions}
                    placeHolder="Selecione o Cliente"
                    setValue={setClient}
                    value={client}
                  />
                </S.LinesWithSpace>
              </S.Body>
            </FormProvider>
            <S.Footer>
              <S.Button styleBnt="secondary" onClick={() => navigate("/vehicles")}>
                <span>Cancelar</span>
              </S.Button>
              <S.ButtonSize>
                <Button
                  loading={buttonLoading}
                  text={id ? "Editar" : "Adicionar"}
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

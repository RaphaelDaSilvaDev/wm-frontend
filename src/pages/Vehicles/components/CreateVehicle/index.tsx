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
import { VehiclePayload } from "./interfaces";
import { CreateVehicleService } from "./services";

export function CreateVehicle() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const [client, setClient] = useState<IResponsible>();
  const [clients, setClients] = useState<IClientRequest[]>([]);
  const [loadClients, setLoadClients] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function getClientes() {
    setLoadClients(true);
    try {
      const response = await getAllClients();
      setClients(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadClients(false);
    }
  }

  async function handleOnSubmit() {
    setLoading(true);
    const values: VehiclePayload = {
      ...methods.getValues(),
      clientId: client?.value ? client.value : "",
    };
    try {
      await CreateVehicleService(values);
      navigate("/vehicles");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const methods = useForm<CreateVehicleSchemaType>({
    resolver: zodResolver(CreateVehicleSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    getClientes();
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
        <FormProvider {...methods}>
          <S.Body id="BasicDataUpdate" onSubmit={methods.handleSubmit(handleOnSubmit)}>
            <S.LinesWithSpace>
              <InputLabel
                label="Modelo do Veículo"
                placeholder="Insira o modelo do veículo"
                hasError={methods.formState.errors.model?.message ? true : false}
                registerText="model"
              />
              <InputLabel
                label="Marca do Veículo"
                placeholder="Insira a marca do veículo"
                hasError={methods.formState.errors.brand?.message ? true : false}
                registerText="brand"
              />
              <InputLabel
                label="Placa do Veículo"
                placeholder="Insira a placa do veículo"
                hasError={methods.formState.errors.plate?.message ? true : false}
                registerText="plate"
                mask="aaa-9*99"
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
              />
              <InputLabel
                label="Cor do Veículo"
                placeholder="Insira a cor do veículo"
                hasError={methods.formState.errors.color?.message ? true : false}
                registerText="color"
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

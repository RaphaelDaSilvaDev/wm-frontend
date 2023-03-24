import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Loading from "react-loading";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { InputSelect } from "../../../../components/InputSelect";
import { InputLabel } from "../../../../components/InputWithLabel";
import { Manager } from "../../../../components/Manager";
import { Page } from "../../../../components/Page";
import { TextArea } from "../../../../components/TextArea";
import { ToastStyle } from "../../../../components/Toast";
import { ToolBar } from "../../../../components/ToolBar";
import { IClientRequest } from "../../../Clients/interfaces";
import { getAllClients } from "../../../Clients/services";
import { LoadingContainer } from "../../../Login/styles";
import { IVehicleRequest } from "../../../Vehicles/interfaces";
import { IDropDown } from "../../interface";
import { AddProduct } from "../AddProduct";
import { ProductHeader } from "./header";
import {
  ICreateService,
  IResponsible,
  IResponsibleRequest,
  IServiceProductRequest,
  IServiceProductToManager,
  IServiceRequest,
  IEditService,
  IProductServiceUpdate,
} from "./interfaces";
import { ProductParse } from "./parse";
import { ServiceSchema, ServiceSchemaType } from "./schemas";
import {
  AddService,
  CreateProductService,
  EditService,
  GetResponsible,
  getService,
  getServiceProduct,
  GetVehicleByClientService,
} from "./services";

import * as S from "./styles";

export function CreateService() {
  const navigation = useNavigate();
  const location = useLocation();
  const methods = useForm<ServiceSchemaType>({
    resolver: zodResolver(ServiceSchema),
    mode: "onSubmit",
  });

  const id: string = location.state?.id;

  const [searchProduct, setSearchProduct] = useState<string>("");

  const [client, setClient] = useState<IResponsible>();
  const [clients, setClients] = useState<IClientRequest[]>([]);
  const [responsible, setResponsible] = useState<IResponsible>();
  const [responsibles, setResponsibles] = useState<IResponsibleRequest[]>([]);
  const [vehicle, setVehicle] = useState<IResponsible>();
  const [vehicles, setVehicles] = useState<IVehicleRequest[]>([]);

  const [serviceProduct, setServiceProduct] = useState<IServiceProductRequest[]>([]);
  const [serviceProductToManager, setServiceProductToManager] = useState<
    IServiceProductToManager[]
  >([]);

  const [service, setService] = useState<IServiceRequest>();
  const [serviceModal, setServiceModal] = useState<JSX.Element>(<></>);

  const [loadClient, setLoadClient] = useState<boolean>(false);
  const [loadResponsible, setLoadResponsible] = useState<boolean>(false);
  const [loadVehicle, setLoadVehicle] = useState<boolean>(false);
  const [loadSubmit, setLoadSubmit] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);

  async function loadingService() {
    if (id) {
      setLoading(true);
      try {
        const response = await getService(id);
        setService(response);
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

  async function loadingServiceProduct() {
    if (id) {
      setLoadingProducts(true);
      try {
        const response = await getServiceProduct(id);
        setServiceProduct(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoadingProducts(false);
      }
    }
  }

  async function handleOnSubmit() {
    setLoadSubmit(true);

    if (!id) {
      const values = methods.getValues();

      const date = values.delivery_date.split("-");
      const time = values.delivery_hour.split(":");

      const payload: ICreateService = {
        client_observation: values.client_observation,
        responsible_observation: values.responsible_observation
          ? values.responsible_observation
          : "",
        delivery: new Date(
          Number(date[0]),
          Number(Number(date[1]) - 1),
          Number(date[2]),
          Number(time[0]),
          Number(time[1])
        ),
        clientId: client && client.value ? client.value : "",
        vehicleId: vehicle && vehicle.value ? vehicle.value : "",
        responsible: responsible && responsible.value ? responsible.value : "",
        price: 0,
      };

      try {
        await AddService(payload);
        navigation("/service");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoadSubmit(false);
      }
    } else {
      const payload: IEditService = {};
      const deliveryDate = methods.getValues("delivery_date");
      const deliveryHour = methods.getValues("delivery_hour");
      const responsibleObservation = methods.getValues("responsible_observation");
      const responsibleData = responsible;
      const discountPercentage = methods.getValues("discountPercentage");
      const discountValue = methods.getValues("discountValue");
      const price = methods.getValues("price");

      if (deliveryDate || deliveryHour) {
        const date = deliveryDate.split("-");
        const time = deliveryHour.split(":");
        payload.delivery = new Date(
          Number(date[0]),
          Number(Number(date[1]) - 1),
          Number(date[2]),
          Number(time[0]),
          Number(time[1])
        );
      }

      if (responsibleObservation) {
        payload.responsible_observation = responsibleObservation;
      }

      if (responsibleData?.value !== service?.responsible) {
        payload.responsible = responsibleData?.value || "";
      }

      payload.discountPercentage = discountPercentage;
      payload.discountValue = discountValue;

      payload.price = price;

      const productService: IProductServiceUpdate[] = serviceProductToManager.map((item) => {
        return { serviceId: id, productId: item.id, quantity: item.amount };
      });

      try {
        await EditService(payload, id);
        await CreateProductService(productService);
        navigation("/service");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoadSubmit(false);
      }
    }
  }

  async function getResponsible() {
    setLoadResponsible(true);
    try {
      const response = await GetResponsible();
      setResponsibles(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoadResponsible(false);
    }
  }

  async function getClient() {
    setLoadClient(true);
    try {
      const response = await getAllClients();
      setClients(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoadClient(false);
    }
  }

  async function getVehicle() {
    setLoadVehicle(true);
    try {
      const response = await GetVehicleByClientService(client && client.value ? client.value : "");
      setVehicles(response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    } finally {
      setLoadVehicle(false);
    }
  }

  function handleRemoveProduct(productId: string) {
    setServiceProduct((prev) => [...prev.filter((product) => product.product.id !== productId)]);
  }

  useEffect(() => {
    if (serviceProductToManager.length !== 0) {
      const discountValue = methods.watch("discountValue");
      const discountPercentage = methods.watch("discountPercentage");

      let totalPrice = serviceProductToManager.reduce(
        (acc, value) => (acc += Number(value.total.props.children)),
        0
      );

      if (discountValue) {
        totalPrice -= discountValue;
      }

      if (discountPercentage) {
        totalPrice = totalPrice - (totalPrice * discountPercentage) / 100;
      }

      methods.setValue("price", Number(totalPrice.toFixed(2)));
    } else {
      methods.setValue("price", 0);
    }
  }, [
    serviceProductToManager,
    methods.watch("discountPercentage"),
    methods.watch("discountValue"),
  ]);

  useEffect(() => {
    setServiceProductToManager(ProductParse(serviceProduct, handleRemoveProduct));
  }, [serviceProduct]);

  useEffect(() => {
    if (service) {
      methods.reset({
        client_observation: service.client_observation,
        responsible_observation: service.responsible_observation,
        delivery_date: format(new Date(service.delivery), "yyyy-MM-dd"),
        delivery_hour: format(new Date(service.delivery), "HH:mm"),
        discountPercentage: service.discountPercentage || 0,
        discountValue: service.discountValue || 0,
        price: service.price || 0,
      });

      setResponsible({ value: service.user.id, label: service.user.name });
      setClient({ value: service.vehicle.Client.id, label: service.vehicle.Client.name });
      setVehicle({
        value: service.vehicle.id,
        label: service.vehicle.brand + " - " + service.vehicle.model,
      });
    }
  }, [service]);

  useEffect(() => {
    if (client) {
      getVehicle();
    }
  }, [client]);

  useEffect(() => {
    loadingService();
    loadingServiceProduct();
    getResponsible();
    getClient();
    if (!id) {
      setLoading(false);
    }
  }, []);

  const clientOptions =
    clients.length !== 0
      ? clients.map((client) => {
          return {
            value: client.id,
            label: client.name,
          };
        })
      : [];

  const vehiclesOptions =
    vehicles.length !== 0
      ? vehicles.map((vehicle) => {
          return { value: vehicle.id, label: vehicle.brand + " - " + vehicle.model };
        })
      : [];

  const responsibleOptions =
    responsibles.length !== 0
      ? responsibles.map((responsible) => {
          return { value: responsible.id, label: responsible.name };
        })
      : [];

  return (
    <Page>
      <S.Container>
        <S.Header>
          <span>{id ? "Editar Serviço" : "Adicionar Serviço"}</span>
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
                  <InputSelect
                    options={clientOptions}
                    setValue={setClient}
                    value={client}
                    label="Cliente"
                    disabled={id ? true : false}
                    placeHolder="Selecione o Cliente"
                  />

                  <InputSelect
                    options={vehiclesOptions}
                    setValue={setVehicle}
                    value={vehicle}
                    label="Veículo"
                    disabled={id ? true : false}
                    placeHolder="Selecione o Veículo"
                  />
                </S.LinesWithSpace>

                <S.LinesWithSpace>
                  <InputSelect
                    options={responsibleOptions}
                    setValue={setResponsible}
                    value={responsible}
                    label="Responsável"
                    placeHolder="Selecione o Responsável"
                  />
                  <InputLabel
                    registerText="delivery_date"
                    label="Data da Entrega"
                    placeholder="Insira a data da entrega"
                    type="date"
                    hasError={methods.formState.errors.delivery_date?.message ? true : false}
                    min={format(new Date(), "yyyy-MM-dd")}
                  />
                  <InputLabel
                    registerText="delivery_hour"
                    label="Hora da Entrega"
                    placeholder="Insira a hora da entrega"
                    type="time"
                    hasError={methods.formState.errors.delivery_hour?.message ? true : false}
                  />
                  <S.Row>
                    <label>Data da Entrada</label>
                    <S.InputDate
                      type="datetime-local"
                      value={
                        service && service.createdAt
                          ? format(new Date(service.createdAt), `yyyy-MM-dd'T'H:mm`)
                          : format(new Date(), `yyyy-MM-dd'T'H:mm`)
                      }
                      disabled
                    />
                  </S.Row>
                </S.LinesWithSpace>

                <S.Lines>
                  <TextArea
                    hasError={methods.formState.errors.client_observation?.message ? true : false}
                    placeholder="Insira a observação do cliente"
                    registerText="client_observation"
                    label="Observação do cliente"
                    disabled={id ? true : false}
                  />
                </S.Lines>

                {id && (
                  <>
                    <S.Lines>
                      <TextArea
                        hasError={
                          methods.formState.errors.responsible_observation?.message ? true : false
                        }
                        placeholder="Insira a observação do responsável"
                        registerText="responsible_observation"
                        label="Observação do Responsável"
                      />
                    </S.Lines>
                    <S.Row>
                      <label>Produtos e Serviços</label>
                      <S.ProductManager>
                        <ToolBar
                          buttonText="Adicionar Produto"
                          buttonOnClick={() =>
                            setServiceModal(
                              <AddProduct
                                setModalOpen={setServiceModal}
                                setServiceProduct={setServiceProductToManager}
                                serviceProductToManager={serviceProductToManager}
                              />
                            )
                          }
                          searchPlaceHolder="Pesquisar Produto"
                          searchState={setSearchProduct}
                        />
                        <Manager
                          body={serviceProductToManager}
                          header={ProductHeader}
                          loading={loadingProducts}
                        />
                      </S.ProductManager>
                    </S.Row>
                    <S.Lines>
                      <S.Values>
                        <InputLabel
                          registerText="discountPercentage"
                          label="Desconto em %"
                          placeholder="Insira a porcentagem do Desconto"
                          type="number"
                          hasError={
                            methods.formState.errors.discountPercentage?.message ? true : false
                          }
                          min={0}
                          disabled={methods.watch("discountValue") !== 0}
                        />
                        <InputLabel
                          registerText="discountValue"
                          label="Desconto em Reais"
                          placeholder="Insira a quantia do Desconto"
                          type="number"
                          hasError={methods.formState.errors.discountValue?.message ? true : false}
                          min={0}
                          disabled={methods.watch("discountPercentage") !== 0}
                        />
                        <InputLabel
                          registerText="price"
                          label="Valor Total"
                          placeholder="Valor total do Serviço"
                          type="number"
                          hasError={methods.formState.errors.price?.message ? true : false}
                          min={0}
                          disabled
                        />
                      </S.Values>
                    </S.Lines>
                  </>
                )}
              </S.Body>
            </FormProvider>
            <S.Footer>
              <S.Button styleBnt="secondary" onClick={() => navigation("/service")}>
                <span>Cancelar</span>
              </S.Button>
              <S.ButtonSize>
                <Button
                  loading={loadSubmit}
                  text={id ? "Editar" : "Adicionar"}
                  form="BasicDataUpdate"
                  type="submit"
                />
              </S.ButtonSize>
            </S.Footer>
          </>
        )}
      </S.Container>
      {serviceModal}
    </Page>
  );
}

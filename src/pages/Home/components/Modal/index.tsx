import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { IServiceCreate, IServiceRequest, IServiceUpdate, IUser } from "./interfaces";
import { managerServiceSchema, managerServiceSchemaType } from "./schema";
import { createService, getAllUsers, getService, updateService } from "./services";
import ReactLoading from "react-loading";
import * as S from "./styles";
import { TextArea } from "../../../../components/TextArea";
import { ToastStyle } from "../../../../components/Toast";
import { AuthUserContext } from "../../../../services/authUserContext";
import ReactInputMask from "react-input-mask";
import axios from "axios";

interface IManagerModalProps {
  id?: string;
  setModalOpen: React.Dispatch<React.SetStateAction<JSX.Element>>;
  reload: () => void;
}

interface IResponsible {
  value: string | null;
  label: string | null;
}

export function ManagerModal({ setModalOpen, id, reload }: IManagerModalProps) {
  const { info } = useContext(AuthUserContext);
  const [loading, setLoading] = useState({ loadingData: false, submitted: false });
  const [service, setService] = useState<IServiceRequest>();
  const [users, setUsers] = useState<IUser[]>([]);
  const [responsible, setResponsible] = useState<IResponsible | null>();

  const method = useForm<managerServiceSchemaType>({
    resolver: zodResolver(managerServiceSchema),
    mode: "onSubmit",
  });

  async function LoadService() {
    if (id) {
      setLoading((prev) => {
        return { loadingData: true, submitted: prev.submitted };
      });
      try {
        const request = await getService(id);
        setService(request);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoading((prev) => {
          return { loadingData: false, submitted: prev.submitted };
        });
      }
    }
  }

  async function LoadUsers() {
    if (info.user.permission === "master") {
      try {
        const response = await getAllUsers();
        setUsers(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      }
    }
  }

  async function onSubmit() {
    setLoading((prev) => {
      return { loadingData: prev.loadingData, submitted: true };
    });
    if (id) {
      const values: IServiceUpdate = method.getValues();
      values.responsible = responsible?.value ? responsible.value : values.responsible;
      values.id = id;
      try {
        await updateService(values);
        ToastStyle({ message: "Editado com sucesso", styleToast: "success" });
        setModalOpen(<></>);
        reload();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoading((prev) => {
          return { loadingData: prev.loadingData, submitted: false };
        });
      }
    } else {
      const values: IServiceCreate = method.getValues();
      values.responsible = responsible?.value ? responsible.value : values.responsible;
      try {
        await createService(values);
        ToastStyle({ message: "Adicionado com sucesso", styleToast: "success" });
        setModalOpen(<></>);
        reload();
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.message);
          ToastStyle({ message: error.response?.data.message, styleToast: "error" });
        }
      } finally {
        setLoading((prev) => {
          return { loadingData: prev.loadingData, submitted: false };
        });
      }
    }
  }

  useEffect(() => {
    if (service) {
      method.reset({
        delivery_date: service?.delivery
          ? format(new Date(service.delivery ? service.delivery : ""), "Pp", { locale: ptBR })
          : "",
        name: service?.client_name ? service.client_name : "",
        observation: service?.observation ? service.observation : "",
        phone: service?.client_phone ? service.client_phone : "",
        value: service?.price ? service.price : 0,
        vehicle_model: service?.vehicle_model ? service.vehicle_model : "",
        vehicle_plate: service?.vehicle_plate ? service.vehicle_plate : "",
      });
      setResponsible({
        value: service?.user.id ? service.user.id : null,
        label: service?.user.name ? service.user.name : null,
      });
    }
  }, [service]);

  useEffect(() => {
    if (id) {
      LoadService();
    }
    LoadUsers();
  }, [id]);

  useEffect(() => {
    const values = Object.values(method.formState.errors);
    values.map((value) => {
      ToastStyle({
        message: value.message ? value.message : "Fill in all fields!",
        styleToast: "warning",
      });
    });
  }, [method.formState.errors]);

  const options =
    users.length !== 0
      ? users
          .map((user) => {
            return user.status === true && { value: user.id, label: user.name };
          })
          .filter((u) => u !== false)
      : [];

  return (
    <Modal
      setModalOpen={setModalOpen}
      title={id ? "Gerenciar Serviço" : "Adicionar Serviço"}
      confirmButtonText={id ? "Editar" : "Adicionar"}
      content={
        loading.loadingData ? (
          <S.LoadingContainer>
            <ReactLoading type="spin" />
          </S.LoadingContainer>
        ) : (
          <FormProvider {...method}>
            <S.Container id="formModal" onSubmit={method.handleSubmit(onSubmit)}>
              <S.InputContent>
                <S.Row>
                  <label htmlFor="name">Cliente</label>
                  <Input
                    hasError={method.formState.errors.name?.message ? true : false}
                    placeholder="Nome"
                    registerText="name"
                    disabled={id ? true : false}
                  />
                </S.Row>
                <S.Row>
                  <label htmlFor="phone">Telefone</label>

                  <Input
                    hasError={method.formState.errors.phone?.message ? true : false}
                    placeholder="Telefone"
                    registerText="phone"
                    disabled={id ? true : false}
                    mask="(99) 9 9999-9999"
                  />
                </S.Row>
              </S.InputContent>

              <S.InputContent>
                <S.Row>
                  <label htmlFor="vehicle_plate">Placa</label>
                  <Input
                    hasError={method.formState.errors.vehicle_plate?.message ? true : false}
                    placeholder="Placa"
                    registerText="vehicle_plate"
                    disabled={id ? true : false}
                    mask="aaa-9*99"
                  />
                </S.Row>
                <S.Row>
                  <label htmlFor="vehicle_model">Modelo</label>
                  <Input
                    hasError={method.formState.errors.vehicle_model?.message ? true : false}
                    placeholder="Modelo"
                    registerText="vehicle_model"
                    disabled={id ? true : false}
                  />
                </S.Row>
              </S.InputContent>
              <S.Row>
                <label htmlFor="observation">Observação</label>
                <TextArea
                  hasError={method.formState.errors.observation?.message ? true : false}
                  placeholder="Observação"
                  registerText="observation"
                />
              </S.Row>

              <S.InputContent>
                <S.Row>
                  <label htmlFor="delivery_date">Data para Entrega</label>
                  <Input
                    hasError={method.formState.errors.delivery_date?.message ? true : false}
                    placeholder="Data para entrega"
                    registerText="delivery_date"
                    mask="99/99/9999, 99:99"
                  />
                </S.Row>
                <S.Row>
                  <label htmlFor="value">Preço</label>
                  <Input
                    hasError={method.formState.errors.value?.message ? true : false}
                    placeholder="Valor"
                    registerText="value"
                    type="number"
                  />
                </S.Row>
              </S.InputContent>
              {info.user.permission === "master" && (
                <S.InputContent>
                  <S.Row>
                    <label htmlFor="responsible">Responsável</label>
                    <S.InputSelect
                      className="react-select-container"
                      classNamePrefix="react-select"
                      options={options}
                      isClearable={false}
                      placeholder="Selecione o responsável"
                      onChange={(e) => setResponsible(e)}
                      value={responsible ? responsible : null}
                      menuPosition="absolute"
                      menuPlacement="top"
                    />
                  </S.Row>
                </S.InputContent>
              )}
            </S.Container>
          </FormProvider>
        )
      }
    />
  );
}

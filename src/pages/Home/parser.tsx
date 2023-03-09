import axios from "axios";
import { differenceInSeconds, format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Square } from "../../components/Square";
import { ToastStyle } from "../../components/Toast";
import { StatusToolTip } from "./components/ToolTip";
import { IDropDown, IManagerShow, IServiceRequest } from "./interface";
import { status } from "./labels";
import { toggleStatus } from "./services";

import * as S from "./styles";

export function Parse(data: IServiceRequest[], reload: () => void): IManagerShow[] {
  return data.map((service) => {
    const dateFromNow = differenceInSeconds(new Date(service.delivery), new Date());

    const items = (): IDropDown[] => {
      return [
        {
          element: <span>Aguardando Aprovação</span>,
          onClick: async () => {
            try {
              await toggleStatus(service.id, "pending");
              ToastStyle({ message: "Alterado com sucesso", styleToast: "success" });
              reload();
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.log(error.message);
                ToastStyle({ message: error.response?.data.message, styleToast: "error" });
              }
            }
          },
          rules: [service.status === "pending"],
        },
        {
          element: <span>Aprovado</span>,
          onClick: async () => {
            try {
              await toggleStatus(service.id, "approved");
              ToastStyle({ message: "Alterado com sucesso", styleToast: "success" });
              reload();
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.log(error.message);
                ToastStyle({ message: error.response?.data.message, styleToast: "error" });
              }
            }
          },
          rules: [service.status === "approved"],
        },
        {
          element: <span>Negado</span>,
          onClick: async () => {
            try {
              await toggleStatus(service.id, "denied");
              ToastStyle({ message: "Alterado com sucesso", styleToast: "success" });
              reload();
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.log(error.message);
                ToastStyle({ message: error.response?.data.message, styleToast: "error" });
              }
            }
          },
          rules: [service.status === "denied"],
        },
        {
          element: <span>Entregue</span>,
          onClick: async () => {
            try {
              await toggleStatus(service.id, "delivered");
              ToastStyle({ message: "Alterado com sucesso", styleToast: "success" });
              reload();
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.log(error.message);
                ToastStyle({ message: error.response?.data.message, styleToast: "error" });
              }
            }
          },
          rules: [service.status === "delivered"],
        },
      ];
    };

    return {
      id: service.id,
      plate: <span>{service.vehicle.plate}</span>,
      vehicle: <span>{service.vehicle.brand + " - " + service.vehicle.model}</span>,
      client: <span>{service.client.name}</span>,
      responsible: <span>{service.user.name}</span>,
      responsible_id: service.user.id,
      delivery_date: (
        <S.DataStyle
          color={
            service.status !== "delivered" ? (dateFromNow > 0 ? "#4B8DF8" : "#D84A38") : "#35AA47"
          }
        >
          <span>
            {format(new Date(service.delivery ? service.delivery : ""), "Pp", { locale: ptBR })}
          </span>
        </S.DataStyle>
      ),
      status: (
        <StatusToolTip
          status={{ color: status[service.status].color, icon: status[service.status].icon }}
          items={items}
        />
      ),
      status_value: service.status,
    };
  });
}

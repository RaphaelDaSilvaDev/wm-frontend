import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Pencil } from "phosphor-react";
import { ToastStyle } from "../../../components/Toast";
import { IDropDown } from "../../Home/interface";
import { StatusToolTip } from "./components/StatusToolTip";
import { EmployeRequest, EmployeToManager } from "./interfaces";
import { status } from "./labels";
import { toggleStatus } from "./services";
import * as S from "./styles";

export function EmployeParse(
  data: EmployeRequest[],
  editEmployee: (id: string) => void,
  reload: () => void
): EmployeToManager[] {
  return data.map((item) => {
    const items = (): IDropDown[] => {
      return [
        {
          element: <span>Ativar</span>,
          onClick: async () => {
            try {
              await toggleStatus(item.id, "active");
              ToastStyle({ message: "Alterado com sucesso", styleToast: "success" });
              reload();
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.log(error.message);
                ToastStyle({ message: error.response?.data.message, styleToast: "error" });
              }
            }
          },
          rules: [item.status === "active"],
        },
        {
          onClick: async () => {
            try {
              await toggleStatus(item.id, "inactive");
              ToastStyle({ message: "Alterado com sucesso", styleToast: "success" });
              reload();
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.log(error.message);
                ToastStyle({ message: error.response?.data.message, styleToast: "error" });
              }
            }
          },
          element: <span>Inativar</span>,
          rules: [item.status === "inactive"],
        },
      ];
    };

    return {
      id: item.id,
      edit: (
        <S.ToolTip onClick={() => editEmployee(item.id)}>
          <Pencil />
        </S.ToolTip>
      ),
      name: <span>{item.name}</span>,
      cellphone: <span>{item.cellphoneNumber ? item.cellphoneNumber : "-"}</span>,
      email: <span>{item.email ? item.email : "-"}</span>,
      permitions: <span>{item.permission}</span>,
      bornAt: (
        <span>{item.bornAt ? format(new Date(item.bornAt), "Pp", { locale: ptBR }) : "-"}</span>
      ),
      createdAt: <span>{format(new Date(item.createdAt), "Pp", { locale: ptBR })}</span>,
      status: (
        <StatusToolTip
          status={{ color: status[item.status].color, icon: status[item.status].icon }}
          items={items}
        />
      ),
    };
  });
}

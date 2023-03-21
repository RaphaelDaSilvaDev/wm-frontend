import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Pencil } from "phosphor-react";
import { IDropDown } from "../../Home/interface";
import { StatusToolTip } from "./components/StatusToolTip";
import { EmployeRequest, EmployeToManager } from "./interfaces";
import { status } from "./labels";
import * as S from "./styles";

export function EmployeParse(
  data: EmployeRequest[],
  editEmployee: (id: string) => void
): EmployeToManager[] {
  const items = (): IDropDown[] => {
    return [
      {
        element: <span>Aguardando Aprovação</span>,
        onClick: async () => {},
        rules: [],
      },
    ];
  };

  return data.map((item) => {
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

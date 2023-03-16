import { Pencil } from "phosphor-react";
import { IClientRequest, IManagerShowClient } from "./interfaces";

import * as S from "./styles";

export function ParseUsers(
  data: IClientRequest[],
  handleEditClient: (itemId: string) => void
): IManagerShowClient[] {
  return data.map((item) => {
    return {
      id: item.id,
      edit: (
        <S.ToolTip onClick={() => handleEditClient(item.id)}>
          <Pencil />
        </S.ToolTip>
      ),
      name: <span>{item.name}</span>,
      address: <span>{item.addressCity + " - " + item.addressState}</span>,
      phone: <span>{item.phoneNumber}</span>,
      cellPhone: <span>{item.cellphoneNumber}</span>,
      email: <span>{item.email}</span>,
    };
  });
}

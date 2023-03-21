import { Pencil } from "phosphor-react";
import { ICategoryManager, ICategoryRequest } from "./interfaces";

import * as S from "./styles";

export function parse(
  data: ICategoryRequest[],
  handleEditCategory: (id: string) => void
): ICategoryManager[] {
  return data.map((item) => {
    return {
      id: item.id,
      edit: (
        <S.ToolTip onClick={() => handleEditCategory(item.id)}>
          <Pencil />
        </S.ToolTip>
      ),
      name: <span>{item.name}</span>,
      empty: <></>,
    };
  });
}

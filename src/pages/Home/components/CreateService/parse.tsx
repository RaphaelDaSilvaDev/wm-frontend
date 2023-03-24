import { Trash } from "phosphor-react";
import { IServiceProductRequest, IServiceProductToManager } from "./interfaces";
import * as S from "./styles";

export function ProductParse(
  data: IServiceProductRequest[],
  handleRemoveProduct: (productId: string) => void
): IServiceProductToManager[] {
  return data.map((product) => {
    return {
      id: product.product.id,
      amount: product.quantity,
      edit: (
        <S.ToolTip onClick={() => handleRemoveProduct(product.product.id)}>
          <Trash />
        </S.ToolTip>
      ),
      quantity: <span>{product.quantity}</span>,
      product: <span>{product.product.name}</span>,
      value: <span>{product.product.valueToSell}</span>,
      total: <span>{product.product.valueToSell * product.quantity}</span>,
    };
  });
}

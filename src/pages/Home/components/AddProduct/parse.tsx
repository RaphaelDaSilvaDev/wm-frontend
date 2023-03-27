import { Trash } from "phosphor-react";
import { IServiceProductToManager } from "../CreateService/interfaces";
import { IProductsRequest, ProductToManager } from "./interface";

import * as S from "./styles";

export function ProductParse(
  data: IProductsRequest[],
  setData: React.Dispatch<React.SetStateAction<IProductsRequest[]>>,
  search: string
): ProductToManager[] {
  function alterQuantity(id: string, e: React.ChangeEvent<HTMLInputElement>) {
    const storageData = Array.from(data);
    const productIndex = storageData.findIndex((item) => item.id === id);
    const newProduct = storageData.find((item) => item.id === id);
    if (newProduct) {
      newProduct.amount = Number(e.target.value);
      storageData.splice(productIndex, 1, { ...newProduct, amount: Number(e.target.value) });
      setData(storageData);
    }
  }

  return data.map((product) => {
    console.log({ product });
    return {
      id: product.id,
      amount: product.amount,
      valueToSell: product.valueToSell,
      quantity: (
        <input
          type="number"
          value={product.amount || 0}
          onChange={(e) => alterQuantity(product.id, e)}
          min={0}
        />
      ),
      name: <span>{product.name}</span>,
      product: <span>{product.name}</span>,
      responsible: <span>-</span>,
      status: <span>-</span>,
      total: <span>{product.valueToSell * product.amount}</span>,
      brand: <span>{product.brand}</span>,
      description: <span>{product.description}</span>,
      value: <span>{product.valueToSell}</span>,
      category: <span>{product.category.name}</span>,
    };
  });
}

export function AddParse(
  data: ProductToManager[],
  handleRemoveProduct: (productId: string) => void
): IServiceProductToManager[] {
  return data.map((item) => {
    return {
      id: item.id,
      amount: item.amount,
      edit: (
        <S.ToolTip onClick={() => handleRemoveProduct(item.id)}>
          <Trash />
        </S.ToolTip>
      ),
      quantity: <span>{item.amount}</span>,
      product: <span>{item.name}</span>,
      value: <span>{item.valueToSell}</span>,
      total: <span>{item.valueToSell * item.amount}</span>,
    };
  });
}

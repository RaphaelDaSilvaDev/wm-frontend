import { IServiceProductRequest, IServiceProductToManager } from "./interfaces";

export function ProductParse(data: IServiceProductRequest[]): IServiceProductToManager[] {
  return data.map((product) => {
    return {
      id: product.id,
      amount: product.quantity,
      quantity: <span>{product.quantity}</span>,
      product: <span>{product.product.name}</span>,
      responsible: <span>-</span>,
      value: <span>{product.product.valueToBuy}</span>,
      total: <span>{product.product.valueToBuy * product.quantity}</span>,
      status: <span>-</span>,
    };
  });
}

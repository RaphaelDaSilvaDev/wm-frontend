import { IProductsRequest, ProductToManager } from "./interfaces";

export function ProductParse(data: IProductsRequest[]): ProductToManager[] {
  return data.map((product) => {
    return {
      id: product.id,
      name: <span>{product.name}</span>,
      brand: <span>{product.brand}</span>,
      description: <span>{product.description}</span>,
      quantity: <span>{product.quantity}</span>,
      value: <span>{product.valueToSell}</span>,
      category: <span>{product.category.name}</span>,
    };
  });
}

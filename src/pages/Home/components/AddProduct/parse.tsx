import { IServiceProductToManager } from "../CreateService/interfaces";
import { IProductsRequest, ProductToManager } from "./interface";

export function ProductParse(data: IProductsRequest[]): ProductToManager[] {
  function alterQuantity(id: string, e: React.ChangeEvent<HTMLInputElement>) {
    const storageData = Array.from(data);
    const productIndex = storageData.findIndex((item) => item.id === id);
    const newProduct = storageData.find((item) => item.id === id);
    if (newProduct) {
      newProduct.amount = Number(e.target.value);
      console.log(newProduct);
      storageData.splice(productIndex, 1, newProduct);
    }
  }

  return data.map((product) => {
    return {
      id: product.id,
      valueToSell: product.valueToBuy,
      quantity: (
        <input
          type="number"
          defaultValue={0}
          value={product.amount}
          onChange={(e) => alterQuantity(product.id, e)}
        />
      ),
      product: <span>{product.name}</span>,
      responsible: <span>-</span>,
      status: <span>-</span>,
      total: <span>{product.valueToBuy * product.quantity}</span>,
      brand: <span>{product.brand}</span>,
      description: <span>{product.description}</span>,
      value: <span>{product.valueToBuy}</span>,
      category: <span>{product.category.name}</span>,
    };
  });
}

export function AddParse(data: ProductToManager[]): IServiceProductToManager[] {
  return data.map((item) => {
    return {
      id: item.id,
      amount: item.amount ? item.amount : 0,
      quantity: <span>{item.amount}</span>,
      product: <span>{item.product}</span>,
      responsible: <span>-</span>,
      value: <span>{item.value}</span>,
      total: <span>{item.amount ? item.amount : 0}</span>,
      status: <span>-</span>,
    };
  });
}

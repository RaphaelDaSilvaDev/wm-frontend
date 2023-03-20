export interface IProductsRequest {
  id: string;
  barCode: string | null;
  name: string;
  brand: string;
  quantity: number;
  minQuantity: number;
  valueToBuy: number;
  valueToSell: number;
  description: string;
  categoryId: string;
  category: ICategory;
}

interface ICategory {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductToManager {
  id: string;
  name: JSX.Element;
  brand: JSX.Element;
  description: JSX.Element;
  quantity: JSX.Element;
  value: JSX.Element;
  category: JSX.Element;
}

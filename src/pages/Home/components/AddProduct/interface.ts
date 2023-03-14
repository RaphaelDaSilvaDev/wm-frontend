export interface IProductsRequest {
  id: string;
  barCode: string | null;
  name: string;
  brand: string;
  quantity: number;
  minQuantity: number;
  valueToBuy: number;
  amount: number;
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
  amount?: number;
  valueToSell: number;
  quantity: JSX.Element;
  product: JSX.Element;
  responsible: JSX.Element;
  value: JSX.Element;
  total: JSX.Element;
  status: JSX.Element;
}

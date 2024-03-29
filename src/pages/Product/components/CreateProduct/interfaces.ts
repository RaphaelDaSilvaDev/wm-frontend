export interface CategoryRequest {
  id: string;
  name: string;
}

export interface ProductPayload {
  name: string;
  brand: string;
  quantity: number;
  minQuantity: number;
  valueToBuy: number;
  valueToSell: number;
  description: string;
  categoryId: string;
}

export interface IProductRequest {
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
  category: CategoryRequest;
}

export interface IEditPayload {
  name?: string;
  brand?: string;
  quantity?: number;
  minQuantity?: number;
  valueToBuy?: number;
  valueToSell?: number;
  description?: string;
  categoryId?: string;
}

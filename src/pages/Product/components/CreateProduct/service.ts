import { api } from "../../../../services/axios";
import { IEditPayload, ProductPayload } from "./interfaces";

export async function GetCategoriesService() {
  const { data } = await api.get("/category");

  return data;
}

export async function CreateProductService(payloadData: ProductPayload) {
  const payload = payloadData;
  const { data } = await api.post("/product", payload);
  return data;
}

export async function GetProductService(id: string) {
  const { data } = await api.get(`/product/${id}`);
  return data;
}

export async function EditProductService(payloadData: IEditPayload, id: string) {
  const payload = payloadData;

  const { data } = await api.patch(`/product/edit/${id}`, payload);

  return data;
}

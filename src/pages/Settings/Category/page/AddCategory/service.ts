import { api } from "../../../../../services/axios";
import { ICategoryCreate, ICategoryUpdate } from "./interface";

export async function CreateCategoryService(payloadData: ICategoryCreate) {
  const payload = payloadData;
  const { data } = await api.post(`/category`, payload);

  return data;
}

export async function GetCategoryService(id: string) {
  const { data } = await api.get(`/category/${id}`);

  return data;
}

export async function UpdateCategoryService(payloadData: ICategoryUpdate, id: string) {
  const payload = payloadData;

  const { data } = await api.patch(`/category/${id}`, payload);

  return data;
}

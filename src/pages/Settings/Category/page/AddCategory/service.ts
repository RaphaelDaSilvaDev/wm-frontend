import { api } from "../../../../../services/axios";
import { ICategoryCreate } from "./interface";

export async function CreateCategoryService(payloadData: ICategoryCreate) {
  const payload = payloadData;
  const { data } = await api.post(`/category`, payload);

  return data;
}

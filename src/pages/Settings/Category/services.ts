import { api } from "../../../services/axios";

export async function GetCategoryService(search?: string) {
  const params: any = {};
  if (search) params.search = search;
  const { data } = await api.get("/category", { params });

  return data;
}

import { api } from "../../services/axios";

export async function GetProductsService(search?: string) {
  const params: any = {};

  if (search) params.search = search;
  const { data } = await api.get("/product", params);

  return data;
}

import { api } from "../../services/axios";

export async function GetProductsService() {
  const { data } = await api.get("/product");

  return data;
}

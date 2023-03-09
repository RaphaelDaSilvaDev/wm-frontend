import { api } from "../../../../services/axios";

export async function GetCategoryService() {
  const { data } = await api.get("/category");

  return data;
}

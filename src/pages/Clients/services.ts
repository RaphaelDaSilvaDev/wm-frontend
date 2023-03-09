import { api } from "../../services/axios";

export async function getAllClients(search?: string) {
  const params: any = {};
  if (search) params.search = search;
  const { data } = await api.get("/client", { params });

  return data;
}

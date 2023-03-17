import { api } from "../../services/axios";

export async function GetVehicleServie(search?: string) {
  const params: any = {};

  if (search) params.search = search;

  const { data } = await api.get("/vehicle", { params });

  return data;
}

import { api } from "../../services/axios";

export async function GetVehicleServie() {
  const { data } = await api.get("/vehicle");

  return data;
}

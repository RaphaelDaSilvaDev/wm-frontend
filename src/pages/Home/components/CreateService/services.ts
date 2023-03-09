import { api } from "../../../../services/axios";
import { ICreateService } from "./interfaces";

export async function GetVehicleByClientService(client_id: string) {
  const { data } = await api.get(`/vehicle/client/${client_id}`);

  return data;
}

export async function GetResponsible() {
  const { data } = await api.get("/user");

  return data;
}

export async function AddService(payloadData: ICreateService) {
  const payload = payloadData;
  const { data } = await api.post("/service", payload);

  return data;
}

export async function getService(id: string) {
  const { data } = await api.get(`/service/${id}`);

  return data;
}

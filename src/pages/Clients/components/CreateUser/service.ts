import { api } from "../../../../services/axios";
import { ClientPayload, IClientUpdate } from "./interface";

export async function AddClientService(payloadData: ClientPayload) {
  const payload = payloadData;
  const { data } = await api.post("/client", payload);
  return data;
}

export async function GetClientService(id: string) {
  const { data } = await api.get(`/client/${id}`);
  return data;
}

export async function UpdateClientService(payloadData: IClientUpdate, id: string) {
  const payload = payloadData;

  const { data } = await api.patch(`/client/update/${id}`, payload);

  return data;
}

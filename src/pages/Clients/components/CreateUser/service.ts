import { api } from "../../../../services/axios";
import { ClientPayload } from "./interface";

export async function AddClientService(payloadData: ClientPayload) {
  const payload = payloadData;
  const { data } = await api.post("/client", payload);
  return data;
}

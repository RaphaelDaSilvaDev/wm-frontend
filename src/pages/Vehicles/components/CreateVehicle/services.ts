import { api } from "../../../../services/axios";
import { VehiclePayload } from "./interfaces";

export async function CreateVehicleService(payloadData: VehiclePayload) {
  const payload = payloadData;
  const { data } = await api.post("/vehicle", payload);
  return data;
}

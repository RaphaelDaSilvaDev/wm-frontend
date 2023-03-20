import { api } from "../../../../services/axios";
import { IVehicleUpdate, VehiclePayload } from "./interfaces";

export async function CreateVehicleService(payloadData: VehiclePayload) {
  const payload = payloadData;
  const { data } = await api.post("/vehicle", payload);
  return data;
}

export async function GetVehicle(id: string) {
  const { data } = await api.get(`/vehicle/${id}`);
  return data;
}

export async function UpdateVehicle(payloadData: IVehicleUpdate, id: string) {
  const payload = payloadData;
  const { data } = await api.patch(`/vehicle/${id}`, payload);

  return data;
}

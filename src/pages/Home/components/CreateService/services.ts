import { api } from "../../../../services/axios";
import { ICreateService, IEditService, IProductServiceUpdate } from "./interfaces";

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

export async function EditService(payloadData: IEditService, id: string) {
  const payload = payloadData;
  const { data } = await api.patch(`/service/edit/${id}`, payload);

  return data;
}

export async function getService(id: string) {
  const { data } = await api.get(`/service/${id}`);

  return data;
}

export async function getServiceProduct(id: string) {
  const { data } = await api.get(`/service-product/${id}`);

  return data;
}

export async function CreateProductService(payloadData: IProductServiceUpdate[]) {
  const payload: IProductServiceUpdate[] = payloadData;
  const { data } = await api.post(`/service-product`, { products: payload });
  return data;
}

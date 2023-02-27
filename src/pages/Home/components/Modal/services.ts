import { api } from "../../../../services/axios";
import { format, formatISO, parseISO } from "date-fns";
import { IServiceCreate, IServiceUpdate } from "./interfaces";

export async function getService(id: string) {
  const { data } = await api.get(`/service/${id}`);

  return data;
}

export async function getAllUsers() {
  const { data } = await api.get(`/user`);

  return data;
}

export async function updateService(requestData: IServiceUpdate) {
  const date = requestData.delivery_date.split("/");

  const convertedDate = parseISO(
    `${date[2].split(",")[0]}-${date[1]}-${date[0]}${date[2].split(",")[1]}:00`
  );

  const payload = {
    delivery: convertedDate,
    observation: requestData.observation,
    price: requestData.value,
    responsible: requestData.responsible,
  };

  const { data } = await api.patch(`service/edit/${requestData.id}`, payload);

  return data;
}

export async function createService(requestData: IServiceCreate) {
  const date = requestData.delivery_date.split("/");

  const convertedDate = parseISO(
    `${date[2].split(",")[0]}-${date[1]}-${date[0]}${date[2].split(",")[1]}:00`
  );

  const payload = {
    client_name: requestData.name,
    client_phone: requestData.phone,
    vehicle_plate: requestData.vehicle_plate,
    vehicle_model: requestData.vehicle_model,
    observation: requestData.observation,
    delivery: convertedDate,
    price: requestData.value,
    responsible: requestData.responsible,
  };

  const { data } = await api.post("/service", payload);

  return data;
}

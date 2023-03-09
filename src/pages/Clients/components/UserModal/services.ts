import { api } from "../../../../services/axios";
import { IUserCreate, IUserUpdate } from "./interfaces";

export async function getUser(id: string) {
  const { data } = await api.get(`/user/${id}`);

  return data;
}

export async function updateUser(requestData: IUserUpdate) {
  const payload: any = {};

  if (requestData.username) payload.username = requestData.username;
  if (requestData.password) payload.password = requestData.password;

  const { data } = await api.post(`/user/update/${requestData.id}`, payload);

  return data;
}

export async function createUser(requestData: IUserCreate) {
  const payload = {
    name: requestData.name,
    password: requestData.password,
    username: requestData.username,
    permission: "user",
  };

  const { data } = await api.post(`/user/`, payload);

  return data;
}

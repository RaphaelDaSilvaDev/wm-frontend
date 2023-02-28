import { api } from "../../services/axios";

export async function getAllUsers(search: string) {
  const params: any = {};
  if (search) params.search = search;
  const { data } = await api.get("/user", { params });

  return data;
}

export async function toogleUserStatus(id: string) {
  const { data } = await api.patch(`/user/status/${id}`);

  return data;
}

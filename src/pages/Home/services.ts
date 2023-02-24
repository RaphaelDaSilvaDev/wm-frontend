import { api } from "../../services/axios";

export async function getAllServices() {
  const { data } = await api.get("/service");

  return data;
}

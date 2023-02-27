import { api } from "../../services/axios";

export async function getAllServices() {
  const { data } = await api.get("/service");

  return data;
}

export async function toggleStatus(
  id: string,
  status: "pending" | "working" | "finished" | "delivered"
) {
  const payload = { status };

  const { data } = await api.patch(`/service/status/${id}`, payload);
}

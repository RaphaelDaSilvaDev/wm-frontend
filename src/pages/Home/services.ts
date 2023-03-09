import { api } from "../../services/axios";

export async function getAllServices(search: string) {
  const params: any = {};

  if (search) params.search = search;

  const { data } = await api.get("/service", { params });

  return data;
}

export async function toggleStatus(
  id: string,
  status: "pending" | "approved" | "denied" | "delivered"
) {
  const payload = { status };

  const { data } = await api.patch(`/service/status/${id}`, payload);
}

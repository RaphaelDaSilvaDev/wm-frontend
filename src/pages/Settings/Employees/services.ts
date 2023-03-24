import { api } from "../../../services/axios";

export async function GetEmployeesService(search?: string) {
  const params: any = {};

  if (search) params.search = search;

  const { data } = await api.get("/user", { params });

  return data;
}

export async function toggleStatus(id: string, status: "active" | "inactive") {
  const payload = { status };

  await api.patch(`/user/status/${id}`, payload);
}

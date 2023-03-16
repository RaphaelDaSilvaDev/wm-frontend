import { api } from "../../../services/axios";

export async function GetEmployeesService() {
  const { data } = await api.get("/user");

  return data;
}

import { api } from "../../../../../services/axios";
import { EmployeePayload, IEmployeeUpdate } from "./interfaces";

export async function CreateEmployeeService(payloadData: EmployeePayload) {
  const payload = payloadData;

  const { data } = await api.post("/user", payload);

  return data;
}

export async function GetEmployeeService(id: string) {
  const { data } = await api.get(`/user/${id}`);

  return data;
}

export async function UpdateEmployessService(payloadData: IEmployeeUpdate, id: string) {
  const payload = payloadData;

  const { data } = await api.post(`/user/update/${id}`, payload);

  return data;
}

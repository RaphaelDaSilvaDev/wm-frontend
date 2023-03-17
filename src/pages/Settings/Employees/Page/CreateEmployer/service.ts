import { api } from "../../../../../services/axios";
import { EmployeePayload } from "./interfaces";

export async function CreateEmployeeService(payloadData: EmployeePayload) {
  const payload = payloadData;

  const { data } = await api.post("/user", payload);

  return data;
}

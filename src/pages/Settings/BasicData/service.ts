import { accoutApi } from "../../../services/axios";
import { IBasicDataUpdate } from "./interfaces";

export async function UpdateBasicDataService(info: IBasicDataUpdate, id?: string) {
  const payload = info;

  const { data } = await accoutApi.patch(`/client/${id}`, payload);

  return data;
}

import { accoutApi } from "../../../../services/axios";
import { IBasicDataUpdate } from "./interfaces";

export async function UpdateBasicDataService(info: IBasicDataUpdate) {
  const params = { info };

  const { data } = await accoutApi.post("/", params);

  return data;
}

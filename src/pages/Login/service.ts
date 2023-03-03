import { accoutApi } from "../../services/axios";

export async function getClientService(clientCode: string) {
  const params: any = { clientCode };
  const { data } = await accoutApi.get("/client", { params });

  return data;
}

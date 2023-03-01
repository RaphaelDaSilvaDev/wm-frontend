import { accoutApi } from "../../services/axios";

export async function getClientService(subdomain: string) {
  const params: any = { subdomain };
  const { data } = await accoutApi.get("/client", { params });

  return data;
}

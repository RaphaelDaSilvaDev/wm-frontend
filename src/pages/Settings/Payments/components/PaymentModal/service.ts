import { accoutApi } from "../../../../../services/axios";

export async function GeneratePixService(payment_id: string) {
  const { data } = await accoutApi.get(`/payment/generate-pix/${payment_id}`);

  return data;
}

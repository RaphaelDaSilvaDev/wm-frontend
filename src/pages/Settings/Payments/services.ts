import { accoutApi } from "../../../services/axios";

export async function getPaymentsService(id: string) {
  const { data } = await accoutApi.get(`/payment/all-payments/${id}`);

  return data;
}

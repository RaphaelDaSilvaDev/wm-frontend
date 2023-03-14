import { api } from "../../../../services/axios";
import { ProductPayload } from "./interfaces";

export async function GetCategoriesService() {
  const { data } = await api.get("/category");

  return data;
}

export async function CreateProductService(payloadData: ProductPayload) {
  const payload = payloadData;
  const { data } = await api.post("/product", payload);
  return data;
}

import { accoutApi } from "../../services/axios";
import { ICreateFeedBack } from "./interface";

export async function CreateFeedBackService(payloadProps: ICreateFeedBack, clientId: string) {
  const payload = { title: payloadProps.title, feedBackText: payloadProps.text };

  const { data } = await accoutApi.post(`/feedback/${clientId}`, payload);

  return data;
}

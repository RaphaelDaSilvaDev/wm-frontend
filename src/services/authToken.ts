import { api } from "./axios";

export function AuthToken(token: string | undefined, clientCode: string | undefined) {
  console.log(clientCode);
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    api.defaults.headers.common["clientCode"] = `${clientCode}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
    delete api.defaults.headers["clientCode"];
  }
}

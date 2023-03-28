import axios from "axios";

const baseURL = import.meta.env.VITE_APISTATE ? "http://localhost:3333" : "/api/";
const baseURLAccount = "https://admin.wm.app.br/api/";
//const baseURLAccount = "http://localhost:3332";

export const api = axios.create({
  baseURL,
});

export const accoutApi = axios.create({
  baseURL: baseURLAccount,
});

import axios from "axios";

const baseURL = import.meta.env.VITE_APISTATE ? "http://localhost:3333" : "/api/";
const baseURLAccount = import.meta.env.VITE_APIACCOUNTAPI
  ? "http://localhost:3332"
  : "52.70.217.141/api";

export const api = axios.create({
  baseURL,
});

export const accoutApi = axios.create({
  baseURL: baseURLAccount,
});

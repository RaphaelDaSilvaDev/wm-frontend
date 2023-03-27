import axios from "axios";

const baseURL = import.meta.env.VITE_API_STATE ? "http://localhost:3333" : "/api/";
const baseURLAccount = import.meta.env.VITE_API_VITE_API_ACCOUNTAPI;

export const api = axios.create({
  baseURL,
});

export const accoutApi = axios.create({
  baseURL: baseURLAccount,
});

import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

const baseURL = import.meta.env.VITE_APISTATE ? "http://localhost:3333" : "/api/";
const baseURLAccount = import.meta.env.VITE_APIACCOUNTAPI;

console.log(import.meta.env.VITE_APIACCOUNTAPI);

export const api = axios.create({
  baseURL,
});

export const accoutApi = axios.create({
  baseURL: baseURLAccount,
});

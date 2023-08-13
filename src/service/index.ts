import axios from "axios";

export const apikey = "C74B71A2-3C44-48AB-8FD1-FE667F881A28";

export const api = axios.create({
  baseURL: "https://rest.coinapi.io/",
  headers: { "X-CoinAPI-Key": apikey },
});

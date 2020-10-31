import axios from "axios";

export const api = axios.create({
  baseURL: `https://api.github.com`,
});

export const apiSw = axios.create({
  baseURL: `https://swapi.dev/api`,
});
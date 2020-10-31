import axios from "axios";

export const api = axios.create({
  baseURL: `https://api.github.com`,
});

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

export const apiHero = axios.create({
  baseURL: `https://www.superheroapi.com/api.php/4645706468834592`,
});
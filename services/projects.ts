import {ENTITIES } from './entities.ts';
import axios from "axios";

const URL = import.meta.env.VITE_STRAPI_API_URL;
const token = import.meta.env.VITE_STRAPI_TOKEN;

axios.interceptors.request.use(config => {
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
}, error => {
  return Promise.reject(error)
})

export default {
  get(entity: ENTITIES, config?: object) {
    return axios.get(`${URL}/${entity}`, config)
  },

  getById(entity: ENTITIES, id: number, config?: object) {
    return axios.get(`${URL}/${entity}/${id}`, config)
  }
}

import axios from "axios";
import { ENTITIES } from "./entities";

const runtimeConfig = useRuntimeConfig();

const URL = runtimeConfig.NUXT_STRAPI_API_URL;
const token = runtimeConfig.NUXT_STRAPI_TOKEN;

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default {
  get(entity: ENTITIES, config?: object) {
    return axios.get(`${URL}/${entity}`, config);
  },

  getById(entity: ENTITIES, id: number, config?: object) {
    return axios.get(`${URL}/${entity}/${id}`, config);
  },
};

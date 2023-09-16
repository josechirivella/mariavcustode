import { ENTITIES } from "./entities";

export default {
  get(entity: ENTITIES, config?: object) {
    return $fetch(
      `${useRuntimeConfig().public.strapiApiURL}/${entity}`,
      config,
    );
  },

  getById(entity: ENTITIES, id: number, config?: object) {
    return $fetch(
      `${useRuntimeConfig().public.strapiApiURL}/${entity}/${id}`,
      config,
    );
  },
};

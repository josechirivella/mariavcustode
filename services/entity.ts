import { ENTITIES } from "~/models/entities";

export default {
  get(entity: ENTITIES, config?: object) {
    return $fetch(
      `${useRuntimeConfig().public.strapiApiURL}/${entity}`,
      config,
    );
  },

  getById(entity: ENTITIES, config?: object) {
    return $fetch(
      `${useRuntimeConfig().public.strapiApiURL}/${entity}`,
      config,
    );
  },
};

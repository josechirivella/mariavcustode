<template>
  <section v-if="project?.title.length > 0" class="py-4">
    <div
      class="hero flex flex-wrap lg:flex-nowrap justify-between items-center px-4 container mx-auto"
    >
      <div class="hero__content text-white mt-4">
        <h1 class="font-medium text-black">{{ project.title }}</h1>
        <h3 class="text-3xl mt-4 text-black">{{ project.role }}</h3>
      </div>
      <img
        :src="project.featureImage.data.attributes.url"
        :alt="project.featureImage.data.attributes.alternativeText"
        class="w-full lg:w-1/2"
      />
    </div>
    <div class="content px-4 lg:px-0 my-4 container mx-auto">
      {{ project.description }}
    </div>
    <div class="container px-4 lg:px-0 mt-4 mx-auto">
      <b>Duration: </b>{{ project.duration }}.
    </div>
    <LibCarousel :media="project.media.data" class="mt-4"></LibCarousel>
  </section>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import type { Ref } from "vue";
import projectsService from "~/services/entity";
import { ENTITIES } from "~/models/entities";
import type { IProjectsAttributes } from "~/models/projects.model";

const route = useRoute();

const project: Ref<IProjectsAttributes> = ref();

async function fetchData() {
  try {
    const { data } = await projectsService.getById(ENTITIES.PROJECTS, {
      params: {
        "filters[slug][$eq]": route.params.slug,
        populate: "*",
      },
    });
    console.log("data", data[0]);
    project.value = data[0].attributes;
    useSeoMeta({
      title: data[0].attributes.title,
      ogTitle: data[0].attributes.title,
      description: data[0].attributes.description,
      ogDescription: data[0].attributes.description,
      ogImage: data[0].attributes.featureImage.data.attributes.url,
      twitterCard: "summary_large_image",
    });
  } catch (e) {
    console.error("There was a problem fetching the project", e);
  }
}

onMounted(async () => {
  await fetchData();
});
</script>

<style lang="scss" scoped>
:deep(h1) {
  @apply text-4xl lg:text-8xl;
  font-family: "Jost", sans-serif;
  font-weight: 500;
}
:deep(h2) {
  @apply text-4xl text-center p-4 text-white italic my-8;
  font-family: "Jost", sans-serif;
}
:deep(h3) {
  @apply text-3xl mb-4;
  font-family: "Jost", sans-serif;
  &:not(:first-child) {
    @apply mt-8;
  }
}
</style>

<template>
  <section v-if="project?.heading.length > 0">
    <div
      class="hero flex justify-between items-center px-4"
      :style="{ 'background-color': backgroundColor }"
    >
      <div class="hero__content text-white">
        <h1>{{ project.heading }}</h1>
        <h3>{{ project.subHeading }}</h3>
      </div>
      <img
        :src="project.featureImage.data.attributes.url"
        :alt="project.featureImage.data.attributes.alternativeText"
        class="w-1/2"
      />
    </div>
    <div class="content p-4">
      <template v-for="content in project.content" :key="content.id">
        <component :is="content.__component" :content="content.richText" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import projectsService from "../../services/projects";
import { ENTITIES } from "../../services/entities";
import { ICaseStudyAttributes } from "../../models/case-studies.model";
import { onMounted, Ref, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const project: Ref<ICaseStudyAttributes> = ref();
const backgroundColor: Ref<string> = ref("");

async function fetchData() {
  try {
    const { data } = await projectsService.getById(
      ENTITIES.CASE_STUDIES,
      <number>route.params.id,
      {
        params: {
          populate: "*",
        },
      },
    );
    console.log("data", data.attributes);
    project.value = data.attributes;
    backgroundColor.value = data.attributes.backgroundColor;
  } catch (e) {
    console.error("There was a problem fetching the case study", e);
  }
}

onMounted(async () => {
  await fetchData();
});
</script>

<style lang="scss">
h1 {
  @apply text-4xl;
}
h2 {
  @apply text-2xl;
}
h3 {
  @apply text-xl;
}
p {
  @apply text-lg;
}
</style>

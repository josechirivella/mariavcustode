<template>
  <div v-if="projects?.length > 0" class="projects-container container mx-auto">
    <template v-for="project in projects" :key="project.id">
      <NuxtLink
        :to="{ name: 'case-studies-id', params: { id: project.id } }"
        class="flex items-center my-4 px-4"
      >
        <template v-if="project.attributes.featureImage">
          <img
            :src="
              project.attributes.featureImage.data.attributes.formats.small.url
            "
            :alt="
              project.attributes.featureImage.data.attributes.alternativeText
            "
            class="w-1/2 lg:w-1/5 lg:ml-8 lg:mr-12 my-0 mx-auto rounded"
          />
        </template>

        <div
          class="ml-4 lg:ml-0 h-24 w-full flex-1 flex justify-center flex-col"
        >
          <h3 class="text-3xl">
            {{ project.attributes.heading }}
          </h3>
          <p>{{ project.attributes.subHeading }}</p>
        </div>
      </NuxtLink>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ICaseStudies } from "~/models/case-studies.model";
import { ENTITIES } from "~/services/entities";
import projectsService from "~/services/projects";

const projects: Ref<ICaseStudies[]> = ref();

async function getProjects() {
  try {
    const { data } = await projectsService.get(ENTITIES.CASE_STUDIES, {
      params: {
        populate: "featureImage",
      },
    });
    projects.value = data;
  } catch (e) {
    console.error("There was a problem fetching the projects", e.error);
  }
}

useSeoMeta({
  title: "Maria Custode Case Studies",
  ogTitle: "Maria Custode Case Studies",
  description: "Case studies made by Maria Custode",
  ogDescription: "Case studies made by Maria Custode",
});

getProjects();
</script>

<template>
  <div id="projects-page" class="container mx-auto">
    <div class="px-4 lg:px-0">
      <div v-if="projects?.length > 0" class="projects grid">
        <div v-for="project in projects" :key="project.id" class="project">
          <NuxtLink
            :to="{
              name: 'projects-slug',
              params: { slug: project.attributes.slug },
            }"
            class="flex items-center my-4 px-4"
          >
            <template v-if="project.attributes.featureImage">
              <img
                :src="
                  project.attributes.featureImage.data.attributes.formats.small
                    .url
                "
                :alt="
                  project.attributes.featureImage.data.attributes
                    .alternativeText
                "
                class="w-1/2 lg:w-1/5 lg:ml-8 lg:mr-12 my-0 mx-auto rounded"
              />
            </template>

            <div
              class="ml-4 lg:ml-0 h-24 w-full flex-1 flex justify-center flex-col"
            >
              <h3 class="text-3xl">
                {{ project.attributes.title }}
              </h3>
              <p>{{ project.attributes.role }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ENTITIES } from "~/models/entities";
import { IProjects } from "~/models/projects.model";
import projectsService from "~/services/entity";

const projects: Ref<IProjects[]> = ref();

async function getProjects() {
  try {
    const { data } = await projectsService.get(ENTITIES.PROJECTS, {
      params: {
        populate: "featureImage",
      },
    });
    projects.value = data;
    console.log(data);
  } catch (e) {
    console.error("There was a problem fetching the projects", e.error);
  }
}
useSeoMeta({
  title: "Maria Custode - Projects",
  ogTitle: "Maria Custode - Projects",
  description: "Projects made by Maria Custode",
  ogDescription: "Projects made by Maria Custode",
});

getProjects();
</script>

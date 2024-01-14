<template>
  <div
    v-if="caseStudies?.length > 0"
    class="case-studies-container container mx-auto"
  >
    <template v-for="caseStudy in caseStudies" :key="caseStudy.id">
      <NuxtLink
        :to="{
          name: 'case-studies-slug',
          params: { slug: caseStudy.attributes.slug },
        }"
        class="flex items-center my-4 px-4"
      >
        <template v-if="caseStudy.attributes.featureImage">
          <img
            :src="
              caseStudy.attributes.featureImage.data.attributes.formats.small
                .url
            "
            :alt="
              caseStudy.attributes.featureImage.data.attributes.alternativeText
            "
            class="w-1/2 lg:w-1/5 lg:ml-8 lg:mr-12 my-0 mx-auto rounded"
          />
        </template>

        <div
          class="ml-4 lg:ml-0 h-24 w-full flex-1 flex justify-center flex-col"
        >
          <h3 class="text-3xl">
            {{ caseStudy.attributes.heading }}
          </h3>
          <p>{{ caseStudy.attributes.subHeading }}</p>
        </div>
      </NuxtLink>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
import type { ICaseStudies } from "~/models/case-studies.model";
import { ENTITIES } from "~/models/entities";
import entityService from "~/services/entity";

const caseStudies: Ref<ICaseStudies[]> = ref();

async function getProjects() {
  try {
    const { data } = await entityService.get(ENTITIES.CASE_STUDIES, {
      params: {
        populate: "featureImage",
      },
    });
    caseStudies.value = data;
  } catch (e) {
    console.error("There was a problem fetching the projects", e.error);
  }
}

useSeoMeta({
  title: "Maria Custode - Case Studies",
  ogTitle: "Maria Custode - Case Studies",
  description: "Case studies made by Maria Custode",
  ogDescription: "Case studies made by Maria Custode",
});

getProjects();
</script>

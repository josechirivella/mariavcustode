<template>
  <section v-if="project?.heading.length > 0">
    <div
      class="hero flex flex-wrap lg:flex-nowrap justify-between items-center px-4 container mx-auto"
      :style="{ 'background-color': backgroundColor }"
    >
      <div class="hero__content text-white">
        <h1 class="font-medium">{{ project.heading }}</h1>
        <h3 class="text-3xl mt-4">{{ project.subHeading }}</h3>
      </div>
      <img
        :src="project.featureImage.data.attributes.url"
        :alt="project.featureImage.data.attributes.alternativeText"
        class="w-1/2"
      />
    </div>
    <div class="content px-4 lg:px-0 my-4 container mx-auto">
      <template v-for="content in project.content" :key="content.id">
        <LazyRichText v-if="content?.richText" :content="content.richText"></LazyRichText>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import projectsService from "~/services/projects";
import { ENTITIES } from "~/services/entities";
import { ICaseStudyAttributes } from "~/models/case-studies.model";
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

<style lang="scss" scoped>
$section-header-bg: #22577a;
:deep(h1) {
  @apply text-4xl lg:text-8xl;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
}
:deep(h2) {
  @apply text-4xl text-center p-4 text-white italic my-8;
  background-color: $section-header-bg;
  font-family: 'Jost', sans-serif;
}
:deep(h3) {
  @apply text-3xl;
  font-family: 'Jost', sans-serif;
  &:not(:first-child) {
    @apply mb-4 mt-8;
  }
}
:deep(h4) {
  @apply text-2xl mt-4 mb-2;
  font-family: 'Jost', sans-serif;
  em, strong {
    @apply font-medium;
  }
}
:deep(p) {
  @apply text-lg;
  font-family: 'Jost', sans-serif;
  img {
    @apply mx-auto;
  }
}
:deep(blockquote) {
  @apply text-center mt-2 mb-16 w-1/2 mx-auto;
}
:deep(ul) {
  @apply list-disc ml-4;
  font-family: 'Jost', sans-serif;
}
:deep(img) {
  @apply lg:w-3/5 mt-8;
}
:deep(a) {
  @apply underline-offset-1;
}
</style>

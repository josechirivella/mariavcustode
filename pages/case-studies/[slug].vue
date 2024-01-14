<template>
  <section v-if="caseStudy?.heading.length > 0">
    <div
      class="hero flex flex-wrap lg:flex-nowrap justify-between items-center px-4 container mx-auto"
      :style="{ 'background-color': backgroundColor }"
    >
      <div class="hero__content text-white mt-4">
        <h1 class="font-medium">{{ caseStudy.heading }}</h1>
        <h3 class="text-3xl mt-4">{{ caseStudy.subHeading }}</h3>
      </div>
      <img
        :src="caseStudy.featureImage.data.attributes.url"
        :alt="caseStudy.featureImage.data.attributes.alternativeText"
        class="w-1/2"
      />
    </div>
    <div class="content px-4 lg:px-0 my-4 container mx-auto">
      <template v-for="content in caseStudy.content" :key="content.id">
        <LazyRichText
          v-if="content?.richText"
          :content="content.richText"
        ></LazyRichText>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, type Ref, ref } from "vue";
import { useRoute } from "vue-router";
import entityService from "~/services/entity";
import { ENTITIES } from "~/models/entities";
import type { ICaseStudyAttributes } from "~/models/case-studies.model";

const route = useRoute();

const caseStudy: Ref<ICaseStudyAttributes> = ref();
const backgroundColor: Ref<string> = ref("");

async function fetchData() {
  try {
    const { data } = await entityService.getById(ENTITIES.CASE_STUDIES, {
      params: {
        "filters[slug][$eq]": route.params.slug,
        populate: "*",
      },
    });
    console.log("data", data[0].attributes);
    caseStudy.value = data[0].attributes;
    backgroundColor.value = data[0].attributes.backgroundColor;
    useSeoMeta({
      title: data[0].attributes.heading,
      ogTitle: data[0].attributes.heading,
      description: data[0].attributes.subHeading,
      ogDescription: data[0].attributes.subHeading,
      ogImage: data[0].attributes.featureImage,
      twitterCard: "summary_large_image",
    });
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
  font-family: "Jost", sans-serif;
  font-weight: 500;
}
:deep(h2) {
  @apply text-4xl text-center p-4 text-white italic my-8;
  background-color: $section-header-bg;
  font-family: "Jost", sans-serif;
}
:deep(h3) {
  @apply text-3xl mb-4;
  font-family: "Jost", sans-serif;
  &:not(:first-child) {
    @apply mt-8;
  }
}
:deep(h4) {
  @apply text-2xl mt-4 mb-2;
  font-family: "Jost", sans-serif;
  em,
  strong {
    @apply font-medium;
  }
}
:deep(p) {
  @apply text-lg;
  font-family: "Jost", sans-serif;
  img {
    @apply mx-auto;
  }
}
:deep(blockquote) {
  @apply text-center mt-2 mb-16 w-1/2 mx-auto;
}
:deep(ul) {
  @apply list-disc ml-4;
  font-family: "Jost", sans-serif;
}
:deep(img) {
  @apply lg:w-3/5 mt-8;
}
:deep(a) {
  @apply underline-offset-1;
}
</style>
~/services/entity

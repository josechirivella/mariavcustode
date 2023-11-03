<template>
  <carousel :items-to-show="2" :wrap-around="true" :transition="500">
    <slide v-for="slide in media" :key="slide.id">
      <figure class="carousel__item">
        <img
          :src="slide.attributes.formats.small.url"
          :alt="slide.attributes.alternativeText"
        />

        <figcaption class="mt-4">
          {{ slide.attributes.alternativeText }}
        </figcaption>
      </figure>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script lang="ts" setup>
const props = defineProps(["media"]);
</script>

<template>
  <h2 class="text-4xl px-4 mb-2">
    {{ props.headline }}
  </h2>
  <div class="headline-underline w-3/4 lg:w-1/4 h-2 mb-8 bg-purple" />
</template>

<script setup lang="ts">
const props = defineProps({
  headline: {
    type: String,
    default: () => "",
  },
});
</script>

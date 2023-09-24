<template>
  <div v-if="!!markdown" v-html="markdown" />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { markdownToHTML } from "~/composables/markdownToHTML.ts";

const props = defineProps({
  content: {
    type: String,
    default: () => "",
  },
});

const markdown = ref(markdownToHTML(props.content));
</script>

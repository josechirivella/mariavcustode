<template>
  <div class="card-container flex justify-around flex-wrap lg:flex-nowrap">
    <template v-for="(card, index) in props.content" :key="index">
      <div class="card">
        <h3 class="text-center text-2xl mb-2">
          {{ card.title }}
        </h3>
        <p>{{ card.content }}</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  content: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss">
.card-container {
  .card {
    width: 250px;
    background-color: rgba(207, 188, 233, 0.46);
    box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, 0.3);
    @apply rounded-xl p-8 mb-8;
  }
}
</style>

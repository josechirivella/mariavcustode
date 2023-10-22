<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-purple"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between items-center lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <NuxtLink
          class="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          to="/"
        >
          Maria Custode
        </NuxtLink>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar()"
        >
          <Icon name="ci:hamburger-md" color="white" />
        </button>
      </div>
      <div
        :class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li v-for="item in navItems" :key="item.name" class="nav-item">
            <NuxtLink
              class="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
              :to="item.link"
              :target="item.target"
            >
              <i
                class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"
              /><span class="ml-2">{{ item.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface INavItems {
  name: string;
  link: string;
  target?: string;
}
const showMenu = ref(false);
const navItems: Array<INavItems> = [
  {
    name: "Case Studies",
    link: "/case-studies",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Resume",
    link: "/resume.pdf",
    target: "_blank",
  },
];
function toggleNavbar() {
  showMenu.value = !showMenu.value;
}
</script>

<style lang="scss" scoped>
nav {
  font-family: "Istok Web", sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  color: white;
  .nav-items {
    &__item {
      @apply mr-8;
    }
  }
  li {
    font-family: "Istok Web", sans-serif;
  }
}
</style>

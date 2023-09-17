<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-purple"
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
          <Icon name="ci:hamburger-md" color="black" />
        </button>
      </div>
      <div
        :class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <NuxtLink
              class="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/projects"
            >
              <i
                class="fab fa-facebook-square text-lg leading-lg text-white opacity-75"
              /><span class="ml-2">Projects</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
              href="https://storage.googleapis.com/uxfolio/64d678eb2f121800026a8399/RESUME_-_Maria_Custode_vxH.pdf"
              target="_blank"
            >
              <i
                class="fab fa-twitter text-lg leading-lg text-white opacity-75"
              /><span class="ml-2">Resume</span>
            </a>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/#contact-home"
            >
              <i
                class="fab fa-pinterest text-lg leading-lg text-white opacity-75"
              /><span class="ml-2">Contact</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const showMenu = ref(false);
function toggleNavbar() {
  showMenu.value = !showMenu.value;
}
</script>

<style lang="scss">
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
}
</style>

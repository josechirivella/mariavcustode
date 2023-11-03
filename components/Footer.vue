<template>
  <footer class="bg-purple text-white pb-4 px-4 lg:px-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto py-4">
      <div id="footer-info" class="space-y-4">
        <h2 class="text-4xl">Maria Custode</h2>
        <p class="text-lg">UX/UI Designer</p>
        <div class="social-icons flex align-middle space-x-4">
          <nuxt-link to="mailto:mariavcustode@gmail.com" target="_blank">
            <Icon name="fa6-solid:envelope" />
          </nuxt-link>
          <nuxt-link to="https://linkedin.com/in/mariavcustode" target="_blank"
            ><Icon name="fa6-brands:linkedin"
          /></nuxt-link>
          <nuxt-link to="tel:9195799981">
            <Icon name="fa6-solid:phone" />
          </nuxt-link>
          <nuxt-link to="https://dribbble.com/mariavcustode" target="_blank">
            <Icon name="fa6-brands:dribbble" />
          </nuxt-link>
        </div>
      </div>
      <div id="footer-links">
        <ul class="space-y-2">
          <li v-for="navItem in navItems" :key="navItem.name">
            <NuxtLink :to="navItem.link" :target="navItem.target">{{
              navItem.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="container mx-auto mt-8">
      <p class="text-lg">
        All rights reserved &copy; Maria V. Custode {{ date }}
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const date = new Date().getFullYear();
interface INavItems {
  name: string;
  link: string;
  target?: string;
}
const navItems: Array<INavItems> = [
  {
    name: "Home",
    link: "/",
  },
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
</script>

<style scoped>
li {
  @apply text-lg;
}
</style>

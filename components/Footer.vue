<template>
  <footer class="bg-purple text-white pb-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 container mx-auto py-4">
      <div id="footer-info" class="space-y-4">
        <h2 class="text-4xl">Maria Custode</h2>
        <p class="text-lg">UX/UI Designer</p>
        <div class="social-icons flex align-middle space-x-2">
          <nuxt-link to="mailto:mariavcustode@gmail.com" target="_blank">
            <Icon name="ci:mail" width="40" height="40" />
          </nuxt-link>
          <nuxt-link to="https://linkedin.com/in/mariavcustode" target="_blank"
            ><Icon name="mdi:linkedin" width="40" height="40"
          /></nuxt-link>
          <nuxt-link to="tel:9195799981">
            <Icon name="mdi:telephone" width="40" height="40" />
          </nuxt-link>
          <nuxt-link to="https://dribbble.com/mariavcustode" target="_blank">
            <Icon name="icon-park-outline:dribble" width="40" height="40" />
          </nuxt-link>
        </div>
      </div>
      <div id="footer-links">
        <ul class="space-y-2">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/case-studies">Case Studies</nuxt-link></li>
          <li>
            <a href="/resume.pdf" target="_blank">Resume</a>
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
</script>

<style scoped>
li {
  @apply text-lg;
}
</style>

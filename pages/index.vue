<template>
  <div id="hero" class="flex justify-between px-4 lg:px-16 py-8 items-center">
    <div class="hero-content">
      <h1 class="text-4xl lg:text-8xl">
        Hi there,<br />
        I'm Maria
      </h1>
      <img
        src="~/assets/images/squiggles.png"
        alt="Squiggles"
        class="my-8 relative -left-4 lg:-left-24"
      />
      <p class="lg:text-3xl">
        A highly motivated UX/UI designer with a background in Marketing.
        Passionate about creating and designing new and evolving projects.
      </p>
    </div>
    <img
      src="~/assets/images/portrait.png"
      class="w-1/2"
      alt="Portrait Picture"
    />
  </div>
  <div id="what-i-do" class="mb-8">
    <headline-underline headline="What do I do" />
    <cards :content="content" />
  </div>
  <div id="skills" class="mb-8">
    <headline-underline headline="My Skills" />
    <div class="grid grid-flow-row grid-cols-1 grid-rows-1 lg:grid-flow-col">
      <ul
        class="grid grid-rows-4 grid-flow-col gap-4 px-4 justify-around col-span-2 list-none lg:list-disc"
      >
        <li>Figma</li>
        <li>inVision</li>
        <li>Sketch</li>
        <li>Miro</li>
        <li>Wireframing</li>
        <li>Canva</li>
        <li>Procreate</li>
        <li>Photoshop</li>
        <li>Bilingual: English and Spanish</li>
        <li>Multitasking</li>
        <li>Organized</li>
        <li>Illustration</li>
      </ul>
      <img
        src="~/assets/images/skills-image.png"
        class="hidden lg:block lg:w-2/4"
        alt="Skills"
      />
    </div>
  </div>
  <div id="latest-projects" class="mb-8">
    <headline-underline headline="Latest Projects" />
    <template v-for="project in projects" :key="project.id">
      <NuxtLink
        :to="`projects/${project.id}`"
        class="flex items-center flex-wrap"
      >
        <template v-if="project.attributes.featureImage">
          <img
            :src="project.attributes.featureImage.data.attributes.url"
            :alt="
              project.attributes.featureImage.data.attributes.alternativeText
            "
            class="w-1/2 lg:w-1/5 lg:ml-8 lg:mr-12 my-0 mx-auto"
          />
        </template>

        <div
          class="ml-4 lg:ml-0 h-24 w-full flex-1 flex justify-center flex-col"
        >
          <h3 class="text-3xl">
            {{ project.attributes.heading }}
          </h3>
          <p>{{ project.attributes.subheading }}</p>
        </div>
      </NuxtLink>
    </template>
  </div>
  <div id="contact-home" class="mb-8">
    <h2 class="bg-purple text-white text-4xl p-4 lg:w-2/5 mb-4">Let's talk!</h2>
    <div class="flex flex-col px-4 space-y-4">
      <span class="flex items-center">
        <Icon name="ci:mail" width="40" height="40" />
        <a href="mailto:mariavcustode@gmail.com" class="text-bold ml-2"
          >mariavcustode@gmail.com</a
        >
      </span>
      <span class="flex items-center">
        <Icon name="mdi:linkedin" width="40" height="40" />
        <a
          href="https://linkedin.com/in/mariavcustode"
          target="_blank"
          class="text-bold ml-2"
          >linkedin.com/in/mariavcustode</a
        >
      </span>
      <span class="flex items-center">
        <Icon name="mdi:telephone" width="40" height="40" />
        <a href="tel:9195799981" class="text-bold ml-2">919-579-9981</a>
      </span>
      <span class="flex items-center">
        <Icon name="icon-park-outline:dribble" width="40" height="40" />
        <a
          href="https://dribbble.com/mariavcustode"
          target="_blank"
          class="text-bold ml-2"
          >Dribble</a
        >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import Cards from "../components/Cards.vue";
import HeadlineUnderline from "../components/HeadlineUnderline.vue";
import projectsService from "../services/projects";
import { ENTITIES } from "../services/entities";
import { ICaseStudies } from "../models/case-studies.model";

const content = [
  {
    title: "UX/UI Design",
    content: `I can create a variety of design based on the content or just redesign old apps/websites.`,
  },
  {
    title: "UX Research",
    content: `I work and help to collect and analyze data from the users during the research process.`,
  },
  {
    title: "Social Media",
    content: `Need help with your Instagram feed? Give me your goals and target and I'll create a design to accomplish it.`,
  },
];

const projects: Ref<ICaseStudies[]> = ref();

async function getProjects() {
  try {
    const { data } = await projectsService.get(ENTITIES.CASE_STUDIES, {
      params: {
        populate: "featureImage",
      },
    });
    // TODO hardcoding the latest project for the moment
    projects.value = data;
  } catch (e) {
    console.error("There was a problem fetching the projects", e.error);
  }
}

getProjects();
</script>

<style lang="scss">
#hero {
  .hero-content {
    width: 600px;
  }
}

#skills {
  .grid {
    @apply md:items-center;
  }
}
</style>

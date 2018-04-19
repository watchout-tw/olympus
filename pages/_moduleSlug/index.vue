<template>
<div class="page module">
  <header>
    <h1 class="small">{{ module.title }}</h1>
  </header>
  <nuxt-link class="project a-block" v-for="project of projects" :key="project.id" :to="{ name: 'moduleSlug-projectSlug', params: { moduleSlug: project.module, projectSlug: project.id }}"><span class="a-target">{{ project.title }}</span></nuxt-link>
</div>
</template>

<script>
import { projects, modules } from '~/config'

export default {
  async asyncData({ params }) {
    let projectsOfModule = projects.filter(project => project.module === params.moduleSlug)
    let module = modules.find(module => module.id === params.moduleSlug)

    return {
      projects: projectsOfModule,
      module
    }
  }
}
</script>

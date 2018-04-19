<template>
<div class="page index">
  <no-ssr><welcome /></no-ssr>
  <nuxt-link class="project a-block" v-for="project of projects" :key="project.id" :to="{ name: 'moduleSlug-projectSlug', params: { moduleSlug: project.module, projectSlug: project.id }}"><span class="a-target">{{ project.title }}</span></nuxt-link>
</div>
</template>

<script>
import { projects, modules } from '~/config'
import Welcome from '~/components/Welcome'

export default {
  data() {
    return {
      projects,
      modules
    }
  },
  components: {
    Welcome
  }
}
</script>

<template>
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

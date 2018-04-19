<template>
</template>

<script>
import { projects, modules } from '~/config'

export default {
  async asyncData({ params }) {
    let project = projects.find(project => project.id === params.projectSlug)
    let module = modules.find(module => module.id === params.moduleSlug)

    return {
      project,
      module
    }
  }
}
</script>

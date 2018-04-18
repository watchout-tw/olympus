<template>
</template>

<script>
import { projects, modules } from '~/config'

export default {
  async asyncData({ params }) {
    let project = projects.find(project => project.id === params.projectSlug && project.module === params.moduleSlug)
    let module = modules.find(module => module.id === params.moduleSlug)
    console.log(params)
    return {
      project,
      module
    }
  }
}
</script>

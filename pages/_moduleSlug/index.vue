<template>
<div class="page module">
  <header class="tcl-container">
    <div class="tcl-panel with-top-bottom-margin with-double-top-margin">
      <h1 class="text-align-center small">{{ module.title }}</h1>
    </div>
  </header>
  <div class="tcl-container">
    <div class="tcl-panel with-top-bottom-margin" v-for="project of projects" :key="project.id">
      <project-signature :module="module" :project="project" />
    </div>
    <div class="tcl-panel"></div>
  </div>
</div>
</template>

<script>
import * as info from '~/data/info'
import { knowsWatchout } from 'watchout-common-functions/interfaces'
import { projects, modules } from '~/config'
import ProjectSignature from '~/components/ProjectSignature'

export default {
  mixins: [knowsWatchout],
  async asyncData({ params }) {
    let projectsOfModule = projects.filter(project => project.module === params.moduleSlug)
    let module = modules.find(module => module.id === params.moduleSlug)

    return {
      projects: projectsOfModule,
      module
    }
  },
  head() {
    let pageTitle = info.L_SINGLE_BRACKET + this.module.title + info.R_SINGLE_BRACKET + info.SITE_TITLE
    let pageDescription = info.SITE_DESCRIPTION
    let pageCover = require('~/static/modules/' + this.module.id + '.png')
    return {
      title: pageTitle,
      meta: this.generateMeta('musou', pageTitle, pageDescription, pageCover)
    }
  },
  components: {
    ProjectSignature
  }
}
</script>

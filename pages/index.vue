<template>
<div class="page index">
  <div class="tcl-container">
    <div class="tcl-panel full-width with-padding">
      <no-ssr><welcome /></no-ssr>
    </div>
  </div>
  <div class="tcl-container">
    <div class="tcl-panel with-top-bottom-margin" v-for="project of projects" v-if="project.status !== 'unlisted'" :key="project.id">
      <project-signature :module="getModule(project.module)" :project="project" />
    </div>
    <div class="tcl-panel"></div>
  </div>
</div>
</template>

<script>
import * as info from '~/data/info'
import { knowsWatchout } from 'watchout-common-functions/interfaces'
import { projects, modules } from '~/config'
import Welcome from 'watchout-common-functions/components/Welcome'
import ProjectSignature from '~/components/ProjectSignature'
import defaultCoverImage from 'watchout-common-assets/images/default-cover-images/musou-2-1.jpg'

export default {
  mixins: [knowsWatchout],
  head() {
    let pageTitle = info.SITE_TITLE
    let pageDescription = info.SITE_DESCRIPTION
    return {
      title: pageTitle,
      meta: this.generateMeta('musou', pageTitle, pageDescription, defaultCoverImage)
    }
  },
  data() {
    return {
      projects,
      modules
    }
  },
  methods: {
    getModule(id) {
      return this.modules.find(module => module.id === id)
    }
  },
  components: {
    Welcome,
    ProjectSignature
  }
}
</script>

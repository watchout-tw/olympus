<template>
<div class="page index">
  <div class="tcl-container">
    <div class="tcl-panel full-width with-padding">
      <no-ssr><welcome /></no-ssr>
    </div>
  </div>
  <div class="tcl-container">
    <div class="tcl-panel with-top-bottom-margin" v-for="project of projects" :key="project.id">
      <project-signature :module="getModule(project.module)" :project="project" />
    </div>
    <div class="tcl-panel"></div>
  </div>
</div>
</template>

<script>
import * as info from '~/data/info'
import { generateMeta } from 'watchout-common-functions/functions'
import { projects, modules } from '~/config'
import Welcome from 'watchout-common-functions/components/Welcome'
import ProjectSignature from '~/components/ProjectSignature'

export default {
  head() {
    let pageTitle = info.SITE_TITLE
    let pageDescription = info.SITE_DESCRIPTION
    let pageCover = require('~/static/musou.png')
    return {
      title: pageTitle,
      meta: generateMeta(pageTitle, pageDescription, pageCover)
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

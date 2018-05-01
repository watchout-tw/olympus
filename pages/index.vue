<template>
<div class="page index">
  <div class="tcl-container">
    <div class="tcl-panel full-width with-padding">
      <no-ssr><welcome /></no-ssr>
    </div>
  </div>
  <div class="tcl-container">
    <div class="tcl-panel" v-for="project of projects">
      <nuxt-link class="project a-block" :key="project.id" :to="{ name: 'moduleSlug-projectSlug', params: { moduleSlug: project.module, projectSlug: project.id }}"><span class="a-target">{{ project.title }}</span></nuxt-link>
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
  components: {
    Welcome
  }
}
</script>

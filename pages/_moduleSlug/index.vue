<template>
<div class="page module">
  <header>
    <h1 class="small">{{ module.title }}</h1>
  </header>
  <nuxt-link class="project a-block" v-for="project of projects" :key="project.id" :to="{ name: 'moduleSlug-projectSlug', params: { moduleSlug: project.module, projectSlug: project.id }}"><span class="a-target">{{ project.title }}</span></nuxt-link>
</div>
</template>

<script>
import * as info from '~/data/info'
import { generateMeta } from 'watchout-common-functions/functions'
import { projects, modules } from '~/config'

export default {
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
    let pageCover = require('~/static/musou.png')
    return {
      title: pageTitle,
      meta: generateMeta(pageTitle, pageDescription, pageCover)
    }
  }
}
</script>

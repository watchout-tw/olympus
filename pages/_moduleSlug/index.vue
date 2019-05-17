<template>
<div class="page module">
  <div class="title-container">
    <div class="section-title small with-underline text-align-center margin-top-single margin-bottom-8"><span>模組</span></div>
    <h1 class="medium text-align-center">{{ module.title }}</h1>
  </div>
  <div class="docs tcl-container margin-top-bottom-8">
    <div class="doc tcl-panel tcl-left-right-margin with-top-bottom-margin" v-for="(reference, index) of projectRefs" :key="index">
      <reference-preview :reference="reference" :data="dataOnReferences" display="vertical" :show-pub-dest="true" :cachedAuthors="cachedAuthors" />
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
</div>
</template>

<script>
import * as firestore from 'watchout-common-functions/lib/firestore'
import * as info from '~/data/info'
import { modules } from '~/config'
import { knowsCaching, knowsWatchout } from 'watchout-common-functions/interfaces'
import { makeReference } from 'watchout-common-functions/lib/watchout'
import ReferencePreview from 'watchout-common-functions/components/ReferencePreview'
import defaultCoverImage from 'watchout-common-assets/images/default-cover-images/musou-2-1.jpg'

export default {
  mixins: [knowsCaching, knowsWatchout],
  validate({ params }) {
    const module = modules.find(module => module.id === params.moduleSlug)
    return !!module
  },
  async asyncData({ params }) {
    let moduleSlug = params.moduleSlug
    let module = modules.find(module => module.id === params.moduleSlug)
    let projects = await firestore.bunko.getProjects({ pubDest: 'musou' })

    projects = projects.filter(project => {
      let m = project.slug.split('/')[0]
      return moduleSlug === m
    })
    let projectRefs = projects.map(project => makeReference('project', project.slug, { publishedTo: project.publishedTo }))

    let dataOnReferences = {}
    for(let i = 0; i < projectRefs.length; i++) {
      dataOnReferences[projectRefs[i].url] = projects[i]
    }

    return {
      module,
      projectRefs,
      dataOnReferences
    }
  },
  head() {
    let pageTitle = this.module.title + info.SEPARATOR + info.SITE_TITLE
    let pageDescription = info.SITE_DESCRIPTION
    return {
      title: pageTitle,
      meta: this.generateMeta('musou', pageTitle, pageDescription, defaultCoverImage)
    }
  },
  components: {
    ReferencePreview
  }
}
</script>

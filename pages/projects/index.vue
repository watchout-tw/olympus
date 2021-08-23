<template>
<div class="page home">
  <div class="docs first-doc margin-top-bottom-8" v-if="hasReferences">
    <reference-preview :reference="references[0]" :data="dataOnReferences" display="tcl" :show-pub-dest="true" :cached-authors="cachedAuthors" />
  </div>
  <div class="docs tcl-container margin-top-bottom-4" v-if="hasReferences">
    <div class="doc tcl-panel tcl-left-right-margin with-top-bottom-margin" :class="{ 'half-width': index >= 3 }" v-for="(reference, index) of referenceExceptFirst" :key="index">
      <reference-preview :reference="reference" :data="dataOnReferences" display="vertical" :show-pub-dest="true" :cached-authors="cachedAuthors" />
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
</div>
</template>

<script>
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsFSCache, knowsWatchout } from 'watchout-common-functions/interfaces'
import { makeReference } from 'watchout-common-functions/lib/watchout'
import ReferencePreview from 'watchout-common-functions/components/ReferencePreview'
import * as info from '~/data/info'

export default {
  nuxtI18n: false,
  mixins: [knowsFSCache, knowsWatchout],
  async asyncData({ route }) {
    console.log('Current Path:', route.path)
    let projects = await firestore.bunko.getProjects({ pubDest: info.CHANNEL_ID })
    let projectRefs = projects.map(project => makeReference('project', project.slug, { publishedTo: project.publishedTo }))
    let dataOnReferences = {}
    for(let i = 0; i < projectRefs.length; i++) {
      dataOnReferences[projectRefs[i].url] = projects[i]
    }

    return {
      references: projectRefs,
      dataOnReferences
    }
  },
  head() {
    const pageTitle = '專題列表' + info.SEPARATOR + this.$t(info.SITE_TITLE)
    return {
      title: pageTitle,
      meta: this.generateMeta(info.CHANNEL_ID, pageTitle, info.SITE_DESCRIPTION)
    }
  },
  computed: {
    hasReferences() {
      return this.references.length > 0
    },
    referenceExceptFirst() {
      return this.references.slice(1, this.references.length)
    }
  },
  components: {
    ReferencePreview
  }
}
</script>

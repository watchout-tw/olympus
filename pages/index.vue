<template>
<div class="page index">
  <div class="tcl-container">
    <div class="tcl-panel full-width with-padding">
      <client-only><welcome /></client-only>
    </div>
  </div>
  <div class="section-title with-underline small text-align-center margin-top-single margin-bottom-4"><span>最新內容</span></div>
  <div class="docs first-doc margin-top-bottom-8">
    <reference-preview :reference="docRefs[0]" :data="dataOnReferences" display="tcl" :show-pub-dest="false" :read-more-style="null" :cachedAuthors="cachedAuthors" />
  </div>
  <div class="docs tcl-container margin-top-bottom-4">
    <div class="doc tcl-panel tcl-left-right-margin with-top-bottom-margin" :class="{ 'half-width': index > 1 }" v-for="(reference, index) of docRefsExceptFirst" :key="`doc-${index}`">
      <reference-preview :reference="reference" :data="dataOnReferences" display="vertical" :contributor-list-style="null" :read-more-style="null" :show-pub-dest="false" :cachedAuthors="cachedAuthors" />
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
  <div class="actions tcl-container no-margin">
    <div class="tcl-panel">
      <div class="form-field-align-center">
        <nuxt-link :to="{ name: 'docs' }" class="button medium musou">更多內容</nuxt-link>
      </div>
    </div>
  </div>
  <div class="section-title with-underline small text-align-center margin-top-single margin-bottom-4"><span>最新專題</span></div>
  <div class="projects first-doc margin-top-bottom-8">
    <reference-preview :reference="projectRefs[0]" :data="dataOnReferences" display="tcl" :show-pub-dest="false" :read-more-style="null" :cachedAuthors="cachedAuthors" />
  </div>
  <div class="docs tcl-container margin-top-bottom-4">
    <div class="doc tcl-panel tcl-left-right-margin with-top-bottom-margin" :class="{ 'half-width': index > 1 }" v-for="(reference, index) of projectRefsExceptFirst" :key="`doc-${index}`">
      <reference-preview :reference="reference" :data="dataOnReferences" display="vertical" :contributor-list-style="null" :read-more-style="null" :show-pub-dest="false" :cachedAuthors="cachedAuthors" />
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
  <div class="actions tcl-container no-margin">
    <div class="tcl-panel">
      <div class="form-field-align-center">
        <nuxt-link :to="{ name: 'projects' }" class="button medium musou">更多專題</nuxt-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsFSCache, knowsWatchout } from 'watchout-common-functions/interfaces'
import { makeReference } from 'watchout-common-functions/lib/watchout'
import Welcome from 'watchout-common-functions/components/Welcome'
import ReferencePreview from 'watchout-common-functions/components/ReferencePreview'
import defaultCoverImage from 'watchout-common-assets/images/default-cover-images/musou-2-1.jpg'
import * as info from '~/data/info'

const getLimit = 7

export default {
  nuxtI18n: false,
  mixins: [knowsFSCache, knowsWatchout],
  async asyncData() {
    // get docs with pub-dest filter
    let docs = await firestore.bunko.getDocs({ pubDest: info.CHANNEL_ID, limit: getLimit })
    let docRefs = docs.map(doc => makeReference('doc', doc.id, { publishedTo: doc.publishedTo }))
    let dataOnReferences = {}
    for(let i = 0; i < docRefs.length; i++) {
      dataOnReferences[docRefs[i].url] = docs[i]
    }

    let projects = await firestore.bunko.getProjects({ pubDest: info.CHANNEL_ID, limit: getLimit })
    let projectRefs = projects.map(project => makeReference('project', project.slug, { publishedTo: project.publishedTo }))
    for(let i = 0; i < projectRefs.length; i++) {
      dataOnReferences[projectRefs[i].url] = projects[i]
    }

    return {
      docRefs,
      projectRefs,
      dataOnReferences
    }
  },
  head() {
    let pageTitle = this.$t(info.SITE_TITLE)
    let pageDescription = info.SITE_DESCRIPTION
    return {
      title: pageTitle,
      meta: this.generateMeta(info.CHANNEL_ID, pageTitle, pageDescription, defaultCoverImage)
    }
  },
  computed: {
    docRefsExceptFirst() {
      return this.docRefs.slice(1, this.docRefs.length)
    },
    projectRefsExceptFirst() {
      return this.projectRefs.slice(1, this.projectRefs.length)
    }
  },
  components: {
    Welcome,
    ReferencePreview
  }
}
</script>

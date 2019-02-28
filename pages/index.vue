<template>
<div class="page index">
  <div class="tcl-container">
    <div class="tcl-panel full-width with-padding">
      <no-ssr><welcome /></no-ssr>
    </div>
  </div>
  <div class="docs first-doc margin-top-bottom-8">
    <reference-preview :reference="references[0]" :data="dataOnReferences" display="tcl" :show-pub-dest="true" />
  </div>
  <div class="docs tcl-container margin-top-bottom-4">
    <div class="doc tcl-panel tcl-left-right-margin with-top-bottom-margin" :class="{ 'half-width': index >= 4 }" v-for="(reference, index) of references" :key="index" v-if="index > 0">
      <reference-preview :reference="reference" :data="dataOnReferences" :display="index >= 4 ? 'vertical' : null" :show-pub-dest="true" />
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
</div>
</template>

<script>
import * as firestore from 'watchout-common-functions/lib/firestore'
import * as util from 'watchout-common-functions/lib/util'
import * as info from '~/data/info'
import { knowsWatchout } from 'watchout-common-functions/interfaces'
import { makeReference } from 'watchout-common-functions/lib/watchout'
import Welcome from 'watchout-common-functions/components/Welcome'
import ReferencePreview from 'watchout-common-functions/components/ReferencePreview'
import defaultCoverImage from 'watchout-common-assets/images/default-cover-images/musou-2-1.jpg'

export default {
  mixins: [knowsWatchout],
  async asyncData() {
    // get docs with pub-dest musou
    let docs = await firestore.bunko.getDocs({ pubDest: 'musou' })
    let docRefs = docs.map(doc => makeReference('doc', doc.id, { publishedTo: doc.publishedTo }))
    let dataOnReferences = {}
    for(let i = 0; i < docRefs.length; i++) {
      dataOnReferences[docRefs[i].url] = docs[i]
    }

    let projects = await firestore.bunko.getProjects({ pubDest: 'musou' })
    let projectRefs = projects.map(project => makeReference('project', project.slug, { publishedTo: project.publishedTo }))
    for(let i = 0; i < projectRefs.length; i++) {
      dataOnReferences[projectRefs[i].url] = projects[i]
    }

    let references = docRefs.concat(projectRefs)
    references.sort((a, b) => {
      return util.fsTSToDateObj(dataOnReferences[b.url].publishedAt) - util.fsTSToDateObj(dataOnReferences[a.url].publishedAt)
    })
    return {
      references,
      dataOnReferences
    }
  },
  head() {
    let pageTitle = info.SITE_TITLE
    let pageDescription = info.SITE_DESCRIPTION
    return {
      title: pageTitle,
      meta: this.generateMeta('musou', pageTitle, pageDescription, defaultCoverImage)
    }
  },
  components: {
    Welcome,
    ReferencePreview
  }
}
</script>

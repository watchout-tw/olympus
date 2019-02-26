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
import { makeReference, getMusouProjectURL } from 'watchout-common-functions/lib/watchout'
import { projects, modules } from '~/config'
import Welcome from 'watchout-common-functions/components/Welcome'
import ProjectSignature from '~/components/ProjectSignature'
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

    // make projects into references
    let projectRefs = projects.map(project => {
      let ref = makeReference('musou-project', project.module + '/' + project.id)
      ref.permalink = getMusouProjectURL(project.module, project.id)
      return ref
    })

    // make data on project references
    let dataOnProjectReferences = projects.map(project => {
      let image = require('~/static/' + (typeof project.image === 'string' ? project.image : project.image.default))
      return {
        title: (project.beforeTitle ? `${info.L_FILLED_BRACKET}${project.beforeTitle}${info.R_FILLED_BRACKET}${project.title}` : project.title),
        description: project.description,
        image,
        publishedAt: util.dateObjToFsTS(new Date(project.date)),
        publishedTo: 'musou',
        status: 'active'
      }
    })
    for(let i = 0; i < projects.length; i++) {
      let ref = projectRefs[i]
      let data = dataOnProjectReferences[i]
      dataOnReferences[ref.url] = data
    }

    // concat all references & sort
    let references = docRefs.concat(projectRefs)
    references.sort((a, b) => {
      return util.fsTSToDateObj(dataOnReferences[b.url].publishedAt) - util.fsTSToDateObj(dataOnReferences[a.url].publishedAt)
    })

    return {
      references,
      dataOnReferences,
      projects,
      modules
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
  methods: {
    getModule(id) {
      return this.modules.find(module => module.id === id)
    }
  },
  components: {
    Welcome,
    ProjectSignature,
    ReferencePreview
  }
}
</script>

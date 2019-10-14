<template>
<div class="page home">
  <div class="docs first-doc margin-top-bottom-8" v-if="hasReferences">
    <reference-preview :reference="references[0]" :data="dataOnReferences" display="tcl" :show-pub-dest="true" :cached-authors="cachedAuthors" :key="references[0].permalink" />
  </div>
  <div class="docs tcl-container margin-top-bottom-4" v-if="hasReferences">
    <div class="doc tcl-panel tcl-left-right-margin with-top-bottom-margin" :class="{ 'half-width': index > 2 }" v-for="(reference, index) of references" :key="reference.permalink" v-if="index > 0">
      <reference-preview :reference="reference" :data="dataOnReferences" display="vertical" :show-pub-dest="true" :cached-authors="cachedAuthors" />
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
  <div class="controls" v-if="references.length > 0">
    <div class="form-field-many-inputs no-wrap form-field-align-center">
      <submit-button class="musou" :class="{ disabled: !hasMore }" label="更多內容" :state.sync="moreButtonStatus.state" :message.sync="moreButtonStatus.message" @click.native="loadMore" />
    </div>
    <div class="secondary-text font-size-tiny text-align-center line-height-default">
      <div v-if="references.length > 1">目前顯示 1-{{ references.length }} 則</div>
      <div>共 {{ docCount }} 則</div>
    </div>
  </div>
</div>
</template>

<script>
import * as STATES from 'watchout-common-functions/lib/states'
import * as firestore from 'watchout-common-functions/lib/firestore'
import * as info from '~/data/info'
import { knowsCaching, knowsWatchout } from 'watchout-common-functions/interfaces'
import { makeReference } from 'watchout-common-functions/lib/watchout'
import ReferencePreview from 'watchout-common-functions/components/ReferencePreview'
import SubmitButton from 'watchout-common-functions/components/button/Submit'

let firstPageSize = 15
let pageSize = 8
let currentPage = 1

function makeDocRefs(docs) {
  return docs.map(doc => makeReference('doc', doc.id, { publishedTo: doc.publishedTo }))
}

export default {
  mixins: [knowsCaching, knowsWatchout],
  async asyncData() {
    let docCount = await firestore.bunko.countDocs({ pubDest: info.CHANNEL_ID })
    let docs = await firestore.bunko.getDocs({ pubDest: info.CHANNEL_ID, limit: firstPageSize })
    let docRefs = makeDocRefs(docs)
    let dataOnReferences = {}
    for(let i = 0; i < docRefs.length; i++) {
      dataOnReferences[docRefs[i].url] = docs[i]
    }

    let moreButtonStatus = {
      state: STATES.DEFAULT,
      message: null
    }

    return {
      docCount,
      pageSize,
      currentPage,
      lastDocID: docs[docs.length - 1].id,
      references: docRefs,
      dataOnReferences,
      moreButtonStatus
    }
  },
  head() {
    const pageTitle = '文件列表' + info.SEPARATOR + info.SITE_TITLE
    return {
      title: pageTitle,
      meta: this.generateMeta(info.CHANNEL_ID, pageTitle, info.SITE_DESCRIPTION)
    }
  },
  computed: {
    hasReferences() {
      return this.references.length > 0
    },
    hasMore() {
      return this.references.length < this.docCount
    }
  },
  methods: {
    async loadMore() {
      if(this.hasMore) {
        this.moreButtonStatus.state = STATES.LOADING
        let docs = await firestore.bunko.getDocs({ pubDest: info.CHANNEL_ID, lastDocID: this.lastDocID, limit: pageSize })
        if(docs.length > 0) {
          this.moreButtonStatus.state = STATES.SUCCESS

          let docRefs = makeDocRefs(docs)
          this.references.push(...docRefs)
          for(let i = 0; i < docRefs.length; i++) {
            this.$set(this.dataOnReferences, docRefs[i].url, docs[i])
          }

          this.lastDocID = docs[docs.length - 1].id
          this.currentPage += 1
        } else {
          this.moreButtonStatus.state = STATES.FAILED
        }
      }
    }
  },
  method: {
    makeDocRefs
  },
  components: {
    ReferencePreview,
    SubmitButton
  }
}
</script>

<template>
<div class="page home">
  <div class="years form-field-many-inputs tight form-field-align-center margin-top-bottom-8">
    <div class="year input button small flat" :class="{ musou: selectedYear === year }" v-for="year of years" :key="year" @click="selectedYear = +year">{{ year }}</div>
  </div>
  <div class="docs first-doc margin-top-bottom-8" v-if="hasReferences">
    <reference-preview :reference="references[0]" :data="dataOnReferences" display="tcl" :show-pub-dest="false" :read-more-style="null" :cached-authors="cachedAuthors" :key="references[0].permalink" />
  </div>
  <div class="docs tcl-container margin-top-bottom-4" v-if="hasReferences">
    <div class="doc tcl-panel tcl-left-right-margin with-top-bottom-margin" :class="{ 'half-width': index > 2 }" v-for="(reference, index) of references" :key="reference.permalink" v-if="index > 0">
      <reference-preview :reference="reference" :data="dataOnReferences" display="vertical" :show-pub-dest="false" :title-classes="['medium']" :description="null" :read-more-style="null" :cached-authors="cachedAuthors" />
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
  <div class="controls">
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
import { knowsFSCache, knowsWatchout } from 'watchout-common-functions/interfaces'
import { makeReference } from 'watchout-common-functions/lib/watchout'
import ReferencePreview from 'watchout-common-functions/components/ReferencePreview'
import SubmitButton from 'watchout-common-functions/components/button/Submit'
import * as info from '~/data/info'

let firstPageSize = 23
let pageSize = 24
let currentPage = 1

let minYear = 2013

function makeDocRefs(docs) {
  return docs.map(doc => makeReference('doc', doc.id, { publishedTo: doc.publishedTo }))
}

export default {
  mixins: [knowsFSCache, knowsWatchout],
  async asyncData() {
    let years = []
    for(let i = +(new Date()).getFullYear(); i >= minYear; i--) {
      years.push(i)
    }
    let selectedYear = -1
    let pubDest = info.CHANNEL_ID

    let docCount = await firestore.bunko.countDocs({ pubDest })
    let docs = await firestore.bunko.getDocs({ pubDest, limit: firstPageSize })
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
      pubDest,
      docCount,
      pageSize,
      currentPage,
      lastDocID: docs.length > 0 ? docs[docs.length - 1].id : null,
      references: docRefs,
      dataOnReferences,
      moreButtonStatus,
      years,
      selectedYear
    }
  },
  head() {
    const pageTitle = '文件列表' + info.SEPARATOR + info.SITE_TITLE
    return {
      title: pageTitle,
      meta: this.generateMeta(info.CHANNEL_ID, pageTitle, info.SITE_DESCRIPTION)
    }
  },
  data() {
    return {
      yearSelected: -1
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
        let options = {
          pubDest: this.pubDest,
          lastDocID: this.lastDocID,
          limit: this.pageSize,
          ...(this.selectedYear > 0 ? { year: this.selectedYear } : {})
        }

        this.moreButtonStatus.state = STATES.LOADING
        let docs = await firestore.bunko.getDocs(options)
        if(docs.length > 0) {
          this.moreButtonStatus.state = STATES.SUCCESS

          let docRefs = makeDocRefs(docs)
          this.references.push(...docRefs)
          for(let i = 0; i < docRefs.length; i++) {
            this.$set(this.dataOnReferences, docRefs[i].url, docs[i])
          }

          this.lastDocID = docs[docs.length - 1].id
          this.currentPage += 1
          this.pageSize = pageSize
        } else {
          this.moreButtonStatus.state = STATES.FAILED
        }
      }
    }
  },
  watch: {
    async selectedYear(nextSelectedYear, prevSelectedYear) {
      if(nextSelectedYear !== prevSelectedYear) {
        // clear
        this.references = []
        this.dataOnReferences = {}
        this.lastDocID = null
        this.currentPage = 0
        this.pageSize = firstPageSize
        // update docCount
        this.docCount = 0
        this.docCount = await firestore.bunko.countDocs({ pubDest: this.pubDest, year: nextSelectedYear })
      }
      // load
      this.loadMore()
    }
  },
  components: {
    ReferencePreview,
    SubmitButton
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.page.home {
  > .years {
  }
}
</style>

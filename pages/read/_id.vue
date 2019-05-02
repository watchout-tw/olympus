<template>
<div class="page read single">
  <div class="doc-header-container responsive-typesetting-container margin-top-double margin-bottom-single">
    <doc-header :doc="doc" :variable-font-size="true" :cachedAuthors="cachedAuthors" />
  </div>
  <ghost-article :sections="sections" :cards="cards" :references="references" :data="dataOnReferences" />
  <after-article :shareURL="shareURL" :links="links" :sources="sources" :footnotes="footnotes" :references="references" :data="dataOnReferences" :cachedAuthors="cachedAuthors" />
</div>
</template>

<script>
import * as info from '~/data/info'
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsCaching, knowsWatchout } from 'watchout-common-functions/interfaces'
import { mobiledocProcessor } from 'watchout-common-functions/lib/bunko'
import DocHeader from 'watchout-common-functions/components/comp/DocHeader'
import GhostArticle from 'watchout-common-functions/components/ghost/Article'
import AfterArticle from 'watchout-common-functions/components/ghost/AfterArticle'
import defaultCoverImage from 'watchout-common-assets/images/default-cover-images/musou-2-1.jpg'

export default {
  mixins: [knowsCaching, knowsWatchout],
  async asyncData({ params, error }) {
    let doc = await firestore.bunko.getDoc(params.id, true)
    if(!(doc && doc.publishedTo === info.CHANNEL_ID)) { // FIXME: better error handling
      error({ statusCode: 404 })
      return
    }
    let mobiledoc = JSON.parse(doc.content.mobiledoc)
    let processedDoc = await mobiledocProcessor(mobiledoc)
    return Object.assign({
      doc
    }, processedDoc)
  },
  head() {
    const pageTitle = this.doc.title + info.SEPARATOR + info.SITE_TITLE
    const pageDescription = this.doc.description
    const pageImage = this.doc.imageObj ? this.doc.imageObj.permalink : defaultCoverImage
    return {
      title: pageTitle,
      meta: this.generateMeta(info.CHANNEL_ID, pageTitle, pageDescription, pageImage)
    }
  },
  computed: {
    shareURL() {
      return this.getCompDocURL(info.CHANNEL_ID, this.$route.params.id)
    }
  },
  components: {
    DocHeader,
    GhostArticle,
    AfterArticle
  }
}
</script>

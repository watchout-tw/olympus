<template>
<div class="page read single">
  <!--<div class="controls responsive-typesetting-container margin-top-bottom-single">
    <a :href="getWatchoutDocListURL()" class="a-text">返回列表</a>
  </div>-->
  <doc-header :doc="doc" :cachedAuthors="cachedAuthors" />
  <ghost-article :article="doc.content" :footnotes="footnotes" :links="links" :references="references" :data="dataOnReferences" />
</div>
</template>

<script>
import * as info from '~/data/info'
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsCaching, knowsWatchout } from 'watchout-common-functions/interfaces'
import { mobiledocProcessor } from 'watchout-common-functions/lib/bunko'
import DocHeader from 'watchout-common-functions/components/comp/DocHeader'
import GhostArticle from 'watchout-common-functions/components/ghost/Article'
export default {
  mixins: [knowsCaching, knowsWatchout],
  async asyncData({ params }) {
    let doc = await firestore.bunko.getDoc(params.id, true)
    let mobiledoc = JSON.parse(doc.content.mobiledoc)
    let processed = await mobiledocProcessor(mobiledoc)
    return Object.assign({
      doc,
      mobiledoc
    }, processed)
  },
  head() {
    const pageTitle = this.doc.title + info.SITE_TITLE
    const pageDescription = this.doc.description
    const pageImage = this.doc.imageObj ? this.doc.imageObj.permalink : null
    return {
      title: pageTitle,
      meta: this.generateMeta('musou', pageTitle, pageDescription, pageImage)
    }
  },
  components: {
    DocHeader,
    GhostArticle
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.page.read.single {
}
</style>

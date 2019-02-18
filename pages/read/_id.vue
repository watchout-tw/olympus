<template>
<div class="page read single">
  <!--<div class="controls responsive-typesetting-container margin-top-bottom-single">
    <a :href="getWatchoutDocListURL()" class="a-text">返回列表</a>
  </div>-->
  <doc-header :doc="doc" :cachedAuthors="cachedAuthors" />
  <ghost-article :article="doc.content" :footnotes="footnotes" :links="links" :references="references" :data="dataOnReferences" />
  <div class="share margin-top-bottom-double">
    <div class="section-title with-underline text-align-center margin-top-bottom-single"><span>認同請分享</span></div>
    <share-to-platforms :url="shareURL" />
  </div>
</div>
</template>

<script>
import * as info from '~/data/info'
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsCaching, knowsWatchout } from 'watchout-common-functions/interfaces'
import { mobiledocProcessor } from 'watchout-common-functions/lib/bunko'
import DocHeader from 'watchout-common-functions/components/comp/DocHeader'
import GhostArticle from 'watchout-common-functions/components/ghost/Article'
import ShareToPlatforms from 'watchout-common-functions/components/ShareToPlatforms'
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
    let processed = await mobiledocProcessor(mobiledoc)
    return Object.assign({
      doc,
      mobiledoc
    }, processed)
  },
  head() {
    const pageTitle = this.doc.title + info.SEPARATOR + info.SITE_TITLE
    const pageDescription = this.doc.description
    const pageImage = this.doc.imageObj ? this.doc.imageObj.permalink : defaultCoverImage
    return {
      title: pageTitle,
      meta: this.generateMeta('musou', pageTitle, pageDescription, pageImage)
    }
  },
  computed: {
    shareURL() {
      return this.getCompDocURL('musou', this.$route.params.id)
    }
  },
  components: {
    DocHeader,
    GhostArticle,
    ShareToPlatforms
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.page.read.single {
}
</style>

<template>
<div class="page read single">
  <div class="controls responsive-typesetting-container margin-top-bottom-single">
    <nuxt-link :to="{ name: 'read' }" class="a-text">返回列表</nuxt-link>
  </div>
  <doc-header :doc="doc" :cachedAuthors="cachedAuthors" />
  <ghost-article :article="doc.content" :data="referenceData" />
</div>
</template>

<script>
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsCaching } from 'watchout-common-functions/interfaces'
import { getReferenceData } from 'watchout-common-functions/lib/bunko'
import DocHeader from 'watchout-common-functions/components/comp/DocHeader'
import GhostArticle from 'watchout-common-functions/components/ghost/Article'
export default {
  mixins: [knowsCaching],
  async asyncData({ params }) {
    let doc = await firestore.bunko.getDoc(params.id, true)
    let referenceData = await getReferenceData('mobiledoc', JSON.parse(doc.content.mobiledoc))
    return {
      doc,
      referenceData
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

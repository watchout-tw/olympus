<template>
<div class="page read single">
  <div class="controls responsive-typesetting-container margin-top-bottom-single">
    <nuxt-link :to="{ name: 'read' }" class="a-text">返回列表</nuxt-link>
  </div>
  <div class="before-article responsive-typesetting-container margin-top-bottom-single">
    <div class="title variable-font-size margin-top-bottom-single">
      <h1 class="medium">{{ doc.title }}</h1>
    </div>
    <div class="authors">
      <template v-for="(author, index) of doc.authors">
        <a class="author a-text" :href="getParkPersonaProfileURL(author)">{{ cachedAuthorByPersona(author).name }}</a>
        <span v-if="index < doc.authors.length - 1">、</span>
      </template>
    </div>
    <div class="dates font-size-small">
      <div><span>發佈時間</span><span class="full-width-punctuation">：</span><span>{{ getDateTimeString(doc.publishedAt) }}</span></div>
      <div v-if="doc.updatedAt"><span>最後更新</span><span class="full-width-punctuation">：</span><span>{{ getDateTimeString(doc.updatedAt) }}</span></div>
    </div>
  </div>
  <ghost-article :article="doc.content" :data="referenceData" />
</div>
</template>

<script>
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsCaching, knowsFormatting, knowsWatchout } from 'watchout-common-functions/interfaces'
import { getReferenceData } from 'watchout-common-functions/lib/bunko'
import GhostArticle from 'watchout-common-functions/components/ghost/Article'
export default {
  mixins: [knowsCaching, knowsFormatting, knowsWatchout],
  async asyncData({ params }) {
    let doc = await firestore.bunko.getDoc(params.id, true)
    let referenceData = await getReferenceData('mobiledoc', JSON.parse(doc.content.mobiledoc))
    return {
      doc,
      referenceData
    }
  },
  components: {
    GhostArticle
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.page.read.single {
}
</style>

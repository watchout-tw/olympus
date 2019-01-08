<template>
<div class="page read single">
  <div class="tcl-container controls-container no-margin">
    <div class="tcl-panel">
      <nuxt-link :to="{ name: 'read' }" class="a-text">返回列表</nuxt-link>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div class="before-article tcl-container no-margin">
    <div class="tcl-panel no-margin tcl-left-right-margin">
      <h1 class="title medium margin-top-bottom-single">{{ doc.title }}</h1>
      <div class="authors">
        <template v-for="(author, index) of doc.authors">
          <a class="author a-text" :href="getParkPersonaProfileURL(author)" target="_blank">{{ cachedAuthorByPersona(author).name }}</a>
          <span v-if="index < doc.authors.length - 1">、</span>
        </template>
      </div>
      <div class="dates font-size-small">
        <div>{{ getDateTimeString(doc.publishedAt) }} 發佈</div>
        <div v-if="doc.updatedAt">{{ getDateTimeString(doc.updatedAt) }} 更新</div>
      </div>
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

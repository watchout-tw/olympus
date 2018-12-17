<template>
<div class="page read single">
  <div class="tcl-container without-margin">
    <div class="tcl-panel">
      <nuxt-link :to="{ name: 'read' }" class="a-text">返回</nuxt-link>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <ghost-article :article="doc.content" />
</div>
</template>

<script>
import * as firestore from 'watchout-common-functions/lib/firestore'
import GhostArticle from 'watchout-common-functions/components/ghost/Article'
export default {
  async asyncData({ params }) {
    let doc = await firestore.bunko.getDoc(params.id, true)
    return {
      doc
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

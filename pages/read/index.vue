<template>
<div class="page read index">
  <div class="docs">
    <div class="doc bg-musou-light margin-top-bottom-8" v-for="doc of docs">
      <div>{{ doc.id }}</div>
      <div>{{ doc.data }}</div>
    </div>
  </div>
</div>
</template>

<script>
import firestore from 'watchout-common-functions/lib/firestore'

export default {
  async asyncData() {
    let docs = await firestore.bunko.getDocs()
    return {
      docs
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.page.read.index {
}
</style>

<template>
<div class="page read index">
  <div class="docs tcl-container margin-top-bottom-8">
    <nuxt-link :to="{ path: doc.id }" append class="doc tcl-panel half-width a-block" v-for="doc of docs" :key="doc.id">
      <div class="image" :style="getDocImageStyles(doc)"></div>
      <div class="title margin-top-bottom-8"><span class="a-target">{{ doc.title }}</span></div>
    </nuxt-link>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
</div>
</template>

<script>
import { env } from 'watchout-common-assets'
import * as firestore from 'watchout-common-functions/lib/firestore'

export default {
  async asyncData() {
    let docs = await firestore.bunko.getDocs()
    return {
      docs
    }
  },
  methods: {
    getDocImageStyles(doc) {
      let styles = {}
      if(doc.image) {
        if(doc.type === 'ghost') {
          styles.backgroundImage = `url('${env.links.bunko.beta}${doc.image}')`
        }
      }
      return styles
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.page.read.index {
  > .docs {
    > .doc {
      > .image {
        @include rect(2/1);
        background-color: $color-very-very-light-grey;
        background-position: center center;
        background-size: cover;
        @include shadow;
      }
    }
  }
}
</style>

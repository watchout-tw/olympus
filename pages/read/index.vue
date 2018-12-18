<template>
<div class="page read index">
  <div class="docs tcl-container margin-top-bottom-8">
    <div class="doc tcl-panel half-width" v-for="doc of docs" :key="doc.id">
      <nuxt-link :to="{ path: doc.id }" append class="anchor a-block">
        <div class="image" :style="getDocImageStyles(doc)"></div>
        <div class="title margin-top-bottom-8"><span class="a-target">{{ doc.title }}</span></div>
      </nuxt-link>
      <div class="authors font-size-small">
        <a class="author a-text" :href="getParkPersonaProfileURL(getAuthorByContent(doc.type, author).persona)" target="_blank" v-for="(author, index) of doc.authors" :key="index">
          {{ getAuthorByContent(doc.type, author).name }}
        </a>
      </div>
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
</div>
</template>

<script>
import { env } from 'watchout-common-assets'
import { knowsWatchout } from 'watchout-common-functions/interfaces'
import * as firestore from 'watchout-common-functions/lib/firestore'

export default {
  mixins: [knowsWatchout],
  async asyncData() {
    let authors = await firestore.bunko.getAuthors()
    let docs = await firestore.bunko.getDocs()
    return {
      authors,
      docs
    }
  },
  methods: {
    getAuthorByContent(type, id) {
      return this.authors ? this.authors.find(author => author.content.id === id) : null
    },
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
      > .anchor {
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
}
</style>

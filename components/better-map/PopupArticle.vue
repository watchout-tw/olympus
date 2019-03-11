<template>
<div class="popup-article">
  <div class="content margin-top-bottom-double">
    <h3 class="title text-align-center" v-html="spacingOptimizer(title)"></h3>
    <div class="card" v-for="(section, index) of mobiledoc.sections" :key="index" v-if="section[0] === 10"><!-- && section[0] === 10 && mobiledoc.cards[section[1]][0] === 'markdown'">-->
      <template v-if="mobiledoc.cards[section[1]][0] === 'markdown'">
        <div v-html="markdown(mobiledoc.cards[section[1]][1].markdown)"></div>
      </template>
      <template v-else-if="mobiledoc.cards[section[1]][0] === 'image'">
        <img class="image" :src="ghostBaseURL + mobiledoc.cards[section[1]][1].src" />
      </template>
    </div>
    <div class="share margin-top-bottom-single">
      <share-to-platforms :url="shareURL" />
    </div>
    <div class="dismiss" @click="dismiss"><span>OK</span></div>
  </div>
  <div class="close fixed white" @click="dismiss"></div>
</div>
</template>

<script>
// This is a prototype of something between Infobox and Prompt
// TODO: Make this a independent component in common-function
import config from 'watchout-common-functions/config/config'
import { knowsBunko, knowsMarkdown } from 'watchout-common-functions/interfaces'
import ShareToPlatforms from 'watchout-common-functions/components/ShareToPlatforms'

export default {
  mixins: [knowsBunko, knowsMarkdown],
  props: {
    doc: {
      type: Object,
      default: () => ({})
    },
    show: Boolean,
    shareURL: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      ghostBaseURL: config.ghostBaseURL
    }
  },
  computed: {
    mobiledoc() {
      return this.doc ? JSON.parse(this.doc.content.mobiledoc) : { sections: [] }
    },
    title() {
      return this.doc ? this.doc.title : ''
    }
  },
  methods: {
    dismiss() {
      this.$emit('update:show', false)
    }
  },
  components: {
    ShareToPlatforms
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';
@import '~assets/colors';

.popup-article {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: $color-modal-overlay-grey;
  color: $color-very-very-light-grey;
  z-index: $z-modal;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  > .content {
    max-width: 30rem;
    padding-top: 1em;
    .card {
      padding: 0 1em 0.5em 1em;
      .paragraphs {
        font-size: 1rem;
      }
      .image {
        max-width: 100%;
      }
    }
    > .dismiss {
      padding-top: 0.5rem;
      padding-bottom: 1.5rem;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      > span {
        border-bottom: 2px white solid;
      }
    }
    > .title {
      margin-left: 0.375rem;
      padding-bottom: 0.5em;
      font-size: 1.5rem;
    }
  }
  .close {
    height: 3em;
    width: 2.75em;
    padding: 0 0.25rem;
    opacity: 0.9;
    &:before {
      font-size: 3em;
    }
    &.fixed {
      position: fixed;
    }
  }
}
</style>

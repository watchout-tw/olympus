<template>
<div class="main-visual" v-if="mainVisual" :class="mainVisual.type">
  <template v-if="mainVisual.type === 'image'">
    <div class="content" id="journey-main-visual-canvas" :style="mainVisualContentStyles"></div>
  </template>
</div>
</template>

<script>
import canvasIsLarger from '~/interfaces/journey/canvasIsLarger'

export default {
  mixins: [canvasIsLarger],
  props: ['canvas', 'mainVisual'],
  data() {
    return {
      croppingMethod: 'cover'
    }
  },
  computed: {
    mainVisualContentStyles() {
      var styles = {}
      if(this.mainVisual && this.mainVisual.type === 'image') {
        if(this.mainVisual.magnify === false) {
          if(this.canvasIsLarger()) {
            // actual size
            this.croppingMethod = 'none'
            styles.backgroundSize = this.mainVisual.width + 'px'
          } else {
            // contain
            this.croppingMethod = styles.backgroundSize = 'contain'
          }
        } else {
          // cover
          this.croppingMethod = styles.backgroundSize = 'cover'
        }
        if(this.mainVisual.blur) {
          styles.filter = 'blur(4px)'
        }
        styles.backgroundImage = 'url(' + require('~/static/' + this.mainVisual.url) + ')'
      }
      return styles
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.main-visual {
  @include full-coverage;
  &.image > .content {
    @include full-coverage;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
</style>

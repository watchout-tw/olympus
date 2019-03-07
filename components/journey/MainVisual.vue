<template>
<div class="main-visual" v-if="mainVisual" :class="mainVisual.type">
  <template v-if="mainVisual.type === 'image'">
    <div class="content" id="journey-main-visual-canvas" :style="mainVisualContentStyles"></div>
  </template>
</div>
</template>

<script>
export default {
  props: ['mainVisual', 'canvasIsLarger'],
  computed: {
    mainVisualContentStyles() {
      let styles = {}
      if(this.mainVisual && this.mainVisual.type === 'image') {
        if(this.mainVisual.magnify === false) {
          if(this.canvasIsLarger()) {
            // actual size
            styles.backgroundSize = this.mainVisual.width + 'px'
          } else {
            // contain
            styles.backgroundSize = 'contain'
          }
        } else {
          // cover
          styles.backgroundSize = 'cover'
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

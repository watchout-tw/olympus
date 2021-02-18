<template>
<div class="visual-tags" v-if="tags" :style="visualTagContainerStyles">
  <div v-for="tag of tags" class="visual-tag" :style="visualTagStyle(tag)" @click="visualTagClick(tag)" :key="getVisualTagKey(tag)">
    <div class="region" :style="Object.assign(getDimensions(tag), getStyles('visualTags', tag))"></div>
    <div class="content" v-if="tag.content">{{ tag.content }}</div>
  </div>
</div>
</template>

<script>

export default {
  props: ['mainVisual', 'actual', 'canvas', 'tags', 'getStyles'],
  computed: {
    visualTagContainerStyles() {
      return this.mainVisual ? { // eslint-disable-line multiline-ternary
        width: this.mainVisual.width * this.zoom + 'px',
        height: this.mainVisual.height * this.zoom + 'px',
        top: this.offset.top + 'px',
        left: this.offset.left + 'px'
      } : {}
    },
    zoom() {
      return this.mainVisual ? this.actual.width / this.mainVisual.width : 1
    },
    offset() {
      return {
        top: (this.canvas.height - this.actual.height) / 2.0,
        left: (this.canvas.width - this.actual.width) / 2.0
      }
    }
  },
  methods: {
    visualTagClick(tag) {
      if(tag.click === 'getCloser') {
        const transformOrigin = {
          x: (tag.x + tag.width / 2) * 100.0 / this.mainVisual.width,
          y: (tag.y + tag.height / 2) * 100.0 / this.mainVisual.height
        }
        const transform = {
          scale: this.canvas.transform.scale === 1 ? 2 : 1
        }
        const newCanvas = { ...this.canvas, transformOrigin, transform }
        this.$emit('update:canvas', newCanvas)
      } else if(tag.click === 'revealUnder') {
        tag.visible = false
      }
    },
    visualTagStyle(tag) {
      return Object.assign(this.getPositions(tag), this.getVisibility(tag))
    },
    getPositions(data) {
      return {
        top: data.y * 100.0 / this.mainVisual.height + '%',
        left: data.x * 100.0 / this.mainVisual.width + '%'
      }
    },
    getDimensions(data) {
      let styles = {}
      styles.width = data.width * this.zoom + 'px'
      styles.height = data.height * this.zoom + 'px'
      return styles
    },
    getVisibility(data) {
      let styles = {}
      if(data.hasOwnProperty('visible') && data.visible === false) {
        styles.opacity = 0
        styles.visibility = 'hidden'
      }
      return styles
    },
    getVisualTagKey(tag) {
      return `${tag.x}-${tag.y}-${tag.width}-${tag.height}`
    }
  }
}
</script>

<style lang="scss">
.visual-tags {
  position: absolute;
  > .visual-tag {
    position: absolute;
    transition: visibility 0s linear 500ms, opacity 500ms;
    > .region {
      border-style: solid;
      cursor: pointer;
    }
    > .content {
      display: inline-block;
      max-width: 8rem;
      border-radius: 2px;
      font-size: 0.875rem;
      margin: 0.25rem 0;
      padding: 0.25rem 0.5rem;
      background: rgba(white, 0.5);
      color: black;
    }
  }
}
</style>

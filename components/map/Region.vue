<template>
<div class="atlas-with-draw atlas-regions-region">
  <div class="name">{{ region.translation }}</div>
  <div class="score">
    <span class="value">{{ score }}</span>
    <span class="unit">%</span>
  </div>
  <div class="draw" :class="{ debug: debug }">
    <svg :viewBox="viewBox"></svg>
  </div>
</div>
</template>

<script>
import * as d3 from 'd3'
import { makeLabel, tightlyPack } from '~/util/d3Exten'

d3.selection.prototype.makeLabel = makeLabel
d3.selection.prototype.tightlyPack = tightlyPack

export default {
  props: ['raw', 'region', 'debug'],
  data: function() {
    return {
      el: {},
      size: {
        w: 320,
        h: 320,
        lineHeight: 1.25
      },
      score: 0
    }
  },
  computed: {
    viewBox() {
      return [0, 0, this.size.w, this.size.h].join(' ')
    },
    rows() {
      return this.raw.filter(row => row.region === this.region.name)
    }
  },
  watch: {
    rows() {
      this.draw()
    }
  },
  mounted() {
    this.el.container = d3.select(this.$el).select('.draw')
    this.el.root = this.el.container.select('svg')
  },
  methods: {
    draw() {
      var quotes = this.el.root.selectAll('g.quote').data(this.rows)
      quotes.exit().remove()
      quotes.enter().append('g').merge(quotes)
        .attr('class', 'quote')
        .makeLabel({
          maxWidth: 8,
          padding: {
            x: 0.5,
            y: 0.25
          },
          lineHeight: this.size.lineHeight
        })
        .tightlyPack({
          max: {
            x: this.size.w - 16,
            y: this.size
          },
          margin: {
            x: 4,
            y: 4
          }
        })

      this.score = (this.rows.length > 0
        ? Math.round(this.el.root.selectAll('g.quote.yes').size() / this.rows.length * 100)
        : 0
      )

      var height = 0
      this.el.root.selectAll('g.quote').each(function(d) {
        var box = this.getBBox()
        var translate = /translate\(([\d.]+),([\d.]+)\)/.exec(this.getAttribute('transform'))
        var y = parseFloat(translate[2])
        height = Math.max(height, Math.ceil(y + box.height))
      })
      this.size.h = height
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.atlas-regions-region {
  width: 50%;
  max-width: 20rem;
  margin-bottom: 1rem;
  @include bp-sm-up {
    width: 33.3333%;
  }
  > .score {
    line-height: 2rem;
    > .value {
      font-size: 2rem;
    }
    > .unit {
      margin-left: 0.125rem;
    }
  }
  > .draw {
    margin: 0.5rem 0 1rem;
  }
}
</style>

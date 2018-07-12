<template>
<div class="atlas-regions-region">
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

d3.selection.prototype.makeLabel = function(options) {
  this.each(function(d) {
    var root = d3.select(this)
      .classed('yes', /country|state|nation/.test(d.what + d.what_in_english))
    var el = root.append('a') // where all the content actually go
      .attr('xlink:href', d.link)
      .attr('target', '_blank')

    var rem = parseInt(root.style('font-size'))

    var offset = {
      x: options.padding.x,
      y: options.padding.y + 1 / options.lineHeight - 0.1 // put first line of text right below anchor point
    }

    var terms = d.what.split(/,\s*/).reverse()
    terms.forEach(function(term, i) {
      // text wrap: https://bl.ocks.org/mbostock/7555321
      var text = el.append('text')
        .attr('x', offset.x * rem)
        .attr('y', offset.y * options.lineHeight * rem)
      var words = term.split(/\s+/)
      var lineCount = 1
      var line = []
      var tspan = text.append('tspan')
        .attr('x', offset.x * rem)
        .attr('dy', 0)
      while(words.length > 0) {
        var word = words.shift()
        line.push(word)
        tspan.text(line.join(' '))
        if(tspan.node().getComputedTextLength() > options.maxWidth * rem) {
          line.pop()
          tspan.text(line.join(' '))
          line = [word]
          tspan = text.append('tspan')
            .attr('x', offset.x * rem)
            .attr('dy', options.lineHeight * rem)
            .text(word)
          lineCount++
        }
      }
      offset.y += lineCount
      if(i < terms.length - 1) {
        el.append('text')
          .attr('class', 'and')
          .attr('x', offset.x * rem)
          .attr('dy', offset.y * options.lineHeight * rem)
          .text('還有')
      }
      offset.y += 1
    })

    var box = el.node().getBBox() // getBoundingClientRect() perhaps?
    el.insert('rect', ':first-child')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', box.width + options.padding.x * rem * 2)
      .attr('height', box.height + options.padding.y * rem * 2)
  })
  return this
}

d3.selection.prototype.tightlyPack = function(options) {
  var nodes = this.nodes()
  var maxY = 0
  var next = {
    x: 0,
    y: 0
  }
  nodes.sort(function(a, b) {
    return a.getBBox().height - b.getBBox().height
  })
  nodes.forEach(function(node) {
    var box = node.getBBox()
    var el = d3.select(node)
    if(next.x + box.width > options.max.x) {
      next.x = 0
      next.y += maxY + options.margin.y
    }
    el.attr('transform', 'translate(' + [next.x, next.y].join(',') + ')')
    next.x += box.width + options.margin.x
    maxY = Math.max(maxY, box.height)
  })
  return this
}

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

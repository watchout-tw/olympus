<template>
<div class="line-chart" :id="config.id">
  <div class="before tcl-left-right-margin">
    <h3 class="title">{{ config.text.title }}</h3>
    <div class="paragraphs no-margin" v-html="markdown(config.text.before)"></div>
  </div>
  <div class="chart">
    <div class="you-draw">
      <div class="line"></div>
      <div class="hand"></div>
    </div>
  </div>
  <div class="after tcl-left-right-margin">
    <template v-if="submit.done">
      <div class="score">
        <div>畫的有</div>
        <div class="number">{{ score }}</div>
        <div>分像呢</div>
      </div>
      <div class="paragraphs no-margin" v-html="markdown(config.text.after)"></div>
    </template>
    <submit-button v-else :classes="['musou']" :label="'畫好了啦'" :state.sync="submit.state" :message.sync="submit.message" @click.native="onSubmit"></submit-button>
  </div>
</div>
</template>

<script>
import { knowsMarkdown } from 'watchout-common-functions/interfaces'
import SubmitButton from 'watchout-common-functions/components/button/Submit'
import * as STATES from 'watchout-common-functions/lib/states'
import * as d3 from 'd3'
import * as core from '../../lib/core'

const colors = {
  'bian-1': 'rgba(0, 255, 0, 0.25)',
  'bian-2': 'rgba(0, 255, 0, 0.35)',
  'ma-1': 'rgba(0, 0, 255, 0.25)',
  'ma-2': 'rgba(0, 0, 255, 0.35)',
  'tsai-1': 'rgba(0, 255, 0, 0.25)'
}
const presidents = {
  'bian': '陳水扁',
  'ma': '馬英九',
  'tsai': '蔡英文'
}
const UNDONE_SCORE = -1

export default {
  mixins: [knowsMarkdown],
  props: ['config'],
  data() {
    return {
      el: {},
      size: {},
      rows: {
        orig: [],
        user: [],
        comp: []
      },
      util: {
        axes: {
          x: {},
          y: {}
        },
        sequence: {
          label: {}
        }
      },
      submit: {
        state: STATES.DEFAULT,
        message: null,
        done: false
      }
    }
  },
  computed: {
    score: function() {
      var s = 0.2
      var y = s * (this.config.axes.y.max - this.config.axes.y.min)
      var n = 0
      var answered = 0
      var d = 0
      var sum = 0
      this.rows.user.forEach((row, i) => {
        if(!row.fix) {
          n = n + 1
          if(row.show) {
            answered = answered + 1
            d = Math.abs(row.y - this.rows.orig[i].y)
            sum = sum + (1 - (d > y ? y : d) / y) * 100
          }
        }
      })
      // have to finish all the points
      return n === answered ? Math.round(sum / n) : UNDONE_SCORE
    }
  },
  created() {
    const { id, compare } = this.config
    this.rows.orig = require('~/data/draw/' + id + '.json')
    this.rows.user = JSON.parse(JSON.stringify(this.rows.orig))
    this.rows.user.forEach((row, index, rows) => {
      if(row.fix && !(index + 1 < rows.length && !rows[index + 1].fix)) {
        row.show = false
      }
    })
    if(compare) {
      this.rows.comp = compare.map(compareThis =>
        require('~/data/draw/' + compareThis.id + '.json').map(row =>
          Object.assign({}, row, {show: true, fix: true}) // have to use fresh empty object
        )
      )
    }
  },
  mounted() {
    this.init()
    this.draw()
  },
  methods: {
    onSubmit: function() {
      if(this.submit.done) return

      if(this.score === UNDONE_SCORE) {
        this.submit.state = STATES.FAILED
        this.submit.message = '要畫完ㄛ'
      } else {
        this.submit.done = true

        this.rows.orig.forEach(function(row) {
          row.show = true
        })
        this.drawOrig()

        this.createSpeech()
      }
    },
    createSpeech: function() {
      const { speechTarget } = this.config
      const data = this.rows.user.filter(u => !u.fix)
      core.createLineChartSpeech(speechTarget, data)
    },
    drawComp: function(i, title) {
      this.drawPath(this.el.comp[i], this.rows.comp[i], title)
    },
    drawUser: function() {
      this.drawPath(this.el.user, this.rows.user)
    },
    drawOrig: function() {
      this.drawPath(this.el.orig, this.rows.orig)
    },
    drawPath: function(el, points, title) {
      // https://github.com/d3/d3-selection/blob/master/README.md#selection_data
      // General Update Pattern
      // select → data → exit → remove → enter → append → merge
      var self = this

      // find segments
      var segments = []
      var currentSegment = []
      for(var point of points) {
        if(!point.show) {
          if(currentSegment.length > 0) {
            segments.push(currentSegment)
          }
          currentSegment = []
        } else {
          currentSegment.push(point)
        }
      }
      if(currentSegment.length > 0) {
        segments.push(currentSegment)
      }

      // draw path
      var paths = el.selectAll('path').data(segments)
      paths.exit().remove()
      paths.enter().append('path').merge(paths).attr('d', this.util.line)

      // draw circles
      var circles = el.selectAll('circle').data(points, function(d) { return d.x })
      circles.exit().remove()
      circles.enter().append('circle').merge(circles)
        .attr('r', this.size.r)
        .attr('cx', function(d) { return self.util.axes.x.scale(d.x) })
        .attr('cy', function(d) { return self.util.axes.y.scale(d.y) })
        .classed('fix', function(d) { return d.fix })
        .classed('hide', function(d) { return !d.show })

      // draw labels
      var endpoints = segments.reduce(function(acc, cur) {
        return acc.concat([cur[0], cur[cur.length - 1]])
      }, [])
      var labels = el.selectAll('text.data').data(endpoints, function(d) { return d.x })
      labels.exit().remove()
      labels.enter().append('text').merge(labels)
        .text(function(d) { return self.util.sequence.label.format(d.y) })
        .attr('x', function(d) { return self.util.axes.x.scale(d.x) })
        .attr('y', function(d) { return self.util.axes.y.scale(d.y) - self.size.r * 2 })
        .attr('class', 'data')
        .classed('hide', function(d) { return !d.show })

      if(title) {
        var anchor = 2
        el.append('text')
          .attr('class', 'title')
          .attr('x', this.util.axes.x.scale(points[anchor].x))
          .attr('y', this.util.axes.y.scale(points[anchor].y))
          .attr('dx', 0.5 * this.size.rem)
          .attr('dy', 1 * this.size.rem)
          .text(title)
      }
    },
    init: function() {
      var size = this.size
      var util = this.util
      var config = this.config

      // calculations
      size.w = 480
      size.h = 480
      size.r = 4
      size.a = size.h / size.w
      size.p = size.r * 8

      // containers
      this.el.container = d3.select(this.$el).select('.chart')

      // x & y scale
      util.axes.x.values = this.rows.user.map(function(d) { return d.x })
      util.axes.x.scale = d3.scalePoint()
        .domain(util.axes.x.values)
        .range([size.p, size.w - size.p])
      util.axes.y.scale = d3.scaleLinear()
        .domain([config.axes.y.min, config.axes.y.max])
        .range([size.h - size.p, 0 + size.p])

      util.sequence.label.format = function(d) {
        return d3.format(config.sequence.label.formatString)(d / config.axes.y.divider)
      }

      // function for generating path between points
      util.line = d3.line()
        .x(function(d) { return util.axes.x.scale(d.x) })
        .y(function(d) { return util.axes.y.scale(d.y) })

      // x axis
      util.axes.x.axis = d3.axisBottom(util.axes.x.scale)
        .tickSize(size.h - size.p * 2)
      util.axes.x.customize = function(g) {
        g.call(util.axes.x.axis)
        g.select('.domain').remove()
        g.selectAll('.tick').each(function(d, i, nodes) {
          var tick = d3.select(this)
          tick.select('line')

          tick.selectAll('text').remove()
          var text = tick.append('g')
            .attr('transform', 'translate(' + [-util.axes.x.scale.step() / 2, size.h - size.p - size.r * 8].join(',') + ')')

          // omit year when repeat
          if(d.indexOf('/') > -1) {
            var [y, m] = d.split('/')
            var target = this.previousSibling
            while(!!target && d3.select(target).datum().indexOf('/') < 0) {
              target = target.previousSibling
            }
            if(!(!!target && d3.select(target).datum().indexOf(y) > -1)) {
              text.append('text')
                .attr('dy', 2 * size.rem)
                .text(y)
            }
            d = m
          }
          if(d % 2 === (nodes.length % 2 === 0 ? 0 : 1)) {
            return
          }
          text.append('text')
            .text(d + (!this.nextSibling ? config.axes.x.label : ''))
            .attr('dy', 1 * size.rem)
        })
      }

      // y axis
      util.axes.y.format = function(d) {
        return d3.format(config.axes.y.formatString)(d / config.axes.y.divider)
      }
      util.axes.y.axis = d3.axisRight(util.axes.y.scale)
        .tickSize(0)
        .tickValues(this.config.axes.y.ticks)
        .tickFormat(function(d) {
          // format + unit at last tick
          return util.axes.y.format(d)
        })
      util.axes.y.customize = function(g) {
        g.call(util.axes.y.axis)
        g.select('.domain').remove()
        g.selectAll('.tick > text')
          .attr('x', 0)
        g.select('.tick:last-of-type').append('text')
          .classed('unit-label', true)
          .attr('dy', -0.75 * size.rem)
          .text(config.axes.y.label)
      }
    },
    draw: function() {
      var self = this

      this.el.root = this.el.container.append('svg')
        .attr('viewBox', [0, 0, this.size.w, this.size.h].join(' '))

      this.size.rem = parseInt(this.el.root.style('font-size'))

      // draw background
      this.el.bg = this.el.root.append('g')
        .attr('class', 'bg')
        .attr('transform', 'translate(' + [-this.util.axes.x.scale.step() / 2, 0].join(',') + ')')

      var rectangles = this.el.bg.selectAll('rect').data(this.rows.user)
      rectangles.exit().remove()
      rectangles.enter().append('rect').merge(rectangles)
        .attr('x', function(d) { return self.util.axes.x.scale(d.x) })
        .attr('y', this.util.axes.y.scale(this.config.axes.y.max))
        .attr('width', this.util.axes.x.scale.step())
        .attr('height', this.util.axes.y.scale(this.config.axes.y.min) - this.util.axes.y.scale(this.config.axes.y.max))
        .attr('fill', function(d) { return colors[d.label] })

      var lastPresident = 'hui'
      this.rows.user.forEach(function(row, i, rows) {
        var [president] = row.label.split('-')
        if(president !== lastPresident) {
          self.el.bg.append('text')
            .text(presidents[president])
            .attr('class', 'president')
            .attr('x', self.util.axes.x.scale(row.x))
            .attr('y', self.util.axes.y.scale(self.config.axes.y.max))
            .attr('dx', 0.25 * self.size.rem)
            .attr('dy', 1.25 * self.size.rem)
        }
        lastPresident = president
      })

      // draw x axis
      this.el.x = this.el.root.append('g')
        .attr('class', 'axis axis-x')
        .attr('transform', 'translate(' + [0, this.size.p].join(',') + ')')
        .call(this.util.axes.x.customize)

      // draw y axis
      this.el.y = this.el.root.append('g')
        .attr('class', 'axis axis-y')
        .call(this.util.axes.y.customize)

      // make space for circles and paths
      if(this.config.compare) {
        self.el.comp = []
        this.config.compare.forEach(function(comp, i) {
          var g = self.el.root.append('g').attr('class', 'sequence comp')
          self.el.comp.push(g)
          self.drawComp(i, comp.label)
        })
      }
      this.el.user = this.el.root.append('g').attr('class', 'sequence user')
      this.el.orig = this.el.root.append('g').attr('class', 'sequence orig')

      // make callback to redraw at user input
      function redraw() {
        // remove animation
        self.el.container.select('.you-draw').remove()

        // get input position
        const m = d3.mouse(this)
        const x = m[0]
        const y = Math.max(self.size.p, Math.min(m[1], self.size.h - self.size.p))

        // find point to modify
        const start = self.util.axes.x.scale.range()[0]
        const step = self.util.axes.x.scale.step()
        var target
        for(target = 0; x > start + step * (target + 0.5); target++) {}
        if(target < self.rows.orig.length && !self.rows.orig[target].fix) {
          self.rows.user[target].y = self.util.axes.y.scale.invert(y)
          self.rows.user[target].show = true
          self.drawUser()
        }
      }

      // execute callback on click/touch/drag
      this.el.root.on('click', redraw)
      this.el.root.call(d3.drag().on('drag', redraw))

      // draw original sequence
      this.drawOrig()

      // setup animation
      var lastOrig = this.rows.orig.filter((row, i) => {
        return row.fix && i + 1 < this.rows.orig.length && !this.rows.orig[i + 1].fix
      }).pop()

      var viewport = window.innerWidth
      var zoom = viewport > this.size.w ? 1 : viewport / this.size.w
      this.el.container.select('.you-draw')
        .style('top', this.util.axes.y.scale(lastOrig.y) * zoom - 54 + 'px')
        .style('left', this.util.axes.x.scale(lastOrig.x) * zoom + 'px')
        .style('transform', 'scale(' + zoom + ')')
        .style('transform-origin', 'center left')
    }
  },
  components: {
    SubmitButton
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.line-chart {
  max-width: 30rem;
  margin: 0 auto;
  > .before {
    > .title {
      margin-bottom: 0.25rem;
    }
  }
  > .chart {
    position: relative;
    width: 100%;
    margin: 0 auto;
    @keyframes grow {
      0% { width: 0; }
      100% { width: 60px; }
    }
    @keyframes move {
      0% { transform: none; }
      100% { transform: translate(52px, -30px); }
    }
    $animation-time: 1s;
    $animation-iteration-count: infinite;

    > .you-draw {
      pointer-events: none;
      position: absolute;
      width: 120px;
      height: 120px;
      > .line {
        width: 60px;
        height: 5px;
        background-size: 20px 5px;
        background-image: linear-gradient(to right, $color-park, $color-park 50%, transparent 50%, transparent);
        transform: rotate(-30deg);
        transform-origin: center left;
        position: absolute;
        top: 50px;
        animation: grow $animation-time $animation-iteration-count;
      }
      > .hand {
        position: absolute;
        bottom: 0;
        left: -16px;
        width: 40px;
        height: 60px;
        background-image: url('/static/draw/hand.svg');
        animation: move $animation-time $animation-iteration-count;
      }
    }

    > svg {
      display: block;
      margin: 0;
      cursor: pointer;

      circle {
        fill: none;
      }
      path {
        fill: none;
      }
      text {
        font-size: 0.75rem;
        &.unit-label {
          text-anchor: start;
        }
      }
      .hide {
        visibility: hidden;
      }
      .tick {
        text {
          fill: rgba(black, 0.25);
        }
        line {
          stroke: rgba(black, 0.13);
          stroke-dasharray: 2,2;
        }
      }
      .president {
        text-anchor: start;
        font-size: 1rem;
        font-weight: bold;
        opacity: 0.25;
      }
      .sequence {
        path {
          stroke-width: 5;
          stroke-linejoin: round;
          stroke-linecap: round;
        }
        text.data {
          text-anchor: middle;
        }
        text.title {
          font-size: 0.875rem;
          text-anchor: start;
        }
        &.comp {
          path {
            stroke: rgba(black, 0.25); //rgb(89, 89, 225);
          }
        }
        &.user {
          path {
            stroke: $color-park;
          }
        }
        &.orig {
          path {
            stroke: $color-musou;
          }
        }
      }
      .axis-y {
        @include bp-sm-down {
          display: none;
        }
      }
    }
  }
  > .after {
    position: relative;

    > .score {
      text-align: center;
      font-size: 0.875rem;
      padding: 1rem 0;
      > .number {
        line-height: 1em;
        font-size: 4rem;
        font-weight: bold;
        letter-spacing: -1px;
        color: $color-musou;
        margin: 0 0.25rem;
      }
    }
    > .text {
      margin-top: 1rem;
    }
    > .submit-button {
      position: absolute;
      top: 0.5rem;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      color: white;
    }
  }
}
</style>

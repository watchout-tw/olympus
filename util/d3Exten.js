import * as d3 from 'd3'

export function centerCenter() {
  this.each(function(d) {
    let box = this.getBBox()
    let top = d.y - box.height / 2
    let left = d.x - box.width / 2
    d3.select(this)
      .attr('transform', 'translate(' + [left, top].join(',') + ')')
  })
  return this
}

export function makeLabel(options) {
  this.each(function(d) {
    let root = d3.select(this)
      .classed('yes', /country|state|nation/.test(d.data.what + d.data.what_in_english))
    let el = root.append('a') // where all the content actually go
      .attr('xlink:href', d.link)
      .attr('target', '_blank')

    let rem = parseInt(root.style('font-size'))

    let offset = {
      x: options.padding.x,
      y: options.padding.y + 1 / options.lineHeight - 0.1 // put first line of text right below anchor point
    }

    let terms = d.data.what.split(/,\s*/).reverse()
    terms.forEach(function(term, i) {
      // text wrap: https://bl.ocks.org/mbostock/7555321
      let text = el.append('text')
        .attr('x', offset.x * rem)
        .attr('y', offset.y * options.lineHeight * rem)
      let words = term.split(/\s+/)
      let lineCount = 1
      let line = []
      let tspan = text.append('tspan')
        .attr('x', offset.x * rem)
        .attr('dy', 0)
      while(words.length > 0) {
        let word = words.shift()
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

    let box = el.node().getBBox() // getBoundingClientRect() perhaps?
    el.insert('rect', ':first-child')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', box.width + options.padding.x * rem * 2)
      .attr('height', box.height + options.padding.y * rem * 2)
  })
  return this
}

export function saveSize() {
  this.each(function(d) {
    let box = this.getBBox()
    d.width = box.width
    d.height = box.height
  })
  return this
}

export function tightlyPack(options) {
  let nodes = this.nodes()
  let maxY = 0
  let next = {
    x: 0,
    y: 0
  }
  nodes.sort(function(a, b) {
    return a.getBBox().height - b.getBBox().height
  })
  nodes.forEach(function(node) {
    let box = node.getBBox()
    let el = d3.select(node)
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

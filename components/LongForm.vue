<template>
<div class="long-form" :style="project.chart.styles">
  <a :href="plotDBLink" target="_blank" class="a-block plotdb-credit font-size-smaller text-align-center">
    <span>This project is made possible by </span>
    <img class="plotdb-logo inline" :src="plotDBLogo" width="163px" style="margin: 0 0.25rem;"/>
  </a>
  <div class="loading text-align-center" v-if="isLoading">載入中，請稍候⋯</div>
  <div id="plotdb-chart"></div>
</div>
</template>

<script>
const Color = require('color')

export default {
  props: ['module', 'project'],
  data() {
    return {
      isLoading: true,
      mountingPoint: 'plotdb-chart',
      scripts: [
        'https://plotdb.com/js/pack/view.js',
        'https://plotdb.com/lib/showdown/1.5.0/index.min.js',
        'https://plotdb.com/lib/d3/3.5.12/index.min.js',
        'https://plotdb.io/lib/smooth-scroll/10.2.1/index.min.js'
      ]
    }
  },
  computed: {
    plotDBLogo() {
      let color = Color(this.project.chart.styles.backgroundColor)
      return require('~/static/plotdb/' + (color.isDark() ? 'white' : 'black') + '.png')
    },
    plotDBLink() {
      return `https://plotdb.io/v/chart/${this.project.chart.id}`
    }
  },
  mounted() {
    Promise.all(this.scripts.map(scriptURL => this.loadScript(scriptURL)))
      .then(results => {
        if(window.plotdb) {
          window.plotdb.load(this.project.chart.id, chart => {
            chart.attach(document.getElementById(this.mountingPoint), {})
            this.isLoading = false
          })
        } else {
          console.error('Where did plotDB go?')
        }
      })
      .catch(error => {
        console.error(error)
      })
  },
  methods: {
    loadScript(url) {
      return new Promise(function(resolve, reject) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = url
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.long-form {
  > .plotdb-credit {
    padding: 1rem;
  }
  > .loading {
    padding: 2rem;
  }
}
.pdb-root {
  font-size: 16px;
  max-width: 38rem;
  margin: auto;
  padding: 0 1rem 8rem;

  p {
    line-height: $line-height-default;
    &:not(:first-of-type) {
      margin-bottom: 1rem;
    }
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
    margin: auto;
    max-width: 100%;
  }
  ul.choices {
    display: block;
    margin: 1rem 0;
    padding: 0;
    text-align: center;
    > li {
      display: inline-block;
      max-width: 24em;
      margin: 0.5rem 0.25rem;
      padding: 0.5rem 1rem;
      border: 2px black solid;
      border-radius: 2px;
      font-size: 1.25rem;
      cursor: pointer;
    }
  }
  .block {
    display: none;
    &.active {
      display: block;
      margin: 2rem 0;
      padding: 2rem 0;
    }
    > h2 {
      line-height: $line-height-compact;
    }
  }
  h1 {
    font-size: 2.5rem;
    line-height: $line-height-compact;
    margin: 1rem 0;
  }
}
</style>

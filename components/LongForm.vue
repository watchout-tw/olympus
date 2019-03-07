<template>
<div class="long-form" :style="project.chart.styles">
  <a :href="plotDBLink" target="_blank" class="a-block plotdb-credit font-size-small text-align-center">
    <span>This project is made possible by </span>
    <img class="plotdb-logo inline" :src="plotDBLogo" width="163px" style="margin: 0 0.25rem;" />
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
        let script = document.createElement('script')
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
  h1 {
    font-size: 2.5rem;
    line-height: $line-height-compact;
    margin: 1rem 0;
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 1rem 0;
    padding: 0;

    > li {
      @include appearance-button;
      flex-basis: 100%;
      margin: 0.5rem 0;
      height: auto;
      font-size: 1.125rem;
      line-height: $line-height-tight;
      text-align: center;
      cursor: pointer;

      @include bp-sm-up {
        flex-basis: calc(50% - 1rem);
        margin: 0.5rem;
        &:only-child {
          flex-basis: calc(100% - 1rem);
        }
      }
      &:hover {
        line-height: $line-height-tight;
      }
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
  ol {
    padding-left: 0;
    list-style: none;
    > li {
      padding: 1rem 0 2rem;
      margin-bottom: 2rem;
      &:first-child {
        padding-top: 0;
      }

      > ul.choices {
        > li {
          &.active {
            background: rgba($color-watchout, 0.85);
          }
        }
      }
    }
  }
  hr {
    border: none;
    margin: 4rem;
  }
  #final-score-label {
    margin: 0.25rem 0;
    text-align: center;
  }
  #final-score-label + p {
    font-size: 6rem;
    line-height: 1;
    letter-spacing: -0.25rem;
    text-align: center;
    color: $color-musou;
  }
  // exam possible results
  .result {
    display: none;
    margin: 1rem 0;
    font-size: 1.25rem;
    line-height: 1.5;

    &.active {
      display: block;
      font-size: 1.5rem;
    }
  }
  #answer-sheet-title {
    margin: 2rem 0 1rem;
  }
  #answer-sheet-title + ol {
    padding-left: 1.5rem;
    list-style: decimal;
  }
  #answer-sheet-title + ol > li {
    margin: 0;
    padding: 0;
  }
}
</style>

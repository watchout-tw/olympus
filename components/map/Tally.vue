<template>
<div class="atlas atlas-tally tcl-container">
  <div class="atlas-tally-count tcl-panel half-width tcl-left-right-margin" v-for="result in results" :key="'tally-' + result.id">
    <div class="score">
      <span class="value">{{ result.score }}</span>
      <span class="unit">%</span>
    </div>
    <div class="font-size-tiny">{{ totalCount }}篇裡有{{ result.rows.length }}篇</div>
    <div>稱台灣為{{ result.option.label }}</div>
  </div>
</div>
</template>

<script>
export default {
  props: ['rows', 'config'],
  computed: {
    totalCount() {
      return this.rows.length
    },
    results() {
      const keys = this.config.options.map(option => option.value)
      return keys.reduce((results, id) => {
        let option = this.config.options.find(option => option.value === id)
        let rows = this.rows.filter(row => {
          let testString = this.config.keys.map(key => key.substring(0, 5) === 'data.' ? row.data[key.substring(5)] : row[key]).join(' ')
          return new RegExp(option.matchPattern).test(testString)
        })
        let score = Math.round(rows.length / this.totalCount * 100)
        results.push({ id, option, rows, score })
        return results
      }, [])
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.atlas-tally {
  > .atlas-tally-count {
    > .score {
      line-height: 1;
      > .value {
        font-size: 4rem;
      }
      > .unit {
        margin-left: 0.125rem;
      }
    }
  }
}

</style>

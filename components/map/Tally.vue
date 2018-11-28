<template>
<div class="atlas d-flex flex-wrap justify-content-around">
  <div class="atlas-tally-count" v-for="obj in data" :key="'tally-'+obj.id">
    <div class="score">
      <span class="value">{{ obj.score }}</span>
      <span class="unit">%</span>
    </div>
    <div class="fraction">{{ total }}篇裡有{{ obj.rows.length }}篇</div>
    <div class="name">稱台灣為{{ obj.count.name }}</div>
  </div>
</div>
</template>

<script>
export default {
  props: ['raw', 'tally'],
  computed: {
    total() {
      return this.raw.length
    },
    data() {
      const keys = Object.keys(this.tally)
      let obj, count, rows, score
      return keys.reduce((result, id) => {
        count = this.tally[id]
        rows = this.rows(count.pattern)
        score = Math.round(rows.length / this.total * 100)

        obj = {id, count, rows, score}
        result.push(obj)
        return result
      }, [])
    }
  },
  methods: {
    rows(pattern) {
      return this.raw.filter(row => this.condition(pattern, row.what + row.what_in_english))
    },
    condition(pattern, str) {
      const regex = new RegExp(pattern)
      return regex.test(str)
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.atlas-tally-count {
  margin: 1rem 0;
  width: 50%;
  @include bp-sm-up {
    width: auto;
  }
  > .score {
    line-height: 1;
    > .value {
      font-size: 4rem;
    }
    > .unit {
      margin-left: 0.125rem;
    }
  }
  > .fraction {
    font-size: 0.85rem;
  }
}
</style>

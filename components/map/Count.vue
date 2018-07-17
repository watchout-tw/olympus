<template>
<div class="atlas-tally-count">
  <div class="score">
    <span class="value">{{ score }}</span>
    <span class="unit">%</span>
  </div>
  <div class="fraction">{{ total }}篇裡有{{ rows.length }}篇</div>
  <div class="name">稱台灣為{{ count.name }}</div>
</div>
</template>

<script>
export default {
  props: ['raw', 'count'],
  computed: {
    total() {
      return this.raw.length
    },
    rows() {
      const { pattern } = this.count
      return this.raw.filter(row => this.condition(pattern, row.what + row.what_in_english))
    },
    score() {
      return Math.round(this.rows.length / this.total * 100)
    }
  },
  methods: {
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

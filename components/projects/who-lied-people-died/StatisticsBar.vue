<template>
  <div :class="statisticsBarClass">
    <div class="statisticsBar-wrapper">
      <div class="title">
        <img src="/projects/WhoLiedPeopleDied/icon-dialog.png">
        <h2>武漢肺炎 疫情時光機</h2>
      </div>
      <div class="case">
        <img src="/projects/WhoLiedPeopleDied/icon-statistics.png">
        <div>{{ showDate }}</div>
        <div>全球確診數</div>
        <div>{{ showCases }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['fixed', 'cases', 'date'],
  computed: {
    statisticsBarClass() {
      const res = {}
      if(this.fixed) {
        res['statistics-bar-fixed-top'] = true
      } else {
        res['statistics-bar'] = true
      }
      return res
    },
    showCases() {
      if(!this.cases) return '？'
      return (this.cases !== '--' &&
              this.cases !== '？' &&
              this.cases !== '')
        ? this.cases : '？' // eslint-disable-line multiline-ternary
    },
    showDate() {
      let d = this.date
      if(!d) return ''
      d = d.toString()
      if(d === '') return ''

      return `${d[0]}${d[1]}${d[2]}${d[3]} / ${d[4]}${d[5]} / ${d[6]}${d[7]}`
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.statistics-bar, .statistics-bar-fixed-top{
  width: 100%;
  background-color: $color-dark;
}
.statistics-bar-fixed-top {
  position: fixed;
  top: -1px;
  z-index: 901;
}

.statisticsBar-wrapper {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  padding: 1rem 0;
  line-height: 2rem;

  .title {
    display: none;
  }

  .case {
    display: flex;
  }

  img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.625rem;
    }
  div {
    margin-right: 0.625rem;
  }
  div:last-child {
    margin-right: 0;
  }
}

@media only screen and (min-width:$size-md) {
  .statistics-bar, .statistics-bar-fixed-top{
    .title {
      display: flex;
    }
  }
}
</style>

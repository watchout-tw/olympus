<template>
  <div :class="statisticsBarClass">
    <div class="title">
      <img src="/projects/WhoLiedPeopleDied/icon-dialog.png">
      <h2>武漢肺炎 疫情時光機</h2>
    </div>
    <div class="case">
      <img src="/projects/WhoLiedPeopleDied/icon-statistics.png">
      <div>確診數</div>
      <div>{{ cases }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['fixed', 'cases'],
  computed: {
    statisticsBarClass() {
      const res = {}
      if(this.fixed) {
        res['statistics-bar-fixed-top'] = true
      } else {
        res['statistics-bar'] = true
      }
      return res
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.statistics-bar, .statistics-bar-fixed-top{
  width: 100%;
  padding:1rem 5%;
  background-color: $color-dark;
  display: flex;
  justify-content: space-between;
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
.statistics-bar-fixed-top {
  position: fixed;
  top: 0;
  z-index: 901;
}

@media only screen and (min-width:$size-md) {
  .statistics-bar, .statistics-bar-fixed-top{
    .title {
      display: flex;
    }
  }
}
@media only screen and (min-width:$bp-xl) {
  .statistics-bar, .statistics-bar-fixed-top{
     padding:1rem 10%;
  }
}

</style>

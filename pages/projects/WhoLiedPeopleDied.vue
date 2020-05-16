<template>
<div class="wrapper">
  <Banner />
  <div :class="statisticsBarClass">
    <img src="/projects/WhoLiedPeopleDied/icon-statistics.png">
    <div>確診數</div>
    <div>700,486</div>
  </div>
  <Timeline :timelineData="timelineData" />
  <ToBeContinued />
  <Share />
  <Support />
  <Team />
  <LastUpdate time="2020/4/24 13:13" />
</div>
</template>
<script>
import Banner from '~/components/projects/who-lied-people-died/Banner'
import Timeline from '~/components/projects/who-lied-people-died/Timeline'
import ToBeContinued from '~/components/projects/who-lied-people-died/ToBeContinued'
import Share from '~/components/projects/who-lied-people-died/Share'
import Support from '~/components/projects/who-lied-people-died/Support'
import Team from '~/components/projects/who-lied-people-died/Team'
import LastUpdate from '~/components/projects/who-lied-people-died/LastUpdate'
import timelineJson from '~/data/projects/who-lied-people-died/timeline.json'
export default {
  components: {
    Banner,
    Timeline,
    ToBeContinued,
    Share,
    Support,
    Team,
    LastUpdate
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
        scrolled: 0
      },
      isMobile: false,
      timelineData: timelineJson.data
    }
  },
  created() {
    if(process.client) {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
    console.log('REF :', this.$refs)
  },
  mounted() {
    console.log('$el.offsetHeight', this.$el.offsetHeight)
  },
  destroyed() {
    if(process.client) {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }
  },
  computed: {
    statisticsBarClass() {
      const res = {}
      console.log('this.window.scrolled', this.window.scrolled)
      if(this.window.scrolled > this.window.height - 200) {
        res['statistics-bar-fixed-top'] = true
      } else {
        res['statistics-bar'] = true
      }
      return res
    }
  },
  methods: {
    checkIsMobile() {
      this.isMobile = (this.window.width < 768)
    },
    handleScroll() {
      this.window.scrolled = window.scrollY
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.checkIsMobile()
    }
  }
}
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
@import '~/assets/_projects-who-lied-people-died.scss';

.fix-bottom {
  position: fixed;
  bottom: 0;
}

.show {
  opacity: 1.0;
}

.statistics-bar, .statistics-bar-fixed-top {
  width: 100%;
  padding-left: 5%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: $color-black;
  display: flex;
  line-height: 2rem;
  img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.625rem;
    }
  div {
    margin-right: 0.625rem;
  }
}
.statistics-bar-fixed-top {
  position: fixed;
  top: 0;
  z-index: 901;
}

@media only screen and (min-width:$bp-md) {
}

@media only screen and (min-width:$bp-xl) {
}

</style>

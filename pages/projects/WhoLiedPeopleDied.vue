<template>
<div class="wrapper">
  <Banner />
  <StatisticsBar :fixed="ifStatisticsBarFixed" cases="499,00" />
  <Timeline :timelineData="timelineData" />
  <ToBeContinued />
  <Share />
  <Support />
  <Team />
  <LastUpdate :time="lastUpdateTime" />
</div>
</template>
<script>
import Banner from '~/components/projects/who-lied-people-died/Banner'
import StatisticsBar from '~/components/projects/who-lied-people-died/StatisticsBar'
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
    StatisticsBar,
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
      lastUpdateTime: timelineJson.lastUpdateTime,
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
    ifStatisticsBarFixed() {
      console.log('this.window.scrolled', this.window.scrolled)
      if(this.window.scrolled > this.window.height - 100) return true
      return false
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

@media only screen and (min-width:$bp-md) {
}

@media only screen and (min-width:$bp-xl) {
}

</style>

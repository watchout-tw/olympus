<template>
<div class="wrapper">
  <Banner />
  <StatisticsBar :fixed="ifStatisticsBarFixed" :cases="spotlight.currentCase" />
  <Timeline :timelineData="timelineData" v-on:timelinerefs="getTimeLineRefs" />
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
      timelineData: timelineJson.data,
      spotlight: {
        currentCase: null,
        last: null,
        queue: []
      }
    }
  },
  created() {
    if(process.client) {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if(process.client) {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }
  },
  computed: {
    ifStatisticsBarFixed() {
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
      if(this.spotlight.queue.length > 0) {
        const targetEvent = this.spotlight.queue[0]
        const showPoint = this.window.height * 0.4
        if(this.window.scrolled > (targetEvent.offsetTop - showPoint)) {
          targetEvent.node.classList.add('timeline-card-active')
          if(this.spotlight.last) {
            this.spotlight.last.node.classList.remove('timeline-card-active')
          }
          this.spotlight.last = targetEvent
          this.spotlight.queue.shift()
          this.spotlight.currentCase = targetEvent.case
        }
      }
    },
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.checkIsMobile()
    },
    getTimeLineRefs(refs) {
      const events = refs.map(node => {
        const card = node.getElementsByClassName('timeline-card')
        if(card.length === 0) return null
        if(card[0].getElementsByClassName('timeline-card-case').length === 0) return null
        return {
          offsetTop: card[0].offsetTop,
          case: (card[0].getElementsByClassName('timeline-card-case')[0].innerHTML).split('：')[1],
          node: card[0]
        }
      }).filter(node => node !== null)
      this.spotlight.queue = events
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

<template>
<div class="wrapper">
  <Banner />
  <StatisticsBar :fixed="ifStatisticsBarFixed" :cases="spotlight.currentCase" :date="spotlight.date" />
  <Timeline :timelineData="timelineData" @timelinerefs="getTimeLineRefs" />
  <ToBeContinued />
  <Share :url="meta.url" />
  <Support />
  <Team />
  <LastUpdate :time="lastUpdateTime" />
</div>
</template>
<script>
import findLast from 'lodash/findLast'
import { getBaseURL } from 'watchout-common-functions/lib/watchout'
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
        date: null,
        queue: []
      },
      meta: {
        coverUrl: `${getBaseURL('musou')}projects/WhoLiedPeopleDied/banner-1440.jpg`,
        url: `${getBaseURL('musou')}projects/WhoLiedPeopleDied`,
        title: '武漢肺炎疫情時光機：回到疫情開端／沃草國會無雙',
        description: '武漢肺炎（COVID-19）自2019年底從中國武漢爆發，全球陷入重大病毒危機之中，至今確診數已突破百萬例。跟著沃草將時間倒回武漢肺炎爆發之初，隨著疫情推展，看看台灣、世界衛生組織（WHO）、中國和其他各國是如何防疫？'
      }
    }
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:creator', name: 'twitter:creator', content: '@watchoutTW' },
        { hid: 'og:url', name: 'og:url', content: this.meta.url },
        { hid: 'og:title', name: 'og:title', content: this.meta.title },
        { hid: 'og:description', name: 'og:description', content: this.meta.description },
        { hid: 'og:image', name: 'og:image', content: this.meta.coverUrl }
      ]
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
        const showPointStart = this.window.height * 0.5
        const targetEvent = findLast(this.spotlight.queue, item => {
          return this.window.scrolled > item.offsetTop - showPointStart
        })
        if(targetEvent) {
          targetEvent.node.classList.add('timeline-card-active')
          if(this.spotlight.last) {
            if(this.spotlight.last.offsetTop !== targetEvent.offsetTop) {
              this.spotlight.last.node.classList.remove('timeline-card-active')
            }
          }
          this.spotlight.last = targetEvent
          this.spotlight.currentCase = targetEvent.case
          this.spotlight.date = targetEvent.date
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
        if(card[0].getElementsByClassName('timeline-world-case').length === 0) return null
        return {
          offsetTop: card[0].offsetTop,
          case: (card[0].getElementsByClassName('timeline-world-case')[0].innerHTML),
          date: (card[0].getElementsByClassName('timeline-date')[0].innerHTML),
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

<template>
  <div class="timeline">
    <template v-for="(timeline, sessionIndex) in timelineData">
      <div class="timeline-session" :key="'timeline-session' + sessionIndex">
        <TimelineHead :text="timeline.head" />
        <div v-for="(card, cardIndex) in timeline.cards" ref="timelines" :key="'timeline-' + cardIndex">
          <TimelineTime v-if="card.type === 'TIME'" :card="card" />
          <TimelineCard v-else-if="card.type === 'EVENT'" :card="card" />
          <TimelineWarning v-else-if="card.type === 'WARN'" :card="card" />
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import TimelineHead from '~/components/projects/who-lied-people-died/TimelineHead'
import TimelineTime from '~/components/projects/who-lied-people-died/TimelineTime'
import TimelineCard from '~/components/projects/who-lied-people-died/TimelineCard'
import TimelineWarning from '~/components/projects/who-lied-people-died/TimelineWarning'

export default {
  props: ['timelineData'],
  components: {
    TimelineHead,
    TimelineTime,
    TimelineCard,
    TimelineWarning
  },
  mounted() {
    this.$emit('timelinerefs', this.$refs.timelines)
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.timeline {
  width: 90%;
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 1080px;

  &-session {
    margin-top: 4rem;
    background-color: $color-gray;
    border-radius: 20px;
    border: solid 1px $color-border;
    width: 100%;
    padding-bottom: 2.5rem;
  }
}

@media only screen and (min-width:$size-md) {
  .timeline {
    &-title {
      display: flex;
    }
  }
}
</style>

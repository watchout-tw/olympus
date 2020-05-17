<template>
  <div class="timeline">
    <template v-for="(timeline, sessionIndex) in timelineData">
      <div class="timeline-session" :key="'timeline-session' + sessionIndex">
        <TimelineHead :text="timeline.head" />
        <template v-for="(card, cardIndex) in timeline.cards">
          <!-- timeline-time -->
          <TimelineTime v-if="card.type === 'TIME'" :key="'timeline-card' + cardIndex" :card="card" />
          <TimelineCard v-else-if="card.type === 'EVENT'" :key="'timeline-card' + cardIndex" :card="card" />
          <TimelineWarning v-else-if="card.type === 'WARN'" :key="'timeline-card' + cardIndex" :card="card" />
        </template>
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

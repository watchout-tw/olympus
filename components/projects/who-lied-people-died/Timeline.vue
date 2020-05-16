<template>
  <div class="timeline">
    <div class="timeline-title">
      <img src="/projects/WhoLiedPeopleDied/icon-dialog.png">
      <h2>武漢肺炎 疫情時光機</h2>
    </div>
    <template v-for="(timeline, sessionIndex) in timelineData">
      <div class="timeline-session" :key="'timeline-session' + sessionIndex">
        <TimelineHead :text="timeline.head" />
        <template v-for="(card, cardIndex) in timeline.cards">
          <!-- timeline-time -->
          <TimelineTime v-if="card.type === 'TIME'" :key="'timeline-card' + cardIndex" :card="card" />
          <TimelineCard v-else-if="card.type === 'CARD'" :key="'timeline-card' + cardIndex" :card="card" />
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
  padding: 0 5%;
  margin-top: 3rem;
  &-title {
    display: none;
    justify-content: center;
    color: $color-green;
    margin-bottom: 1rem;
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.625rem;
    }
  }
  &-session {
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

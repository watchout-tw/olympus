<template>
   <div class="timeline-time">{{ showDate }}</div>
</template>
<script>
export default {
  props: ['card'],
  computed: {
    showDate() {
      const { date } = this.card
      const year = date.substring(0, 4)
      const month = date.substring(4, 6)
      const day = date.substring(6, 8)
      return `${year} / ${month} / ${day}`
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.timeline-time{
  margin-top: 2.5rem;
  margin-bottom: 0.8rem;
  text-align: center;
  widows: 100%;
}
</style>

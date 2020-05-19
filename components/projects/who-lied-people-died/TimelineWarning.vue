<template>
   <div class="timeline-warn">
     <div class="timeline-warn-time">
       <img src="/projects/WhoLiedPeopleDied/icon-warning.png">
       <p>{{ showDate }}</p>
     </div>
     <div class="timeline-warn-text">
       {{ card.textHan }}
     </div>
   </div>
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
.timeline-warn{
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  padding: 1rem;
  background-color: $color-border;
  color: $color-red;
  p {
    margin-bottom: 0.5rem;
  }
  &-time{
    display: flex;
    justify-content: center;
    img{
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 1rem;
      animation: pulse 1s infinite ease-in;

      @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5}
          100% { transform: scale(1.5); opacity: 0 }
      }

    }
  }
}
</style>

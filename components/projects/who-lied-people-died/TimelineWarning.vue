<template>
   <div class="timeline-warn">
     <div class="timeline-warn-time">
       <img src="/projects/WhoLiedPeopleDied/icon-warning.png">
       <p>{{ card.date }}</p>
     </div>
     <div class="timeline-warn-text">
       {{ card.text }}
     </div>
   </div>
</template>
<script>
export default {
  props: ['card']
}
</script>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.timeline-warn{
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  widows: 100%;
  padding: 1rem;
  background-color: $color-border;
  color: $color-red;
  &-time{
    display: flex;
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

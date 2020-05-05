<template>
   <div class="timeline-time">{{ card.text }}</div>
</template>
<script>
export default {
  props: ['card']
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

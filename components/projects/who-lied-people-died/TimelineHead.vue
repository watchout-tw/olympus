<template>
  <div class="timeline-head">
    <img src="/projects/WhoLiedPeopleDied/kusakun.png">
    <p>{{ text.textHan }}</p>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.timeline-head{
  text-align: center;
  color: $color-black;
  background-color: white;
  border-radius: 20px 20px 0 0;
  padding: 1rem;

  img {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }
}
</style>

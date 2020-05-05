<template>
  <div class="scroller"></div>
</template>
<script>
export default {
  props: ['card']
}
</script>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.scroller {
  object-fit: contain;
  border-radius: 23px;
  border: solid 2px #46beb6;
  background-color: #46beb6;
  background-image: url('/projects/WhoLiedPeopleDied/icon-arrow.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 60%;
  cursor: pointer;
  position: fixed;
  width: 2rem;
  height: 2rem;
  right: 5%;
  bottom: 1.5rem;
  z-index: 901;
}

.scroller:hover {
  background-color: #22978f;
}

.scroller:active {
  background-color: #22978f;
}

@media only screen and (min-width:$bp-md) {
  .scroller {
    width: 4rem;
    height: 4rem;
    right: 3.75rem;
    bottom: 3.75rem;
  }
}
</style>

<template>
  <div class="to-be-continued"><div>未完待續</div></div>
</template>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.to-be-continued{
  position: relative;
  height: 1;
  border-top: white dashed 0.1rem;
  margin-top: 1rem;
  width: 85%;
  max-width: 1080px;
  margin: 3rem auto;
  div {
    position: absolute;
    text-align: center;
    width: 7rem;
    background-color: $color-black;
    bottom: -0.6rem;
    left: 50%;
    margin-left: -3.5rem;
  }
}
</style>

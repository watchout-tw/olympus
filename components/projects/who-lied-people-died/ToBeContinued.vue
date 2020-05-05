<template>
  <div class="to-be-continued"><div>未完待續</div></div>
</template>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.to-be-continued{
  position: relative;
  height: 1;
  border-top: white dashed 0.2rem;
  margin-top: 1rem;
  width: 90%;
  margin: 3rem 5%;
  div {
    position: absolute;
    text-align: center;
    width: 7rem;
    background-color: $color-black;
    bottom: -0.8rem;
    left: 50%;
    margin-left: -3.5rem;
  }
}
</style>

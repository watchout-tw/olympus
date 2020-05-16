<template>
  <div class="br">
    <div class="title">認同請分享</div>
    <div class="icons">
      <div class="icon icon-twitter"></div>
      <div class="icon icon-line"></div>
      <div class="icon icon-facebook"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.br{
  padding: 2rem 2rem;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 2.5rem;
  border-radius: 20px;
  border: solid 1px $color-border;
  text-align: center;
  .title {
    margin: 0 auto;
    margin-bottom: 1rem;
    color: $text-green-light;
    padding-bottom: 5px;
    border-bottom: $text-green-light solid 1px;
    width: 6.5rem;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    max-width: 14rem;
    margin: 0 auto;
  }

  .icon {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 60%;
    cursor: pointer;
    width: 3.5rem;
    height: 3.5rem;
    object-fit: contain;
    border-radius: 3.5rem;
    border: solid 2px #46beb6;

    &:hover {
      background-color: $text-green;
    }
  }

  .icon-facebook {
    background-image: url('/projects/WhoLiedPeopleDied/icon-facebook.png');
  }
  .icon-line {
    background-image: url('/projects/WhoLiedPeopleDied/icon-line.png');
  }
  .icon-twitter {
    background-image: url('/projects/WhoLiedPeopleDied/icon-twitter.png');
  }

}

</style>

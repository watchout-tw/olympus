<template>
  <div class="banner">
    <div class="banner-info-box">
      <h1>武漢肺炎 疫情時光機</h1>
      <p>跟著沃草將時間倒回2019年底，隨著武漢肺炎的疫情推展，台灣、世界衛生組織（WHO）、中國和其他各國是如何應對？</p>
    </div>
    <div class="banner-read-more">
      <div>往下看更多</div>
      <img src="/projects/WhoLiedPeopleDied/icon-arrow.png">
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/projects/WhoLiedPeopleDied/banner-667.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5%;
  color:white;

  &-info-box {
    position: absolute;
    bottom: 5rem;
    background-color: $color-black;
    border-radius: 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.38);
    width: 90%;
    padding: 25px 20px;

    h1 {
      margin-bottom: 0.625rem;
      color: $text-green;
    }
  }

  &-read-more {
    position: absolute;
    width: 90%;
    text-align: center;
    bottom: 1rem;
    img {
      margin: 0 auto;
      margin-top: 1.2rem;
      width: 2.375rem;
      height: auto;
      animation: animate-arrow 1s infinite;
    }

    @keyframes animate-arrow {
        0% {
            transform: translate(0px, 0px);
        }
        50% {
            transform: translate(0px, -0.5rem);
        }
        100% {
            transform: translate(0px, 0px);
        }
    }
  }
}

@media only screen and (min-width:$size-md) {
  .banner {
    background-image: url('/projects/WhoLiedPeopleDied/banner-1440.jpg');
  }
}

@media only screen and (min-width:$size-xl) {
  .banner {
    background-image: url('/projects/WhoLiedPeopleDied/banner-1440.jpg');
  }
}

</style>

<template>
  <div class="banner">
    <div class="banner-info-box">
      <div class="banner-info-box-item">
        <h1>武漢肺炎 疫情時光機</h1>
        <p>跟著沃草將時間倒回2019年底，隨著武漢肺炎的疫情推展，台灣、世界衛生組織（WHO）、中國和其他各國是如何應對？</p>
      </div>
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
  background-position: center -60px;
  background-repeat: no-repeat;
  background-size: cover;
  color:white;

  &-info-box {
    position: absolute;
    display: flex;
    align-items: flex-end;
    bottom: 0;
    height: 20rem;
    width: 100%;
    background: linear-gradient(0deg, #242424 0%, rgba(15, 15, 15, 0.84) 71%, rgba(0, 0, 0, 0) 100%);
    &-item {
      width: 100%;
      padding: 0 5%;
      h1, p {
        display: block;
      }
      h1 {
        text-align: center;
        margin-bottom: 0.625rem;
        color: $text-green;
      }
    }
  }

  &-read-more {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 11rem;
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
    background-image: url('/projects/WhoLiedPeopleDied/banner-768.jpg');
    background-position: top center;

    &-info-box {
      &-item {
        h1, p {
          display: block;
          text-align: left;
        }
      }
    }
  }

}

@media only screen and (min-width:$size-xl) {
  .banner {
    background-image: url('/projects/WhoLiedPeopleDied/banner-1920.jpg');
    background-position: top center;
    &-info-box {
      &-item {
        padding: 0 10%;
      }
    }
  }
}

</style>

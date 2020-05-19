<template>
<div class="banner">
  <div class="banner-mask">
    <div class="banner-wrapper">
      <div class="banner-info-box">
        <div class="banner-read-more">
          <div>往下看更多</div>
          <img src="/projects/WhoLiedPeopleDied/icon-arrow.png">
        </div>
        <div class="banner-info-box-item">
          <h1>武漢肺炎 疫情時光機</h1>
          <p>跟著沃草將時間倒回2019年底，隨著武漢肺炎的疫情推展，台灣、世界衛生組織（WHO）、中國和其他各國是如何應對？</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.banner {
  display: flex;
  flex-direction: cloumn;
  align-items: flex-end;
  width: 100%;
  height: calc(100vh - 64px);
  background-image: url('/projects/WhoLiedPeopleDied/banner-667.jpg');
  background-position: center -60px;
  background-repeat: no-repeat;
  background-size: cover;
  color:white;

  &-mask {
    flex: 1;
    width: 100%;
    height: 50vh;
    background: linear-gradient(0deg, #242424 0%, rgba(15, 15, 15, 0.84) 50%, rgba(0, 0, 0, 0) 97%);
    display: flex;
    flex-direction: cloumn;
    align-items: flex-end;
  }
  &-wrapper {
    width: 90%;
    margin: 0 auto;
    max-width: 1080px;
    flex: 1;
  }
  &-info-box {
    width: 90%;
    margin: 0 auto;
    &-item {
      width: 100%;
      h1, p {
        display: block;
      }
      h1 {
        text-align: center;
        margin-bottom: 0.625rem;
        color: $text-green-light;
      }
    }
  }

  &-read-more {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
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
      width: 80%;
      padding-bottom: 4.2rem;
      &-item {
        h1, p {
          text-align: left;
          display: block;
        }
      }
    }
  }
}

@media only screen and (min-width:$size-lg) {
  .banner {
    background-image: url('/projects/WhoLiedPeopleDied/banner-1440.jpg');
    background-position: top center;

    &-info-box {
      &-item {
        h1, p {
          text-align: left;
          display: block;
        }
      }
    }
  }
}

@media only screen and (min-width:$size-xl) {
  .banner {
    background-image: url('/projects/WhoLiedPeopleDied/banner-1920.jpg');
    background-position: top center;
  }
}

</style>

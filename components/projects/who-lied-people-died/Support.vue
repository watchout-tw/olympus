<template>
    <div class="support">
      <h2 class="title">定期定額募集中</h2>
      <p>每月 199 元，留下守護台灣的力量！</p>
      <a href="https://watchout.backme.tw/checkout/332/7818" target="_blank">
        <div class="support-btn"><h2>支持沃草</h2></div>
      </a>
    </div>
</template>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.support{
  background-color: $color-gray;
  padding: 4rem 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  border-radius: 20px;
  border: solid 1px $color-border;
  text-align: center;
  .title {
    margin-bottom: 0.5rem;
  }

  &-btn {
    margin: 0 auto;
    margin-top: 2.2rem;
    border-radius: 42px;
    border: solid 2px $text-green;
    background-image: linear-gradient(100deg, #46beb6 6%, #4695be 99%);
    padding: 0.8rem;
    text-align: center;
    cursor: pointer;
    max-width: 16rem;
  }

  &-btn:hover, &-btn:active {
    background: #46beb6;
  }
}
</style>

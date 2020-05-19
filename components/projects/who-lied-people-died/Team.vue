<template>
  <div class="team-wrapper">
    <div class="team">
      <div class="title">製作團隊</div>
      <div class="row">
        <div class="row-left" style="padding-top: 0;">編輯企劃</div>
        <div class="row-right" style="padding-top: 0;">林梵謹、洪國鈞、邱琦錦、廖昱涵</div>
      </div>
      <div class="row">
        <div class="row-left">網頁設計</div>
        <div class="row-right">呂佳蓉、沈豪政、林梵謹、黃亦涵</div>
      </div>
      <div class="row">
        <div class="row-left">前端工程</div>
        <div class="row-right">張凱翔</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.team-wrapper{
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  margin-top: 2.5rem;
  margin-bottom: 4rem;
  text-align: left;
  .team {
    margin: 0 auto;
    width: 90%;
  }
  .title {
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 1.2px;
    text-align: left;
    color: white;
    margin-bottom: 1.5rem;
  }
  .row {
    display: flex;
    &-left {
      padding-top: 1rem;
      padding-right: 1.5rem;
      border-right: 1px solid white;
      width: 30%;
      max-width: 8rem;
      min-width: 6rem;
    }
    &-right {
      padding-top: 1rem;
      padding-left: 1.5rem;
    }
  }
}
@media only screen and (min-width:$size-md) {
  .br{
    padding-left: 3.75rem;
    .row {
      &-left {
        width: auto;
      }
      &-right {
        width: auto;
      }
    }
  }
}
</style>

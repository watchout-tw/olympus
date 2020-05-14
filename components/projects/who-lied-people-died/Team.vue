<template>
  <div class="br">
    <div class="title">製作團隊</div>
    <div class="row">
      <div class="row-left" style="padding-top: 0;">編輯企劃</div>
      <div class="row-right" style="padding-top: 0;">林梵謹、洪國鈞、邱琦錦</div>
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
</template>
<style scoped lang="scss">
.br{
  padding-left: 3.75rem;
  margin-top: 2.5rem;
  margin-bottom: 4rem;
  text-align: left;
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
    }
    &-right {
      padding-top: 1rem;
      padding-left: 1.5rem;
    }
  }

}

</style>

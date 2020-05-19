<template>
  <div class="last-update-wrapper">
    <div class="last-update">
      <span>最後更新時間：</span>
    <span>{{ time }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['time']
}
</script>
<style scoped lang="scss">
.last-update-wrapper {
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  text-align: left;
  color: #c5c5c5;
  .last-update {
    width: 90%;
    margin: 0 auto;
  }
}
</style>

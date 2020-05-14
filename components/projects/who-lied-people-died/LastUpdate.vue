<template>
  <div class="br">
    <span>最後更新時間：</span>
    <span>{{ time }}</span>
  </div>
</template>
<script>
export default {
  props: ['time']
}
</script>
<style scoped lang="scss">
.br{
  padding-left: 3.75rem;
  text-align: left;
  color: #c5c5c5;
}
</style>

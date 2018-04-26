<template>
<div class="error">
  <div class="content center-self with-left-right-margin center-child">
    <h1 class="large">{{ error.statusCode }}</h1>
    <p>在什麼都有的肥沃草原裡，也是有遍尋不著的東西。</p>
    <nuxt-link to="/" class="a-text">找回初衷</nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss">
.error {
  > .content {
    > h1 {
      margin: 2rem 0 0;
      letter-spacing: -1px;
    }
  }
}
</style>

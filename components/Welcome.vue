<template>
<div class="welcome">歡迎回來，{{ activePersona ? activePersona.name : '沒有人' }}。</div>
</template>

<script>
import { knowsAuth } from 'watchout-common-functions/interfaces'
export default {
  mixins: [knowsAuth]
}
</script>

<style lang="scss">
.welcome {
  padding: 2rem 0;
  text-align: center;
}

</style>

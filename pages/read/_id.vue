<template>
<div class="page read">
  <article>This is an article to read.</article>
</div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

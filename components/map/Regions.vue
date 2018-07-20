<template>
<div class="atlas d-flex flex-wrap">
  <region v-for="(region, id) of regions" :raw="raw" :region="region" :debug="debug" :key="'region'+id"></region>
</div>
</template>

<script>
import Region from '~/components/map/Region'

export default {
  props: ['regions', 'raw', 'debug'],
  components: {
    Region
  }
}
</script>

<style lang="scss">
</style>

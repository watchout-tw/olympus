<template>
<div class="atlas atlas-regions tcl-container">
  <region v-for="option of config.options" :rows="rows" :group-by="config.groupBy" :option="option" :debug="debug" :key="'region-' + option.value" />
  <div class="tcl-panel half-width"></div>
  <div class="tcl-panel half-width"></div>
  <div class="tcl-panel half-width"></div>
</div>
</template>

<script>
import Region from '~/components/map/Region'

export default {
  props: ['rows', 'config', 'debug'],
  components: {
    Region
  }
}
</script>

<style lang="scss">
</style>

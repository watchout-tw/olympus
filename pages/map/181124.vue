<template>
<div class="page">
  <map-box :markers="reports" />
</div>
</template>

<script>
import reports from '~/data/map/2018-election-international-coverage.json'
import MapBox from '~/components/MapBox'

export default {
  data() {
    let mapID = 'map-' + new Date().getTime()
    return {
      mapID,
      reports
    }
  },
  components: {
    MapBox
  }
}
</script>

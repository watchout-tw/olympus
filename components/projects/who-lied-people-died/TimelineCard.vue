<template>
  <div :class="cardClass">
    <h2>{{ card.area }}</h2>
    <p>{{ card.text }}</p>
    <div v-if="ifWHO" class="timeline-card-case">確診數：{{ card.case ? card.case : '--' }}</div>
  </div>
</template>
<script>
export default {
  props: ['card'],
  computed: {
    ifWHO() {
      const { area } = this.card
      return (area !== 'WHO')
    },
    cardClass() {
      const { area, postion } = this.card
      let resClass = {
        'timeline-card': true
      }
      switch(area) {
        case '中國':
          resClass['timeline-card-China'] = true
          break
        case '台灣':
          resClass['timeline-card-Taiwan'] = true
          break
        case 'WHO':
          resClass['timeline-card-WHO'] = true
          break
        default:
          resClass['timeline-card-world'] = true
          break
      }

      if(postion === 'right') {
        resClass['timeline-card-right'] = true
      } else {
        resClass['timeline-card-left'] = true
      }
      return resClass
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/_projects-who-lied-people-died.scss';
.timeline-card{
  padding: 1rem;
  width: 95%;
  position: relative;
  margin-bottom: 1rem;
  &-left {
    border-radius: 0px 20px 20px 0;
  }
  &-right {
    margin-left: 5%;
    border-radius: 20px 0px 0px 20px;
  }
  &-China {
    background: $color-red;
  }
  &-Taiwan {
    background: $color-green;
  }
  &-WHO {
    background: $color-blue;
  }
  &-World {
    background: $color-yellow;
  }
  &-case {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    opacity: 0.65;
  }
}
</style>

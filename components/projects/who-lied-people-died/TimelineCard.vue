<template>
  <div :class="cardClass">
    <h2>{{ card.countryName }}</h2>
    <p>{{ card.textHan }}</p>
    <div v-if="ifWHO" class="timeline-card-case">確診數：{{ showCase }}</div>
  </div>
</template>
<script>
export default {
  props: ['card'],
  computed: {
    ifWHO() {
      const { areaType } = this.card
      return (areaType !== 'WHO')
    },
    cardClass() {
      const { areaType, postion } = this.card
      let resClass = {
        'timeline-card': true
      }
      resClass[`timeline-card-${areaType}`] = true
      resClass[`timeline-card-${postion}`] = true
      return resClass
    },
    showCase() {
      const { counrtyCase } = this.card
      return (counrtyCase !== '?' &&
              counrtyCase !== '-' &&
              counrtyCase !== '')
        ? counrtyCase : '--'
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
  &-CHINA {
    background: $color-red;
  }
  &-TAIWAN {
    background: $color-green;
  }
  &-WHO {
    background: $color-blue;
  }
  &-WORLD {
    background: $color-yellow;
  }
  &-case {
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    opacity: 0.65;
  }

  &-active {
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.86);
  }
}
</style>

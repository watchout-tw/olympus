<template>
  <div :class="cardClass">
    <h2>{{ card.countryName }}</h2>
    <p>{{ card.textHan }}</p>
    <div :class="caseClass">確診數：{{ showCountryCase }}</div>
    <div class="timeline-world-case" style="display:none">{{ card.worldCase }}</div>
    <div class="timeline-date" style="display:none">{{ card.date }}</div>
  </div>
</template>
<script>
export default {
  props: ['card'],
  computed: {
    caseClass() {
      const { areaType, countryName } = this.card
      let resClass = {
        'timeline-card-case': true
      }
      if(areaType === 'WHO' || countryName === '歐盟') {
        resClass['timeline-card-hide'] = true
      }
      return resClass
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
    showCountryCase() {
      const { counrtyCase } = this.card
      return (counrtyCase !== '?' &&
              counrtyCase !== '-' &&
              counrtyCase !== '')
        ? counrtyCase : '？'
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
  margin-bottom: 2rem;
  transition: box-shadow 0.3s ease-in-out;
  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0rem;
  }

  &-left {
    margin-left: 1px;
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
    border: solid 3px #ffffff;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.86);
  }

  &-hide {
    display: none;
  }
}
</style>

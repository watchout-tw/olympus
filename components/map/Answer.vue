<template>
<div class="answer graph">
  <div class="textgroup">
    <div class="title"><h2>{{ project.graphs[answerType].title }}</h2></div>
    <div class="description" v-html="markdown(project.graphs[answerType].description)"></div>
  </div>
  <component :is="childComponent.component" v-bind="childComponent.props"></component>
</div>
</template>

<script>
import knowsMarkdown from 'watchout-common-functions/interfaces/knowsMarkdown'
import Counts from '~/components/map/Counts'
import Regions from '~/components/map/Regions'
import World from '~/components/map/World'

export default {
  mixins: [knowsMarkdown],
  props: ['answerType', 'project', 'raw'],
  computed: {
    childComponent() {
      const { answerType, project, raw } = this
      let component = null
      let props = {}
      switch(answerType) {
        case 'tally':
          component = 'Counts'
          props = {tally: project.tally, raw}
          break
        case 'regions':
          component = 'Regions'
          props = {regions: project.regions, raw, debug: project.debug}
          break
        case 'world':
          component = 'World'
          props = {raw, debug: project.debug}
          break
      }
      return {component, props}
    }
  },
  components: {
    Counts,
    Regions,
    World
  }
}
</script>

<style lang="scss">
</style>

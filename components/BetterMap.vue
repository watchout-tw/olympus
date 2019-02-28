<template>
<div class="better-map">
  <div class="section" v-for="section of project.sections" :key="section.id">
    <template v-if="section.type === 'pop-quiz'">
      <pop-quiz :data="section" :done.sync="popQuizIsDone" />
    </template>
    <template v-else-if="showSectionAfterPopQuiz">
      <div class="tcl-container" v-if="section.title && section.content">
        <div class="tcl-panel tcl-left-right-margin with-top-bottom-margin">
          <h2>{{ section.title }}</h2>
          <div class="paragraphs last" v-html="section.content"></div>
        </div>
        <div class="tcl-panel"></div>
      </div>
      <template v-if="section.type === 'tally'">
        <tally :rows="data" :config="section.config" />
      </template>
      <template v-else-if="section.type === 'regions'">
          <regions :rows="data" :config="section.config" :debug="debug" />
      </template>
      <template v-else-if="section.type === 'world'">
        <world :rows="data" :debug="debug" />
      </template>
      <template v-else-if="section.type === 'map-box'">
        <map-box :markers="data" :config="section.config" :shareURL="shareURL" :id="project.id" />
      </template>
    </template>
  </div>
  <div class="closing tcl-container" v-if="showSectionAfterPopQuiz">
    <template v-if="project.conclusion">
      <div class="tcl-panel tcl-left-right-margin with-top-bottom-margin">
        <h2>{{ project.conclusion.title }}</h2>
        <div class="paragraphs" v-html="markdown(project.conclusion.content)"></div>
      </div>
      <div class="tcl-panel"></div>
    </template>
    <template v-if="project.callForAction">
      <div class="tcl-panel tcl-left-right-margin with-top-bottom-margin">
        <h2>{{ project.callForAction.title }}</h2>
        <div class="paragraphs a-text-parent" v-html="markdown(project.callForAction.content)"></div>
      </div>
      <div class="tcl-panel"></div>
    </template>
  </div>
</div>
</template>

<script>
import { knowsMarkdown, knowsWatchout } from 'watchout-common-functions/interfaces'
import PopQuiz from '~/components/better-map/PopQuiz'
import Tally from '~/components/map/Tally'
import Regions from '~/components/map/Regions'
import World from '~/components/map/World'
import MapBox from '~/components/better-map/MapBox'

export default {
  mixins: [knowsMarkdown, knowsWatchout],
  props: ['module', 'project', 'shareURL'],
  data() {
    let data = []
    if(this.project.hasOwnProperty('dataSource')) {
      data = require('~/data/map/' + this.project.dataSource)
      data = data.map(entry => {
        let dataKeys = Object.keys(entry).filter(key => key.substring(0, 5) === 'data.')
        if(dataKeys.length > 0) {
          return Object.assign(entry, {
            data: Object.assign(...dataKeys.map(key => ({ [key.substring(5)]: entry[key] })))
          })
        } else {
          return entry
        }
      })
    }
    // keep flattened data.* attributes because MapBox does not support data-driven styling with nested properties
    return {
      debug: false,
      popQuizIsDone: false,
      data
    }
  },
  computed: {
    hasPopQuiz() {
      return this.project.sections.filter(section => section.type === 'pop-quiz').length > 0
    },
    showSectionAfterPopQuiz() {
      return !this.hasPopQuiz || (this.hasPopQuiz && this.popQuizIsDone)
    }
  },
  components: {
    PopQuiz,
    Tally,
    Regions,
    World,
    MapBox
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.better-map {
  > .section {
    margin: 2rem 0 1rem;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>

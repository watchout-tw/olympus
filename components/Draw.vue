<template>
<div class="draw">
  <div class="opening tcl-container">
    <div class="content tcl-panel with-top-bottom-margin with-double-top-margin tcl-left-right-margin">
      <hgroup>
        <h2 v-html="spacingOptimizer(module.title)"></h2>
        <h1 v-html="spacingOptimizer(doc.title)"></h1>
      </hgroup>
      <div class="paragraphs last a-text-parent" v-html="markdown(doc.description)"></div>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div class="tcl-container">
    <div class="tcl-panel tcl-left-right-margin with-top-bottom-margin">
      <re-captcha :token.sync="crToken" :tokenSource.sync="crTokenSource" />
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div class="charts tcl-container">
    <div class="tcl-panel with-top-bottom-margin with-double-top-margin chart-container" v-for="chartConfig in charts" :key="chartConfig.id">
      <line-chart :submittingChartID.sync="submittingChartID" :config="chartConfig" :token="crToken" :tokenSource="crTokenSource"></line-chart>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div class="conclusion tcl-container margin-top-quad margin-bottom-double">
    <div class="tcl-panel tcl-left-right-margin">
      <div class="before-conclusion">{{ project.beforeConclusion }}</div>
      <h2>{{ project.conclusion.title }}</h2>
      <div class="paragraphs last a-text-parent" v-html="markdown(project.conclusion.description)"></div>
    </div>
    <div class="tcl-panel"></div>
  </div>
</div>
</template>

<script>
import { knowsAuth, knowsBunko, knowsCoralReef, knowsMarkdown } from 'watchout-common-functions/interfaces'
import ReCaptcha from 'watchout-common-functions/components/ReCaptcha'
import LineChart from '~/components/draw/LineChart'

export default {
  mixins: [knowsAuth, knowsBunko, knowsCoralReef, knowsMarkdown],
  props: ['module', 'project', 'doc'],
  data() {
    return {
      submittingChartID: null
    }
  },
  computed: {
    charts() {
      let charts = this.project.charts
      let hasIndex = charts.filter(chart => chart.hasOwnProperty('index')).length === charts.length // index must be present in all charts
      if(hasIndex) {
        charts.sort((a, b) => a.index - b.index)
      }
      return charts
    }
  },
  components: {
    ReCaptcha,
    LineChart
  }
}
</script>

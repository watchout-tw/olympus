<template>
<div class="draw">
  <div class="opening tcl-container">
    <div class="tcl-panel full-width with-top-bottom-margin with-double-top-margin tcl-left-right-margin">
      <hgroup>
        <h2>{{ module.title }}</h2>
        <h1>{{ project.title }}</h1>
      </hgroup>
      <div class="paragraphs last default-width a-text-parent" v-html="markdown(project.description)"></div>
    </div>
  </div>
  <div class="charts tcl-container">
    <re-captcha v-if="useReCAPTCHA" :verified.sync="verified" :token.sync="token"></re-captcha>
    <div class="tcl-panel with-top-bottom-margin with-double-top-margin chart-container" v-for="config in project.graphs" :key="config.id">
      <line-chart :submittingChartID.sync="submittingChartID" :config="config" :verified="verified" :useReCAPTCHA="useReCAPTCHA" :token="token"></line-chart>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div class="conclusion tcl-container">
    <div class="tcl-panel full-width tcl-left-right-margin">
      <div class="before-conclusion">{{ project.beforeConclusion }}</div>
      <h2>{{ project.conclusion.title }}</h2>
      <div class="paragraphs default-width a-text-parent" v-html="markdown(project.conclusion.description)"></div>
    </div>
  </div>
</div>
</template>


<script>
import { knowsMarkdown, knowsAuth } from 'watchout-common-functions/interfaces'
import ReCaptcha from 'watchout-common-functions/components/ReCAPTCHA'
import LineChart from './draw/LineChart'

export default {
  mixins: [knowsMarkdown, knowsAuth],
  props: ['module', 'project'],
  data() {
    return {
      useReCAPTCHA: false,
      verified: false,
      token: null,
      submittingChartID: ''
    }
  },
  mounted() {
    const token = this.getTokenCookie()
    this.token = token

    const loggedIn = !!token
    this.verified = loggedIn
    this.useReCAPTCHA = !loggedIn
  },
  components: {
    ReCaptcha,
    LineChart
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.draw {
  > .conclusion {
    margin-top: 4rem;
  }
}
</style>

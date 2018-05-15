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
    <re-captcha :verified.sync="verified" :token.sync="token" :callback="createSpeech"></re-captcha>
    <div class="tcl-panel with-top-bottom-margin with-double-top-margin chart-container" v-for="config in project.graphs" :key="config.id">
      <line-chart :speechData.sync="speechData" :config="config" :verified="verified" @submitCallback="createSpeech"></line-chart>
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
import * as coralreef from 'watchout-common-functions/lib/coralreef'
import ReCaptcha from '~/components/common/ReCaptcha'
import LineChart from './draw/LineChart'

export default {
  mixins: [knowsMarkdown, knowsAuth],
  props: ['module', 'project'],
  data() {
    return {
      useReCAPTCHA: true,
      verified: false,
      token: null,
      speechData: {}
    }
  },
  mounted() {
    const token = this.getTokenCookie()
    this.token = token

    const loggedIn = !!token
    this.verified = loggedIn
    this.useReCAPTCHA = !loggedIn
  },
  methods: {
    createSpeech() {
      const { speechData, token, useReCAPTCHA } = this
      coralreef.createSpeech(speechData, token, useReCAPTCHA)
    }
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

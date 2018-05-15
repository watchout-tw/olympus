<template>
<div class="draw">
  <div class="opening tcl-container">
    <div class="tcl-panel with-top-bottom-margin with-double-top-margin tcl-left-right-margin">
      <hgroup>
        <h2>{{ module.title }}</h2>
        <h1>{{ project.title }}</h1>
      </hgroup>
      <div class="paragraphs last a-text-parent" v-html="markdown(project.description)"></div>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <no-ssr><div v-if="!isCitizen" class="disclaimer tcl-container font-size-smaller secondary-text">
    <div class="recaptcha tcl-panel">
      <img :src="require('watchout-common-assets/images/attributions/recaptcha.svg')" />
      <span><a class="a-text" @click.prevent="addModal({ id: 'auth', joinOrLogin: 'login' })">按這裡登入</a>，你就不用接受reCAPTCHA的挑戰。</span>
    </div>
    <div class="tcl-panel"></div>
  </div></no-ssr>
  <re-captcha v-if="useReCAPTCHA" :verified.sync="verified" :token.sync="token"></re-captcha>
  <div class="charts tcl-container">
    <div class="tcl-panel with-top-bottom-margin with-double-top-margin chart-container" v-for="chartConfig in project.charts" :key="chartConfig.id">
      <line-chart :submittingChartID.sync="submittingChartID" :verified.sync="verified" :config="chartConfig" :useReCAPTCHA="useReCAPTCHA" :token="token"></line-chart>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div class="conclusion tcl-container">
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
import { knowsAuth, knowsMarkdown, knowsWindowManagement } from 'watchout-common-functions/interfaces'
import ReCaptcha from 'watchout-common-functions/components/ReCaptcha'
import LineChart from './draw/LineChart'

export default {
  mixins: [knowsAuth, knowsMarkdown, knowsWindowManagement],
  props: ['module', 'project'],
  data() {
    return {
      useReCAPTCHA: false,
      verified: false,
      token: null,
      submittingChartID: null
    }
  },
  mounted() {
    this.updateStatuses()
  },
  watch: {
    isCitizen() {
      this.updateStatuses()
    }
  },
  methods: {
    updateStatuses() {
      this.token = this.getTokenCookie()
      this.verified = this.isCitizen
      this.useReCAPTCHA = !this.isCitizen
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
  > .disclaimer {
    > .recaptcha {
      display: flex;
      align-items: center;
      > img {
        width: 60px;
        flex-grow: 0;
      }
    }
  }
  > .conclusion {
    margin: 4rem 0 2rem;
  }
}
</style>

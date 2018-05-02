<template>
<article class="draw">
  <header>
    <div class="text textgroup">
      <hgroup>
        <h2>{{ module.title }}</h2>
        <h1>{{ project.title }}</h1>
      </hgroup>
      <div class="description" v-html="markdown(project.description)"></div>
    </div>
  </header>
  <section class="graphs">
    <line-chart v-for="config in graphs" :key="config.id" :config="config"></line-chart>
  </section>
  <section class="bridge">畫完了，然後呢？</section>
  <section class="conclusion textgroup">
    <h2 class="title">{{ conclusion.title }}</h2>
    <div class="description a-text-only" v-html="markdown(conclusion.description)"></div>
  </section>
</article>
</template>


<script>
import { knowsMarkdown } from 'watchout-common-functions/interfaces'
import LineChart from './draw/LineChart'

export default {
  mixins: [knowsMarkdown],
  props: ['module', 'project'],
  data() {
    const { graphs, conclusion, authorship } = this.project
    return { graphs, conclusion, authorship }
  },
  components: {
    LineChart
  }
}
</script>
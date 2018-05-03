<template>
<article>
  <header>
    <div>
      <hgroup>
        <h2>{{ module.title }}</h2>
        <h1>{{ project.title }}</h1>
      </hgroup>
      <div v-html="markdown(project.description)"></div>
    </div>
  </header>
  <section>
    <line-chart v-for="config in graphs" :key="config.id" :config="config"></line-chart>
  </section>
  <section>畫完了，然後呢？</section>
  <section>
    <h2>{{ conclusion.title }}</h2>
    <div v-html="markdown(conclusion.description)"></div>
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
    const { graphs, conclusion } = this.project
    return { graphs, conclusion }
  },
  components: {
    LineChart
  }
}
</script>
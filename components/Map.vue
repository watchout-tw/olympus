<template>
<article class="map">
  <section class="question">
    <div class="introduction textgroup" v-html="markdown(project.question.introduction)"></div>
    <div class="content">
      <blockquote>Taiwan will be the first <em class="blank" v-html="interactionSelectedOption"></em> in Asia to legalize same-sex marriage.</blockquote>
      <p><span>翻譯：台灣會是亞洲第一個同性婚姻合法化的</span><em class="blank" v-html="interactionSelectedOption"></em></p>
      <div class="interaction" :class="project.interaction.type">
        <ul class="list-unstyled d-flex flex-wrap">
          <li v-for="(option, index) in project.interaction.options" :id="'interaction-option-' + option.name" :key="option.name" @click="interactionSelectOption($event, index)" class="d-flex flex-row" :class="{selected: project.interaction.selection == index}"><div class="index">{{ project.circledDigits[index + 1] }}</div><div class="value">{{ option.name }}</div></li>
        </ul>
        <button class="musou" @click="interactionSubmit">{{ project.question.go }}</button>
      </div>
    </div>
    <div class="explanation textgroup" :class="project.interaction.done ? 'visible' : 'hidden'" v-html="markdown(project.question.conclusion)"></div>
  </section>
  <section class="answers">
    <div class="reminder" :class="project.interaction.done ? 'd-none' : 'd-block'">{{ project.reminder.description }}</div>
    <div class="answer graph" :class="project.interaction.done ? 'visible' : 'hidden'">
      <div class="textgroup">
        <div class="title"><h2>{{ project.graphs.tally.title }}</h2></div>
        <div class="description" v-html="markdown(project.graphs.tally.description)"></div>
      </div>
      <div class="atlas atlas-tally d-flex flex-wrap justify-content-around">
        <count v-for="(count, id) of project.tally" :raw="raw" :count="count" :key="'tally-count'+id"></count>
      </div>
    </div>
    <div class="answer graph" :class="project.interaction.done ? 'visible' : 'hidden'">
      <div class="textgroup">
        <div class="title"><h2>{{ project.graphs.regions.title }}</h2></div>
        <div class="description" v-html="markdown(project.graphs.regions.description)"></div>
      </div>
      <div class="atlas atlas-regions d-flex flex-wrap">
        <region v-for="(region, id) of project.regions" :raw="raw" :region="region" :debug="project.debug" :key="id"></region>
      </div>
    </div>
    <div class="answer graph" :class="project.interaction.done ? 'visible' : 'hidden'">
      <div class="textgroup">
        <div class="title"><h2>{{ project.graphs.world.title }}</h2></div>
        <div class="description" v-html="markdown(project.graphs.world.description)"></div>
      </div>
      <world :raw="raw" :debug="project.debug"></world>
    </div>
    <div class="answer conclusion" :class="project.interaction.done ? 'visible' : 'hidden'">
      <div class="textgroup">
        <div class="title"><h2>{{ project.conclusion.title }}</h2></div>
        <div class="description a-text-only" v-html="markdown(project.conclusion.description)"></div>
      </div>
    </div>
  </section>
  <section class="call">
    <div class="textgroup">
      <div class="title"><h2>{{ project.call_for_action.title }}</h2></div>
      <div class="description a-text-only" v-html="markdown(project.call_for_action.description)"></div>
    </div>
  </section>
</article>
</template>

<script>
import knowsMarkdown from 'watchout-common-functions/interfaces/knowsMarkdown'
import Count from '~/components/map/Count'
import Region from '~/components/map/Region'
import World from '~/components/map/World'

export default {
  mixins: [knowsMarkdown],
  props: ['project', 'module'],
  computed: {
    interactionSelectedOption() {
      const { interaction } = this.project
      return interaction.selection > -1 ? interaction.options[interaction.selection].name : '　　'
    }
  },
  data() {
    return {
      raw: []
    }
  },
  mounted() {
    this.raw = require('~/data/map/' + this.project.dataSource)

    // update text inside markdown
    const data = {
      'data-tally-total': this.raw.length,
      'data-title': this.project.title
    }
    for(let key in data) {
      let es = document.getElementsByClassName(key)
      for(let e of es) {
        e.innerText = data[key]
      }
    }
  },
  methods: {
    interactionSelectOption(event, selectionIndex) {
      if(!this.project.interaction.done) {
        this.project.interaction.selection = selectionIndex
      }
    },
    interactionSubmit(event) {
      const { interaction } = this.project
      if(!interaction.done && interaction.selection > -1) {
        this.project.interaction.done = true
      }
    }
  },
  components: {
    Count,
    Region,
    World
  }
}
</script>

<style lang="scss">
</style>

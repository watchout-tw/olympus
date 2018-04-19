<template>
<div class="page project">
  <header>
    <h2 class="small"><nuxt-link :to="{ name: 'moduleSlug', params: { moduleSlug: module.id }}" class="a-text">{{ module.title }}</nuxt-link></h2>
    <h1 class="small">{{ project.title }}</h1>
  </header>
  <div class="credit">
    <div class="authorship">
      <div class="item" v-for="item of project.authorship" :key="item.job">
        <div class="job">{{ item.job }}</div>
        <div class="person" v-for="person of item.people" :key="person">{{ person }}</div>
      </div>
    </div>
    <div class="date">{{ project.date }}</div>
    <ul class="references font-size-smaller" v-if="project.references && project.references.length > 0">
      <li class="item paragraphs no-margin a-text-parent" v-for="item of project.references" v-html="markdown(item)"></li>
    </ul>
  </div>
</div>
</template>

<script>
import { projects, modules } from '~/config'
import { knowsMarkdown } from 'watchout-common-functions/interfaces'

export default {
  mixins: [knowsMarkdown],
  async asyncData({ params }) {
    let project = projects.find(project => project.id === params.projectSlug)
    let module = modules.find(module => module.id === params.moduleSlug)

    return {
      project,
      module
    }
  }
}
</script>

<style lang="scss">
.page.project {
  > .credit {
    > .authorship {
      > .item {
        display: flex;
        > .job {
          flex-basis: 4rem;
          margin-right: 1rem;
        }
        > .person {
          margin-right: 1rem;
        }
      }
    }
    > .references {
      list-style: disc;
      padding-left: 2em;
    }
  }
}
</style>

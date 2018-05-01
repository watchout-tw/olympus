<template>
<div class="page project" :style="pageStyles">
  <div class="main">
    <template v-if="project.module === 'swipe'">
      <swipe :module="module" :project="project"></swipe>
    </template>
    <template v-else>
      <div class="not-available" style="margin: 1rem;">技術升級中，需要多一點點時間。</div>
    </template>
  </div>
  <header>
    <hgroup>
      <h2 class="small"><nuxt-link :to="{ name: 'moduleSlug', params: { moduleSlug: module.id }}" class="a-text">{{ module.title }}</nuxt-link></h2>
      <h1 class="small">{{ project.title }}</h1>
    </hgroup>
    <div class="credit secondary-text">
      <div class="authorship">
        <div class="item" v-for="item of project.authorship" :key="item.job">
          <div class="job">{{ item.job }}</div>
          <div class="person" v-for="person of item.people" :key="person">{{ person }}</div>
        </div>
      </div>
      <div class="date">{{ project.date }}</div>
    </div>
    <div class="references" v-if="project.references && project.references.length > 0">
      <div class="section-title with-underline small"><span>參考資料</span></div>
      <ul class="items font-size-smaller">
        <li class="item paragraphs no-margin a-text-parent" v-for="item of project.references" v-html="markdown(item)"></li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import * as info from '~/data/info'
import { generateMeta } from 'watchout-common-functions/functions'
import { projects, modules } from '~/config'
import { knowsMarkdown } from 'watchout-common-functions/interfaces'
import Swipe from '~/components/Swipe'

export default {
  mixins: [knowsMarkdown],
  async asyncData({ params }) {
    let project = projects.find(project => project.id === params.projectSlug)
    let module = modules.find(module => module.id === params.moduleSlug)

    return {
      project,
      module
    }
  },
  head() {
    let pageTitle = info.L_SINGLE_BRACKET + this.project.title + info.R_SINGLE_BRACKET + info.SITE_TITLE
    let pageDescription = this.project.description
    let pageCover = require('~/static/' + this.project.image)

    return {
      title: pageTitle,
      meta: generateMeta(pageTitle, pageDescription, pageCover)
    }
  },
  computed: {
    pageStyles() {
      return this.project.page && this.project.page.styles ? this.project.page.styles : {}
    }
  },
  components: {
    Swipe
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.page.project {
  > .main {
  }
  > header {
    margin: 1rem;
    > hgroup {
      > h1 {
        margin: 0.25rem 0;
      }
    }
    > .credit {
      font-size: 0.875rem;
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
    }
    > .references {
      margin-top: 1rem;
      > .section-title {
        margin-bottom: 0.25rem;
      }
      > .items {
        list-style: disc;
        padding-left: 2em;
      }
    }
  }
}
</style>

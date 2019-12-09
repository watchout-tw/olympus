<template>
<div class="page project" :style="pageStyles">
  <div class="main">
    <template v-if="project.module === 'swipe'">
      <swipe :module="module" :project="project" :shareURL="shareURL" />
    </template>
    <template v-else-if="['quiz', 'role-play'].includes(project.module)">
      <better-long-form :module="module" :project="project" :doc="doc" />
    </template>
    <template v-else-if="project.module === 'draw'">
      <draw :module="module" :project="project" :doc="doc" />
    </template>
    <template v-else-if="project.module === 'journey'">
      <journey :module="module" :project="project" />
    </template>
    <template v-else-if="project.module === 'map'">
      <better-map :module="module" :project="project" :shareURL="shareURL" />
    </template>
    <template v-else-if="project.module === 'categorized-browser'">
      <categorized-browser :module="module" :project="project" :shareURL="shareURL" />
    </template>
    <template v-else>
      <div class="not-available margin-double text-align-center">技術升級中，需要多一點點時間。</div>
    </template>
  </div>
  <div class="share margin-top-bottom-double">
    <div class="section-title with-underline text-align-center margin-top-bottom-single"><span>認同請分享</span></div>
    <share-to-platforms :url="shareURL" />
  </div>
  <div class="tcl-container margin-top-bottom-double">
    <div class="tcl-panel tcl-left-right-margin">
      <doc-header :doc="doc" titleSize="small" :description="true" :cachedAuthors="cachedAuthors" />
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div class="references-container tcl-container" v-if="project.references && project.references.length > 0">
    <div class="references tcl-panel tcl-left-right-margin">
      <h4 class="margin-top-bottom-4">參考資料</h4>
      <ul class="items font-size-small">
        <li class="item paragraphs no-margin a-text-parent" v-for="(item, index) of project.references" v-html="markdown(item)" :key="index"></li>
      </ul>
    </div>
    <div class="tcl-panel"></div>
  </div>
</div>
</template>

<script>
import * as info from '~/data/info'
import { projects, modules } from '~/config'
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsBunko, knowsFSCache, knowsMarkdown, knowsWatchout } from 'watchout-common-functions/interfaces'
import Swipe from '~/components/Swipe'
import Draw from '~/components/Draw'
import BetterLongForm from '~/components/BetterLongForm'
import Journey from '~/components/Journey'
import BetterMap from '~/components/BetterMap'
import CategorizedBrowser from '~/components/CategorizedBrowser'
import ShareToPlatforms from 'watchout-common-functions/components/ShareToPlatforms'
import DocHeader from 'watchout-common-functions/components/comp/DocHeader'

export default {
  mixins: [knowsBunko, knowsFSCache, knowsMarkdown, knowsWatchout],
  validate({ params }) {
    const module = modules.find(module => module.id === params.moduleSlug)
    const project = projects.find(project => project.id === params.projectSlug)
    return !!module && !!project
  },
  async asyncData({ params, error }) {
    let module = modules.find(module => module.id === params.moduleSlug)
    let project = projects.find(project => project.id === params.projectSlug)

    let projectSlug = params.moduleSlug + '/' + params.projectSlug
    let doc = await firestore.bunko.getProjectBySlug(projectSlug)
    if(!doc) {
      error({ statusCode: 404 })
      return
    }
    return {
      module,
      project,
      doc
    }
  },
  head() {
    let pageTitle = this.doc.title + info.SEPARATOR + info.SITE_TITLE
    let pageDescription = this.doc.description
    let pageCover = this.doc.image
    if(typeof this.project.image === 'object') {
      let image = this.project.image.default
      let path = this.project.image.pathTemplate
      let spots = path.match(/{[0-9]+}/g)
      let pathIsValid = spots.length === this.project.image.replacements.length
      for(let i = 0; pathIsValid && i < this.project.image.replacements.length; i++) {
        let replacementIsSuccessful = false
        let replacement = this.project.image.replacements[i]
        let needle = `{${i + 1}}`
        if(path.indexOf(needle) > -1) { // {n} exists in path
          let val = this.$route.query[replacement.key]
          if(val && val.match(replacement.regexp)) {
            path = path.replace(needle, val)
            replacementIsSuccessful = true
          }
        }
        pathIsValid = pathIsValid && replacementIsSuccessful
      }
      if(pathIsValid) {
        image = path
      }
      pageCover = require('~/static/' + image)
    }

    return {
      title: pageTitle,
      meta: this.generateMeta('musou', pageTitle, pageDescription, pageCover)
    }
  },
  computed: {
    pageStyles() {
      return this.project.page && this.project.page.styles ? this.project.page.styles : {}
    },
    shareURL() {
      return this.getMusouProjectURL(this.module.id, this.project.id)
    }
  },
  components: {
    Swipe,
    Draw,
    BetterLongForm,
    Journey,
    BetterMap,
    CategorizedBrowser,
    ShareToPlatforms,
    DocHeader
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.page.project {
  > .references-container {
    > .references {
      > .items {
        list-style: disc;
        padding-left: 2em;
      }
    }
  }
}
</style>

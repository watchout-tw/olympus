<template>
<div class="page project" :style="pageStyles">
  <div class="main">
    <template v-if="project.module === 'swipe'">
      <swipe :module="module" :project="project" :shareURL="shareURL" />
    </template>
    <template v-else-if="['quiz', 'role-play'].includes(project.module)">
      <better-long-form :module="module" :project="project" :doc="doc" @updateShareURL="updateShareURL" />
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
  <div class="translation margin-top-bottom-double" v-if="project.hasTranslation">
    <div class="section-title with-underline text-align-center margin-top-bottom-single"><span>{{ $t('message.switchLanguage') }}</span></div>
    <div class="tags text-align-center">
      <a v-if="!isInTB" class="input button flat" :href="getTranslationURL('tb')">臺文 Tâi-bûn</a>
      <a v-if="!isInEN" class="input button flat" :href="getTranslationURL('en')">English</a>
      <a v-if="!isInZH" class="input button flat" :href="getTranslationURL()">中文</a>
    </div>
  </div>
  <div class="share margin-top-bottom-double">
    <div class="section-title with-underline text-align-center margin-top-bottom-single"><span>{{ $t('message.share') }}</span></div>
    <share-to-platforms :url="shareURL" />
  </div>
  <!-- 只有 project config 有給定 show: false 才隱藏-->
  <div class="tcl-container margin-top-bottom-double" v-if="!project.docHeader || project.docHeader.show">
    <div class="tcl-panel tcl-left-right-margin">
      <doc-header :doc="doc" titleSize="small" :description="true" :cachedAuthors="cachedAuthors" />
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div class="references-container tcl-container" v-if="project.references && project.references.length > 0">
    <div class="references tcl-panel tcl-left-right-margin">
      <h4 class="margin-top-bottom-4">{{ $t('message.references') }}</h4>
      <ul class="items font-size-small">
        <li class="item paragraphs no-margin a-text-parent" v-for="(item, index) of project.references" v-html="markdown($t(item))" :key="index"></li>
      </ul>
    </div>
    <div class="tcl-panel"></div>
  </div>
</div>
</template>

<script>
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsBunko, knowsFSCache, knowsMarkdown, knowsWatchout } from 'watchout-common-functions/interfaces'
import ShareToPlatforms from 'watchout-common-functions/components/ShareToPlatforms'
import DocHeader from 'watchout-common-functions/components/comp/DocHeader'
import BetterLongForm from 'watchout-common-functions/components/BetterLongForm'
import BetterMap from 'watchout-common-functions/components/BetterMap'
import * as info from '~/data/info'
import { projects, modules } from '~/config'
import Swipe from '~/components/Swipe'
import Draw from '~/components/Draw'
import Journey from '~/components/Journey'
import CategorizedBrowser from '~/components/CategorizedBrowser'

export default {
  mixins: [knowsBunko, knowsFSCache, knowsMarkdown, knowsWatchout],
  validate({ params }) {
    const module = modules.find(module => module.id === params.moduleSlug)
    const project = projects.find(project => project.id === params.projectSlug)
    return !!module && !!project
  },
  async asyncData({ params, route, error }) {
    console.log('Current Path:', route.path)
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
      projectSlug,
      doc,
      shareURL: ''
    }
  },
  head() {
    let pageTitle
    let pageDescription
    if(this.$router.currentRoute.path.substring(0, 3).includes('en')) {
      pageTitle = this.doc.titleEN + info.SEPARATOR + this.$t(info.COMPANY_TITLE)
      pageDescription = this.doc.descriptionEN
    } else if(this.$router.currentRoute.path.substring(0, 3).includes('tb')) {
      pageTitle = this.doc.titleTB + info.SEPARATOR + this.$t(info.COMPANY_TITLE)
      pageDescription = this.doc.descriptionTB
    } else {
      pageTitle = this.doc.title + info.SEPARATOR + this.$t(info.COMPANY_TITLE)
      pageDescription = this.doc.description
    }
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
  mounted() {
    this.shareURL = this.getMusouProjectURL(this.module.id, this.project.id)
  },
  computed: {
    pageStyles() {
      return this.project.page && this.project.page.styles ? this.project.page.styles : {}
    },
    isInTB() {
      return this.$router.currentRoute.path.substring(0, 3).includes('tb')
    },
    isInEN() {
      return this.$router.currentRoute.path.substring(0, 3).includes('en')
    },
    isInZH() {
      return !this.isInTB && !this.isInEN
    }
  },
  methods: {
    getTranslationURL(lang) {
      return this.getBaseURL('musou') + (lang ? `${lang}/` : '') + this.projectSlug
    },
    updateShareURL(url) {
      this.shareURL = url
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

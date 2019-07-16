<template>
<div class="categorized-browser">
  <div class="control-panels tcl-container margin-top-bottom-8">
    <div class="control-panel tcl-panel tcl-left-right-margin with-top-bottom-margin">
      <div class="description">{{ project.description }}</div>
      <div class="question">
        <span>{{ project.question.before }}</span>
        <span class="blank">{{ selectedCategory ? selectedCategory.i18n.tw : PUNCT.IDEOSPACE + PUNCT.IDEOSPACE }}</span>
        <span>{{ project.question.after }}</span>
      </div>
      <div class="options">
        <div class="option" :class="{ 'text-color-musou': category.id === selectedCategoryID }" v-for="(category, categoryIndex) of categories" :key="categoryIndex" @click="selectCategory(category.id)">
          <span>{{ DIGITS.CIRCLED[categoryIndex + 1] }}</span>&nbsp;<span>{{ category.i18n.tw }}</span>
        </div>
      </div>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div v-if="popQuizIsDone" class="summary-container tcl-container">
    <div class="summary tcl-panel tcl-left-right-margin with-top-bottom-margin">
      <div class="count"><span class="value">{{ selectedEntries.length }}</span><span class="unit secondary-text font-size-small">{{ project.countUnit }}</span></div>
      <div class="secondary-text font-size-small">{{ project.countDescription }}{{ PUNCT.L.QUOTE }}{{ selectedCategory.i18n.tw }}{{ PUNCT.R.QUOTE }}</div>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div v-if="popQuizIsDone" class="entries tcl-container">
    <div class="entry tcl-panel half-width bg-very-very-light-grey with-padding" v-for="(entry, entryIndex) of selectedEntries" :key="entryIndex">
      <h3 class="publisher">{{ entry.publisher }}</h3>
      <div class="publisher-tw font-size-small secondary-text" v-if="entry.publisher_tw">{{ entry.publisher_tw }}</div>
      <a class="a-text font-size-small" :href="entry.link" target="_blank">⋯</a>
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
</div>
</template>

<script>
import { knowsMarkdown, knowsWatchout } from 'watchout-common-functions/interfaces'
import { PUNCT, DIGITS } from 'watchout-common-functions/lib/bunko'

export default {
  mixins: [knowsMarkdown, knowsWatchout],
  props: ['module', 'project', 'shareURL'],
  data() {
    let data = []
    if(this.project.hasOwnProperty('dataSource')) {
      data = require('~/data/map/' + this.project.dataSource)
      data = data.map(entry => {
        let dataKeys = Object.keys(entry).filter(key => key.substring(0, 5) === 'data.')
        if(dataKeys.length > 0) {
          return Object.assign(entry, {
            data: Object.assign(...dataKeys.map(key => ({ [key.substring(5)]: entry[key] })))
          })
        } else {
          return entry
        }
      })
    }
    return {
      PUNCT,
      DIGITS,
      data,
      selectedCategoryID: null
    }
  },
  computed: {
    categories() {
      return this.project && this.project.categories ? this.project.categories : []
    },
    popQuizIsDone() {
      return this.selectedCategoryID !== null
    },
    selectedCategory() {
      return this.selectedCategoryID ? this.getCategory(this.selectedCategoryID) : null
    },
    selectedEntries() {
      return this.selectedCategoryID ? this.getEntriesInCategory(this.selectedCategoryID) : []
    }
  },
  methods: {
    selectCategory(catID) {
      this.selectedCategoryID = catID
    },
    getCategory(catID) {
      return this.categories.find(cat => cat.id === catID)
    },
    getEntriesInCategory(catID) {
      let entries = this.data.filter(entry => entry.data && entry.data.hasOwnProperty(catID))
      return entries
    },
    entryIsSelected(entry) {
      return this.entryHasCategory(this.selectedCategoryID)
    },
    entryHasCategory(entry, catID) {
      return entry.data.hasOwnProperty(catID)
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.categorized-browser {
  > .control-panels {
    > .control-panel {
      > .question {
        margin: 1rem 0;
        font-size: 2rem;
        > .blank {
          border-bottom: 2px black solid;
        }
      }
      > .options {
        font-size: 1.25rem;
        > .option {
          cursor: pointer;
        }
      }
    }
  }
  > .summary-container {
    > .summary {
      > .count {
        > .value {
          font-size: 2.5rem;
          line-height: 1.125;
          font-weight: bold;
        }
        > .unit {
          margin-left: 0.125rem;
        }
      }
    }
  }
}
</style>

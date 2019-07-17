<template>
<div class="categorized-browser">
  <div class="control-panels tcl-container margin-top-bottom-8">
    <div class="control-panel tcl-panel tcl-left-right-margin with-top-bottom-margin">
      <div class="description">{{ project.description }}</div>
      <div class="question">
        <span v-html="spacingOptimizer(project.question.before)"></span>
        <span class="blank" v-html="selectedCategory ? spacingOptimizer(selectedCategory.i18n.tw) : PUNCT.IDEOSPACE + PUNCT.IDEOSPACE"></span>
        <span v-html="spacingOptimizer(project.question.after)"></span>
      </div>
      <div class="options" ref="options">
        <div class="option" :class="{ 'text-color-musou': category.id === selectedCategoryID }" v-for="(category, categoryIndex) of categories" :key="categoryIndex" @click="selectCategory(category.id)">
          <span>{{ DIGITS.CIRCLED[categoryIndex + 1] }}</span>&nbsp;<span>{{ category.i18n.tw }}</span>
        </div>
      </div>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div v-if="popQuizIsDone" class="summary-container tcl-container" ref="summary">
    <div class="summary tcl-panel tcl-left-right-margin with-top-bottom-margin">
      <div class="count"><span class="value">{{ selectedEntries.length }}</span><span class="unit secondary-text font-size-small">{{ project.countUnit }}</span></div>
      <div class="secondary-text font-size-small">{{ project.countDescription }}{{ PUNCT.L.QUOTE }}{{ selectedCategory.i18n.tw }}{{ PUNCT.R.QUOTE }}</div>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <div v-if="popQuizIsDone && selectedEntries.length > 0" class="entries tcl-container">
    <div class="entry tcl-panel tcl-left-right-margin with-top-bottom-margin bg-very-very-light-grey with-padding" :class="{ 'half-width': !listedEntries[entryIndex].expanded }" v-for="(entry, entryIndex) of selectedEntries" :key="`entry-${entryIndex}`">
      <h3 class="publisher medium">{{ entry.publisher }}</h3>
      <div class="publisher-tw font-size-small secondary-text" v-if="entry.publisher_tw">{{ entry.publisher_tw }}</div>
      <div class="categorized-mention paragraphs margin-8" v-if="listedEntries[entryIndex].expanded">{{ entry.data[selectedCategoryID] }}</div>
      <div class="actions">
        <a class="a-text font-size-small" @click="listedEntries[entryIndex].expanded = !listedEntries[entryIndex].expanded">{{ listedEntries[entryIndex].expanded ? '收合' : '展開' }}</a>
        <span>･</span>
        <a class="a-text font-size-small" :href="entry.link" target="_blank">全文</a>
      </div>
    </div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
    <div class="tcl-panel half-width"></div>
  </div>
</div>
</template>

<script>
import { knowsMarkdown, knowsWatchout } from 'watchout-common-functions/interfaces'
import { PUNCT, DIGITS, spacingOptimizer } from 'watchout-common-functions/lib/bunko'

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
      selectedCategoryID: null,
      scrollTarget: 'options',
      listedEntries: []
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
  watch: {
    selectedCategory() {
      this.listedEntries.splice(0, this.listedEntries.length)
      this.listedEntries.push(...this.selectedEntries.map(entry => ({
        expanded: false
      })))
    }
  },
  methods: {
    spacingOptimizer,
    selectCategory(catID) {
      this.selectedCategoryID = catID
      setTimeout(() => {
        let target = this.$refs[this.scrollTarget]
        if(target) {
          target.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }, 350)
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
        padding-top: 1rem;
        font-size: 1.75rem;
        font-weight: bold;
        > .blank {
          border-bottom: 2px black solid;
        }
      }
      > .options {
        padding-top: 1rem;
        font-size: 1.5rem;
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
  > .entries {
    > .entry {
      > .actions {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>

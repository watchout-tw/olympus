<template>
<div class="better-long-form" :class="[ project.theme ? `theme-${project.theme}` : '' ]">
  <div class="opening responsive-typesetting-container-medium padding-top-double padding-bottom-single">
    <h2 v-html="spacingOptimizer(module.title)"></h2>
    <h1 v-html="spacingOptimizer(doc.title)"></h1>
    <div v-if="doc.description" class="paragraphs" v-html="markdown(doc.description)"></div>
  </div>
  <div class="responsive-typesetting-container-medium" v-if="doAfterClick('coralreef')">
    <re-captcha :token.sync="crToken" :tokenSource.sync="crTokenSource" />
  </div>
  <div class="scenes" v-if="isHuman">
    <div class="scene padding-top-bottom-single" :class="{ 'has-correct-answer': hasCorrectAnswer, 'locked': scene.lock, ...(scene.display && { [scene.display]: true }) }" v-for="(scene, index) in history" :key="`history-entry-${index}`" :id="`history-entry-${index}`">
      <div class="responsive-typesetting-container-medium margin-top-bottom-8">
        <div v-if="scene.beforeTitle" class="paragraphs a-text-parent margin-bottom-8" v-html="markdown(scene.beforeTitle)"></div>
        <h2 v-if="scene.title" class="margin-top-bottom-4" v-html="spacingOptimizer(scene.title)"></h2>
        <h3 v-if="scene.subtitle" class="margin-top-bottom-4" v-html="spacingOptimizer(scene.subtitle)"></h3>
      </div>
      <div v-if="scene.description" class="paragraphs responsive-typesetting-container-medium a-text-parent margin-top-bottom-8" v-html="markdown(scene.description)"></div>
      <div v-if="scene.image" class="image-container-medium margin-top-bottom-single">
        <img :src="scene.image.reference" :alt="scene.image.caption" />
        <div v-if="scene.image.caption" class="caption paragraphs no-margin a-text-parent secondary-text font-size-small margin-top-bottom-8" v-html="markdown(scene.image.caption, true)"></div>
      </div>
      <div class="options responsive-typesetting-container-medium margin-top-bottom-8">
        <div class="option input button wrap" :class="{ 'immutable': scene.lock, 'selected': option === scene.selectedOption, 'not-selected': !option.isCorrect && scene.selectedOption && option !== scene.selectedOption, 'correct': showCorrectAnswer && hasCorrectAnswer && option.isCorrect }" v-for="option in scene.options" :key="option.title" @click="onClick(scene, option)">
          <div class="details margin-bottom-4 font-weight-bold" v-if="scene.selectedOption && doAfterClick('showDetail') && option.details">
            <span v-if="option.details.time" class="latin-within-han first">{{ option.details.time.year }}</span>
            <span v-if="option.details.person">{{ option.details.person.name }}</span>
          </div>
          <div class="title" v-html="spacingOptimizer(option.title)"></div>
          <div class="details margin-top-4 font-size-tiny secondary-text" v-if="scene.selectedOption && doAfterClick('showDetail') && option.details">
            <span class="time latin-within-han first" v-if="option.details.time">{{ [option.details.time.year, option.details.time.month, option.details.time.date].filter(val => !!val).join('/') }}</span>
            <span v-if="option.details.person && option.details.person.title">{{ option.details.person.title }}</span>
            <span v-if="option.details.person">{{ option.details.person.name }}</span>
            <span v-if="option.details.platform" class="platform">在{{ option.details.platform }}<template v-if="option.details.scenario">{{ option.details.scenario }}</template><template v-if="option.details.type">的{{ option.details.type }}</template></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="human-verification-prompt padding-top-bottom-double" v-else><!-- is not human -->
    <div class="font-size-small text-align-center secondary-text">機器人防治檢查中，請稍候。</div>
  </div>
  <div class="result" v-if="isHuman && isCompleted">
    <div v-if="showSimpleResult" class="simple-result responsive-typesetting-container-medium padding-top-bottom-single">
      <div class="section-title small with-underline text-align-center"><span>總分</span></div>
      <div class="text-align-center font-size-4x">{{ accumulatedScore }}</div>
      <div class="text-align-center">{{ simpleResult }}</div>
    </div>
    <div v-if="doShowResult('showScore')" class="result-score responsive-typesetting-container-medium padding-top-bottom-single">
      <div class="section-title small with-underline text-align-center"><span>總分</span></div>
      <div class="text-align-center font-size-4x">{{ accumulatedScore }}</div>
    </div>
    <div v-if="doShowResult('showGroups') && actionShowGroups.show" class="result-groups responsive-typesetting-container-medium padding-top-bottom-single">
      <div class="section-title small with-underline text-align-center"><span>成份統計</span></div>
      <div class="margin-top-bottom-8 text-align-center">{{ actionShowGroups.message }}</div>
      <div class="text-align-center" v-if="actionShowGroups.showGroupMessage">{{ result.message }}</div>
      <div class="segments d-flex margin-top-bottom-8" v-if="actionShowGroups.chartType === 'segments'">
        <div class="segment padding-8" v-for="(group, index) of result.groups" :style="{ width: (group.count / result.totalCount) * 100 + '%', backgroundColor: group.color }" v-if="group.count > 0" :key="index">
          <div>{{ group.name }}</div>
          <div>{{ Math.round(group.count / result.totalCount * 100) + '%' }}</div>
        </div>
      </div>
    </div>
    <div v-if="doShowResult('showOccurences') && actionShowOccur.show" class="result-occurences responsive-typesetting-container-medium padding-top-bottom-single">
      <div class="section-title small with-underline text-align-center"><span>成份分析</span></div>
      <div class="segments d-flex margin-top-bottom-8" v-if="actionShowOccur.chartType === 'segments'">
        <div class="segment padding-8" v-for="(occurence, index) of result.occurences" :style="{ width: (occurence.count / result.totalCount) * 100 + '%', backgroundColor: actionShowOccur.segment.colors[index % actionShowOccur.segment.colors.length] }" :key="index">
          <div v-for="(key, keyIndex) in actionShowOccur.segment.keys" :key="keyIndex">{{ occurence.details[key] }}</div>
          <div>{{ Math.round(occurence.count / result.totalCount * 100) + '%' }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="closing-container padding-top-bottom-double responsive-typesetting-container-medium" v-if="isHuman && isCompleted && hasClosing">
    <div class="closing paragraphs no-margin a-text-parent" v-html="markdown(project.closing)"></div>
  </div>
  <div class="appendix-container padding-top-bottom-double responsive-typesetting-container-medium" v-if="isHuman && isCompleted && hasAppendix">
    <div class="appendix secondary-text font-size-small" :class="apdxDispType" v-html="apdxHTML"></div>
  </div>
  <div class="incomplete-prompt padding-top-bottom-double" v-if="isHuman && !isCompleted && project.incompletePrompt"><!-- is not completed -->
    <div class="font-size-small text-align-center secondary-text">{{ project.incompletePrompt }}</div>
  </div>
  <div class="prompt-overlay" v-if="prompt.show && doAfterClick('showPrompt')">
    <div class="prompt" :class="prompt.classes">
      <div class="score text-align-center" v-if="actionShowPrompt.keys.includes('score')">{{ prompt.content.score }}</div>
      <div class="message" v-if="actionShowPrompt.keys.includes('message')" v-html="spacingOptimizer(prompt.content.message)"></div>
    </div>
  </div>
</div>
</template>

<script>
import { knowsAuth, knowsBunko, knowsCoralReef, knowsError, knowsMarkdown, knowsReCaptcha, knowsWatchout } from 'watchout-common-functions/interfaces'
import ReCaptcha from 'watchout-common-functions/components/ReCaptcha'
import * as coralreef from 'watchout-common-functions/lib/coralreef'
import * as util from 'watchout-common-functions/lib/util'
import { resolve } from '~/util/util'

const devMode = false

function pad0(val) {
  return val < 10 ? ('0' + val) : val
}
function getDateString(timeObj) {
  return [timeObj.year, pad0(timeObj.month), pad0(timeObj.date)].filter(val => !!val).join('-')
}

const EMPTY = ''
const SEMICOLON = '；'

export default {
  mixins: [knowsAuth, knowsBunko, knowsCoralReef, knowsError, knowsMarkdown, knowsReCaptcha, knowsWatchout],
  props: ['project', 'module', 'doc'],
  data() {
    let scenes = this.project.sequence.scenes
    let hasClosing = this.project.hasOwnProperty('closing')

    // appendix
    let hasAppendix = this.project.hasOwnProperty('appendix')
    let apdxDispType = hasAppendix ? this.project.appendix.displayType : undefined
    let apdxDispItemType = hasAppendix ? this.project.appendix.displayItemType : undefined
    let apdxHTML = null
    if(hasAppendix && this.project.appendix.type === 'json') {
      let data = require('~/data/' + this.project.appendix.reference)
      if(apdxDispType === 'list') {
        data = data.map(item => {
          let newItem = {}
          if(apdxDispItemType === 'person') {
            newItem.date = util.formatter.date(item.date)
            newItem.title = [item.name, ...(item.gender ? [item.gender] : []), ...(item.age ? [item.age] : [])].join(SEMICOLON)
            newItem.description = item.description
          }
          return newItem
        })
        apdxHTML = data.map(item => `<div class="item"><label>${item.date}</label><h4>${this.spacingOptimizer(item.title)}</h4><label>${this.spacingOptimizer(item.description)}</label></div>`).join(EMPTY)
      }
    }

    // prompt
    let actionShowPrompt = this.project.sequence.afterClickActions ? this.project.sequence.afterClickActions.find(action => action.name === 'showPrompt') : null
    let promptContent = actionShowPrompt ? Object.assign({}, ...actionShowPrompt.keys.map(key => ({ [key]: null }))) : {}
    return {
      scenes,
      currentSceneIndex: -1,
      history: [],
      accumulatedScore: 0,
      accumulatedDetails: [],
      hasClosing,
      hasAppendix,
      apdxDispType,
      apdxDispItemType,
      apdxHTML,
      prompt: {
        duration: devMode ? 500 : 1500,
        show: false,
        classes: [],
        content: promptContent
      },
      isCompleted: false,
      scrollTimer: null
    }
  },
  computed: {
    navigation() {
      return this.project.sequence.navigation
    },
    isHuman() {
      return this.doAfterClick('coralreef') ? this.crToken !== undefined && this.crToken !== null : true
    },
    hasCorrectAnswer() {
      return this.project.sequence.hasCorrectAnswer
    },
    showCorrectAnswer() {
      return this.project.sequence.showCorrectAnswer
    },
    canChangeAnswer() {
      return this.project.sequence.canChangeAnswer
    },
    showSimpleResult() {
      return this.project.results && Array.isArray(this.project.results)
    },
    simpleResult() {
      let results = this.project.results
      let text = results[results.length - 1].text
      for(let i = 0; i < results.length; i++) {
        let result = results[i]
        if(result.hasOwnProperty('score') && this.accumulatedScore >= result.score) {
          text = result.text
          break
        }
      }
      return text
    },
    result() {
      let action
      let detailObjects = this.accumulatedDetails.map(detailString => JSON.parse(detailString))
      let result = {
        totalCount: detailObjects.length
      }

      if(this.doShowResult('sort')) {
        action = this.getShowResultAction('sort')
        if(action.key === 'time') {
          detailObjects.sort((a, b) => new Date(getDateString(a.time)) - new Date(getDateString(b.time)))
        }
      }
      if(this.doShowResult('showGroups')) {
        let action = this.getShowResultAction('showGroups')
        let groups = action.groups.map(group => Object.assign({ count: 0 }, group))
        detailObjects.forEach(detailObject => {
          let base = action.base
          let keys = Object.keys(base)
          let match = keys.map(key => detailObject[key] === base[key])

          let groupIndex = -1
          for(let i = 0; i < groups.length; i++) {
            let group = action.groups[i]
            let groupMatch = group.match.map((baseVal, index) => [undefined, null].includes(baseVal) ? true : baseVal === match[index]).reduce((a, v) => a && v)
            if(groupMatch) {
              groupIndex = i
              break
            }
          }
          if(groupIndex > -1) {
            groups[groupIndex].count += 1
          }
        })
        let maxCount = 0
        let message = null
        groups.forEach((group, index) => {
          if(group.count >= maxCount) {
            maxCount = group.count
            message = group.message
          }
        })

        result.groups = groups
        result.message = message
      }
      if(this.doShowResult('showOccurences')) {
        action = this.getShowResultAction('showOccurences')
        let detailStrings = detailObjects.map(obj => {
          let filteredObj = Object.assign({}, ...action.segment.keys.map(key => ({ [key]: obj[key] })))
          return JSON.stringify(filteredObj)
        })
        let keys = [...new Set(detailStrings)]
        let occurences = keys.map(key => {
          return {
            details: JSON.parse(key),
            count: detailStrings.filter(detailString => detailString === key).length
          }
        })
        result.occurences = occurences
      }
      return result
    },
    actionShowPrompt() {
      return this.doAfterClick('showPrompt') ? this.getAfterClickAction('showPrompt') : undefined
    },
    actionShowGroups() {
      return this.doShowResult('showGroups') ? this.getShowResultAction('showGroups') : undefined
    },
    actionShowOccur() {
      return this.doShowResult('showOccurences') ? this.getShowResultAction('showOccurences') : undefined
    },
    currentScene() {
      return this.history.length > 0 ? this.history[this.history.length - 1] : null
    }
  },
  watch: {
    isCompleted() {
      if(this.doAtCompletion('updateQuery')) {
        let action = this.getAtCompletionAction('updateQuery')
        let source = resolve(this, action.value.source)
        let key = action.key
        let value
        if(this.isCompleted) {
          if(action.value.method === 'each') {
            value = source.map(item => resolve(item, action.value.key)).join(action.value.joinChar)
          }
          this.$router.push({
            path: this.$route.path,
            query: { [key]: value }
          })
        } else {
          this.clearQuery()
        }
      }
    }
  },
  mounted() {
    this.clearQuery()
    this.goToNextScene()
  },
  methods: {
    scrollToCurrentScene() {
      if(!this.doAfterClick('scroll')) {
        return
      }
      if(this.scrollTimer) {
        clearTimeout(this.scrollTimer)
      }
      let entryIndex = this.history.length - 1
      if(entryIndex > 0) { // avoid scroll to entry 0
        document.getElementById(`history-entry-${entryIndex}`).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        }) // FIXME: mobile safari does not support smooth behavior
      }
    },
    getNextSceneIndex(option) {
      let nextSceneIndex = -1
      if(this.currentSceneIndex < 0) {
        nextSceneIndex = 0
      } else if(this.navigation === 'sequential' && this.currentSceneIndex + 1 < this.scenes.length) {
        nextSceneIndex = this.currentSceneIndex + 1
      } else if(this.navigation === 'random' && option && option.goto) {
        nextSceneIndex = this.scenes.findIndex(scene => scene.id === option.goto)
      }
      return nextSceneIndex
    },
    goToNextScene(option) {
      let nextScene = null
      let nextSceneIndex = this.getNextSceneIndex(option)
      if(nextSceneIndex > -1) {
        let flags = {
          lock: false,
          selectedOption: null
        }
        nextScene = Object.assign({}, this.scenes[nextSceneIndex], flags)
        this.history.push(nextScene)
        this.currentSceneIndex = nextSceneIndex

        this.$nextTick(() => {
          this.scrollToCurrentScene()
        })

        // execute before-click actions
        if(this.doBeforeClick('accumulateDetails')) {
          let keys = this.getBeforeClickAction('accumulateDetails').keys
          this.accumulateDetails(nextScene.details, keys, +1)
        }

        // check if next scene has options
        if(!(Array.isArray(this.currentScene.options) && this.currentScene.options.length > 0)) {
          this.isCompleted = true
        }
      } else {
        this.isCompleted = true
      }
    },
    clearQuery() {
      this.$router.push({
        path: this.$route.path,
        query: null
      })
    },
    doBeforeClick(actionName) {
      return this.project.sequence.beforeClickActions ? this.project.sequence.beforeClickActions.filter(action => action.name === actionName).length > 0 : false
    },
    getBeforeClickAction(actionName) {
      return this.project.sequence.beforeClickActions ? this.project.sequence.beforeClickActions.find(action => action.name === actionName) : null
    },
    doAfterClick(actionName) {
      return this.project.sequence.afterClickActions ? this.project.sequence.afterClickActions.filter(action => action.name === actionName).length > 0 : false
    },
    getAfterClickAction(actionName) {
      return this.project.sequence.afterClickActions ? this.project.sequence.afterClickActions.find(action => action.name === actionName) : null
    },
    doShowResult(actionName) {
      return this.project.showResultActions ? this.project.showResultActions.filter(action => action.name === actionName).length > 0 : false
    },
    getShowResultAction(actionName) {
      return this.project.showResultActions ? this.project.showResultActions.find(action => action.name === actionName) : null
    },
    doAtCompletion(actionName) {
      return this.project.atCompletionActions ? this.project.atCompletionActions.filter(action => action.name === actionName).length > 0 : false
    },
    getAtCompletionAction(actionName) {
      return this.project.atCompletionActions ? this.project.atCompletionActions.find(action => action.name === actionName) : null
    },
    accumulateScore(option, plusMinus) {
      let offset = 0
      if(option.hasOwnProperty('score')) {
        offset = option.score * plusMinus
        this.accumulatedScore = this.accumulatedScore + offset
      }
      return offset
    },
    accumulateDetails(details = {}, keys = [], plusMinus = +1) { // (option, plusMinus) {
      let detailObj = Object.assign({}, ...keys.map(key => {
        return {
          [key]: resolve(details, key)
        }
      }))
      if(plusMinus > 0) {
        this.accumulatedDetails.push(JSON.stringify(detailObj))
      } else {
        let index = this.accumulatedDetails.indexOf(JSON.stringify(detailObj))
        if(index > -1) {
          this.accumulatedDetails.splice(index, 1)
        }
      }
    },
    onClick(scene, option) {
      if(scene.lock) {
        return
      }

      // coralreef
      if(this.doAfterClick('coralreef') && !devMode) {
        this.optionToSubmit = option
        if(!this.crToken) {
          window.grecaptcha.execute()
          return
        }

        let speechData = {
          targetID: scene.speechTarget.id,
          classes: [scene.speechTarget.speechType],
          data: {
            selectedOption: option
          }
        }
        coralreef.createSpeech(speechData, this.crToken, this.crTokenSource).then(() => {
          // TODO: success
        }).catch(error => {
          // TODO: extra error handling
          this.handleError(error)
        })
      }

      // accumulate
      let offset = 0
      if(this.doAfterClick('accumulateScore')) {
        if(scene.selectedOption) {
          this.accumulateScore(scene.selectedOption, -1)
        }
        offset = this.accumulateScore(option, +1)
      }
      if(this.doAfterClick('accumulateDetails')) {
        let keys = this.getAfterClickAction('accumulateDetails').keys
        if(scene.selectedOption) {
          this.accumulateDetails(scene.selectedOption.details, keys, -1)
        }
        this.accumulateDetails(option.details, keys, +1)
      }

      // set selected option
      scene.selectedOption = option

      // compare details & prepare for prompt
      if(this.doAfterClick('compareDetails')) {
        let action = this.getAfterClickAction('compareDetails')
        let match = Object.keys(action.base).map(key => {
          let baseVal = action.base[key]
          let val = resolve(option.details, key)
          return baseVal === val
        })
        let scenario = action.matchScenarios.find(matchScenario => {
          let result = match.map((matchVal, matchIndex) => {
            let matchBaseVal = matchScenario.match[matchIndex]
            return [undefined, null, matchVal].includes(matchBaseVal)
          }).reduce((a, v) => a && v)
          return result
        })
        this.prompt.classes = scenario.classes
        this.prompt.content.message = scenario.message
      }

      // prompt
      if(this.doAfterClick('showPrompt')) {
        this.prompt.content.score = offset >= 0 ? ('+' + offset) : offset
        this.showPrompt()
      }

      // set flags
      if(!this.canChangeAnswer) {
        scene.lock = true
      }

      // show next scene
      this.goToNextScene(option)
    },
    showPrompt() {
      this.prompt.show = true
      setTimeout(() => { this.prompt.show = false }, this.prompt.duration)
    }
  },
  components: {
    ReCaptcha
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';
@import '~assets/colors';
@import '~assets/prompt-overlay';

.font-size-4x {
  font-size: 4rem;
  letter-spacing: -0.125rem;
}

// themes
.theme-dark {
  background-color: $color-nice-grey;
  color: $color-font-color-default-white;
  .secondary-text {
    color: $color-secondary-text-dark-grey;
  }
}

.better-long-form {
  > .scenes {
    > .scene {
      > .options {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        > .option {
          margin: 0.375rem;
          flex-basis: 100%;
          &:only-child {
            text-align: center;
          }
          @include tcl-sm {
            &:not(:only-child) {
              flex-basis: calc(50% - 0.75rem);
            }
          }
          &.not-selected {
            opacity: 0.35;
          }
        }
      }
      &.has-correct-answer {
        > .options > .option {
          &.selected {
            background-color: $color-incorrect;
          }
          &.selected.correct {
            background-color: $color-correct;
          }
        }
      }
      &.has-correct-answer.locked {
        > .options > .option {
          &.correct {
            background-color: $color-correct;
          }
        }
      }
      &.strong-headings {
        h2 {
          text-align: center;
          font-size: 3em;
        }
        h3 {
          text-align: center;
          font-size: 2em;
        }
      }
    }
  }
  > .appendix-container {
    > .appendix {
      &.list {
        display: flex;
        flex-wrap: wrap;
        > .item {
          margin: 0.5rem;
        }
      }
    }
  }
}
</style>

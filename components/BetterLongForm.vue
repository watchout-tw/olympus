<template>
<div class="long-form">
  <div class="opening tcl-container">
    <div class="tcl-panel tcl-left-right-margin with-top-bottom-margin with-double-top-margin">
      <h1 class="medium">{{ project.title }}</h1>
      <div class="paragraphs" v-html="markdown(project.description)"></div>
    </div>
    <div class="tcl-panel"></div>
  </div>
  <re-captcha :token.sync="crToken" :tokenSource.sync="crTokenSource" />
  <div class="scenes tcl-container">
    <div class="scene tcl-panel full-width tcl-left-right-margin with-top-bottom-margin with-quad-top-margin" :class="{ 'has-correct-answer': hasCorrectAnswer, locked: scene.lock }" v-for="scene in scenes" :key="scene.title" v-if="scene.show">
      <h2>{{ scene.title }}</h2>
      <div class="options form-field-many-inputs">
        <div class="option input button wrap" :class="{ immutable: scene.lock, selected: option === scene.selectedOption, correct: hasCorrectAnswer && option.isCorrect }" v-for="option in scene.options" :key="option.title" @click="onClick(scene, option)">
          <div class="details margin-bottom-4 font-weight-bold" v-if="scene.selectedOption && option.details">
            <span v-if="option.details.time" class="latin-within-han first">{{ option.details.time.year }}</span>
            <span v-if="option.details.person">{{ option.details.person.name }}</span>
          </div>
          <h3 class="small font-weight-normal">{{ option.title }}</h3>
          <div class="details margin-top-4 font-size-tiny secondary-text" v-if="scene.selectedOption && option.details">
            <span class="time latin-within-han first" v-if="option.details.time">{{ [option.details.time.year, option.details.time.month, option.details.time.date].filter(val => !!val).join('/') }}</span>
            <span v-if="option.details.person.title">{{ option.details.person.title }}</span>
            <span v-if="option.details.person">{{ option.details.person.name }}</span>
            <span class="platform">在{{ option.details.platform }}<template v-if="option.details.scenario">{{ option.details.scenario }}</template><template v-if="option.details.type">的{{ option.details.type }}</template></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="result-container tcl-container">
    <div class="tcl-panel full-width with-top-bottom-margin with-quad-top-margin" v-if="completed">
      <div class="result margin-top-bottom-double">
        <template v-if="doShowResult('showScore')">
          <div class="section-title small with-underline text-align-center"><span>總分</span></div>
          <div class="text-align-center font-size-4x">{{ accumulatedScore }}</div>
        </template>
        <template v-if="doShowResult('showGroups') && actionShowGroups.show">
          <div class="section-title small with-underline text-align-center"><span>成份分析</span></div>
          <div class="margin-top-bottom-8 text-align-center">{{ actionShowGroups.message }}</div>
          <div class="text-align-center" v-if="actionShowGroups.showGroupMessage">{{ result.message }}</div>
          <div class="segments d-flex margin-top-bottom-8" v-if="actionShowGroups.chartType === 'segments'">
            <div class="segment padding-8" v-for="(group, index) of result.groups" :style="{ width: (group.count / result.totalCount) * 100 + '%', backgroundColor: group.color }" v-if="group.count > 0" >
              <div>{{ group.name }}</div>
              <div>{{ Math.round(group.count / result.totalCount * 100) + '%' }}</div>
            </div>
          </div>
        </template>
        <template v-if="doShowResult('showOccurences') && actionShowOccur.show">
          <div class="section-title small with-underline text-align-center"><span>成份分析</span></div>
          <div class="segments d-flex margin-top-bottom-8" v-if="actionShowOccur.chartType === 'segments'">
            <div class="segment padding-8" v-for="(occurence, index) of result.occurences" :style="{ width: (occurence.count / result.totalCount) * 100 + '%', backgroundColor: actionShowOccur.segment.colors[index % actionShowOccur.segment.colors.length] }">
              <div v-for="key in actionShowOccur.segment.keys">{{ occurence.details[key] }}</div>
              <div>{{ Math.round(occurence.count / result.totalCount * 100) + '%' }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="tcl-panel with-top-bottom-margin with-quad-top-margin with-quad-bottom-margin" v-else>
      <div class="font-size-small text-align-center secondary-text">測驗尚未結束，同志仍須繼續努力作答。</div>
    </div>
  </div>
  <div class="share-container tcl-container" v-if="completed && project.share">
    <div class="tcl-panel">
      <div class="share text-align-center">
        <div class="section-title small with-underline text-align-center"><span>分享</span></div>
        <div class="margin-top-bottom-8" v-if="project.share.message">{{ project.share.message }}</div>
        <div class="margin-top-bottom-8">
          <share-to-platforms :url="shareURL" />
        </div>
      </div>
    </div>
  </div>
  <div class="prompt-overlay" v-if="prompt.show && doAfterClick('showPrompt')">
    <div class="prompt" :class="prompt.classes">
      <div class="score text-align-center" v-if="actionShowPrompt.keys.includes('score')">{{ prompt.content.score }}</div>
      <div class="message" v-if="actionShowPrompt.keys.includes('message')">{{ prompt.content.message }}</div>
    </div>
  </div>
</div>
</template>

<script>
import { knowsAuth, knowsCoralReef, knowsError, knowsMarkdown, knowsReCaptcha, knowsWatchout } from 'watchout-common-functions/interfaces'
import ReCaptcha from 'watchout-common-functions/components/ReCaptcha'
import ShareToPlatforms from 'watchout-common-functions/components/ShareToPlatforms'
import * as coralreef from 'watchout-common-functions/lib/coralreef'
import { resolve } from '~/util/util'

const devMode = false
const overlayDuration = devMode ? 500 : 1500

function pad0(val) {
  return val < 10 ? ('0' + val) : val
}
function getDateString(timeObj) {
  return [timeObj.year, pad0(timeObj.month), pad0(timeObj.date)].filter(val => !!val).join('-')
}

export default {
  mixins: [knowsAuth, knowsCoralReef, knowsError, knowsMarkdown, knowsReCaptcha, knowsWatchout],
  props: ['project', 'module'],
  data() {
    let scenes = this.project.sequence.scenes.map(scene => {
      let flags = {
        show: false,
        lock: false,
        selectedOption: null
      }
      return Object.assign({}, scene, flags)
    })
    scenes[0].show = true

    let showPromptAction = this.project.sequence.afterClickActions ? this.project.sequence.afterClickActions.find(action => action.name === 'showPrompt') : null
    let promptContent = showPromptAction ? Object.assign({}, ...showPromptAction.keys.map(key => ({ [key]: null }))) : {}
    return {
      scenes,
      accumulatedScore: 0,
      accumulatedDetails: [],
      prompt: {
        show: false,
        classes: [],
        content: promptContent
      }
    }
  },
  computed: {
    hasCorrectAnswer() {
      return this.project.sequence.hasCorrectAnswer
    },
    canChangeAnswer() {
      return this.project.sequence.canChangeAnswer
    },
    completed() {
      return devMode ? true : this.scenes.filter(scene => !scene.selectedOption).length === 0
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
    shareURL() {
      return this.getBaseURL('musou') + this.$route.fullPath
    }
  },
  watch: {
    completed() {
      let action
      if(this.doAtCompletion('updateQuery')) {
        action = this.getAtCompletionAction('updateQuery')
        let source = resolve(this, action.value.source)
        let key = action.key
        let value
        if(this.completed) {
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
  },
  methods: {
    clearQuery() {
      this.$router.push({
        path: this.$route.path,
        query: null
      })
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
    getOptionDetailObject(option) {
      let keys = this.getAfterClickAction('accumulateDetails').keys
      return Object.assign({}, ...keys.map(key => {
        return {
          [key]: resolve(option.details, key)
        }
      }))
    },
    accumulateDetails(option, plusMinus) {
      let detailObj = this.getOptionDetailObject(option)
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
      if(!scene.lock) {
        // accumulate
        if(this.doAfterClick('coralreef')) {
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
          }).catch((error) => {
            // TODO: extra error handling
            this.handleError(error)
          })
        }
        let offset = 0
        if(this.doAfterClick('accumulateScore')) {
          if(scene.selectedOption) {
            this.accumulateScore(scene.selectedOption, -1)
          }
          offset = this.accumulateScore(option, +1)
        }
        if(this.doAfterClick('accumulateDetails')) {
          if(scene.selectedOption) {
            this.accumulateDetails(scene.selectedOption, -1)
          }
          this.accumulateDetails(option, +1)
        }

        // set selected option
        scene.selectedOption = option

        // prepare for prompt
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
        this.prompt.content.score = offset >= 0 ? ('+' + offset) : offset
        this.prompt.show = true
        setTimeout(() => { this.prompt.show = false }, overlayDuration)

        // set flags
        if(!this.canChangeAnswer) {
          scene.lock = true
        }

        // show next scene
        if(this.project.sequence.navigation === 'sequential') {
          let index = this.scenes.indexOf(scene)
          if(index > -1 && index + 1 < this.scenes.length) {
            this.scenes[index + 1].show = true
          }
        }
      }
    }
  },
  components: {
    ReCaptcha,
    ShareToPlatforms
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.font-size-4x {
  font-size: 4rem;
}

$color-incorrect: rgba($color-musou, 0.65);
$color-correct: rgba($color-watchout, 0.65);

.long-form {
  > .scenes {
    > .scene {
      > .options {
        > .option {
          &.selected {
            background-color: $color-correct;
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
    }
  }
  > .prompt-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $color-modal-overlay-white;
    > .prompt {
      padding: 2rem;
      background-color: $color-very-light-grey;
      &.correct {
        background-color: $color-correct;
      }
      &.incorrect {
        background-color: $color-incorrect;
      }
    }
  }
}
</style>

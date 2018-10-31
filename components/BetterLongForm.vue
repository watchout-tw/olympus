<template>
<div class="long-form">
  <div class="opening tcl-container">
    <div class="tcl-panel full-width tcl-left-right-margin with-top-bottom-margin with-double-top-margin">
      <h1 class="medium">{{ project.title }}</h1>
      <div class="paragraphs default-width" v-html="markdown(project.description)"></div>
    </div>
  </div>
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
  <div class="result tcl-container">
    <div class="tcl-panel full-width tcl-left-right-margin with-top-bottom-margin with-quad-top-margin" v-if="completed">
      <template v-if="doAfterClick('accumulateScore')">
        <div class="section-title small with-underline text-align-center"><span>測驗結果</span></div>
        <div class="text-align-center font-size-4x">{{ accumulatedScore }}</div>
      </template>
      <template v-if="doAfterClick('accumulateDetails')">
        <div class="section-title small with-underline text-align-center"><span>成份分析</span></div>
        <div>{{ accumulatedDetails }}</div>
      </template>
    </div>
    <div class="tcl-panel full-width with-top-bottom-margin with-quad-top-margin with-quad-bottom-margin" v-else>
      <div class="font-size-small text-align-center secondary-text">測驗尚未結束，同志仍須努力。</div>
    </div>
  </div>
  <div class="prompt-overlay" v-if="prompt.show">
    <div class="prompt" :class="prompt.classes">
      <div class="score text-align-center" v-if="doAfterClick('accumulateScore')">{{ prompt.content.score }}</div>
      <div class="message">{{ prompt.content.message }}</div>
    </div>
  </div>
</div>
</template>

<script>
import { knowsMarkdown } from 'watchout-common-functions/interfaces'

function resolve(obj, path) {
  path = path.split('.')
  var current = obj
  while(path.length) {
    if(typeof current !== 'object') {
      return undefined
    }
    current = current[path.shift()]
  }
  return current
}

export default {
  mixins: [knowsMarkdown],
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
    return {
      scenes,
      accumulatedScore: 0,
      accumulatedDetails: [],
      prompt: {
        show: false,
        classes: [],
        content: {
          score: null,
          message: null
        }
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
      return this.scenes.filter(scene => !scene.selectedOption).length === 0
    }
  },
  methods: {
    doAfterClick(actionName) {
      return this.project.sequence.afterClickActions.filter(action => action.name === actionName).length > 0
    },
    accumulateScore(option, plusMinus) {
      let offset = 0
      if(option.hasOwnProperty('score')) {
        offset = option.score * plusMinus
        this.accumulatedScore = this.accumulatedScore + offset
      }
      return offset
    },
    getAfterClickAction(actionName) {
      return this.project.sequence.afterClickActions.find(action => action.name === actionName)
    },
    getOptionDetailString(option) {
      let keys = this.getAfterClickAction('accumulateDetails').keys
      return keys.map(key => resolve(option.details, key)).join('-')
    },
    accumulateDetails(option, plusMinus) {
      let detailString = this.getOptionDetailString(option)
      if(plusMinus > 0) {
        this.accumulatedDetails.push(detailString)
      } else {
        let index = this.accumulatedDetails.indexOf(detailString)
        if(index > -1) {
          this.accumulatedDetails.splice(index, 1)
        }
      }
    },
    onClick(scene, option) {
      if(!scene.lock) {
        // accumulate
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
          let match = Object.keys(action.keyValues).map(key => {
            let baseVal = action.keyValues[key]
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
        setTimeout(() => { this.prompt.show = false }, 1500)

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

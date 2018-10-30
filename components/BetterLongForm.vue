<template>
<div class="long-form">
  <div class="description tcl-container">
    <div class="tcl-panel full-width tcl-left-right-margin with-top-bottom-margin">
      <h1 class="medium">{{ project.title }}</h1>
      <div class="paragraphs default-width" v-html="markdown(project.description)"></div>
    </div>
  </div>
  <div class="scenes tcl-container">
    <div class="scene tcl-panel full-width tcl-left-right-margin with-top-bottom-margin" :class="{ 'has-correct-answer': hasCorrectAnswer, locked: scene.lock }" v-for="scene in scenes" :key="scene.title" v-if="scene.show">
      <h2>{{ scene.title }}</h2>
      <div class="options form-field-many-inputs">
        <div class="option input button wrap" :class="{ immutable: scene.lock, selected: option === scene.selectedOption, correct: hasCorrectAnswer && option.isCorrect }" v-for="option in scene.options" :key="option.title" @click="onClick(scene, option)">
          <div class="details font-weight-bold" v-if="scene.selectedOption && option.details">
            <span v-if="option.details.time" class="latin-within-han first">{{ option.details.time.year }}</span>
            <span v-if="option.details.person">{{ option.details.person.name }}</span>
          </div>
          <h3 class="small font-weight-normal margin-top-bottom-4">{{ option.title }}</h3>
          <div class="details font-size-tiny secondary-text" v-if="scene.selectedOption && option.details">
            <span class="time latin-within-han first" v-if="option.details.time">{{ [option.details.time.year, option.details.time.month, option.details.time.date].filter(val => !!val).join('/') }}</span>
            <span v-if="option.details.person.title">{{ option.details.person.title }}</span>
            <span v-if="option.details.person">{{ option.details.person.name }}</span>
            <span class="platform">在{{ option.details.platform }}<template v-if="option.details.scenario">{{ option.details.scenario }}</template><template v-if="option.details.type">的{{ option.details.type }}</template></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="result tcl-container" v-if="completed">
    <div class="tcl-panel">
      <div class="text-align-center total-score">{{ totalScore }}</div>
    </div>
  </div>
  <div class="prompt-overlay" v-if="showPrompt">
    <div class="prompt">{{ promptContent }}</div>
  </div>
</div>
</template>

<script>
import { knowsMarkdown } from 'watchout-common-functions/interfaces'

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
      totalScore: 0,
      showPrompt: false,
      promptContent: null
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
    formatDetails(details) {
      let time = details.time ? [details.time.year, details.time.month, details.time.date].filter(val => !!val).join('/') : ''
      return time + (details.platform ? details.platform + '：' : '') + (details.title ? details.title : '') + details.person + (details.scenario ? details.scenario : '') + '的' + details.type
    },
    accumulateScore(option, plusMinus, prompt = false) {
      if(option.afterClick && option.afterClick.hasOwnProperty('score')) {
        let offset = option.afterClick.score * plusMinus
        this.totalScore = this.totalScore + offset
        if(prompt) {
          this.promptContent = offset >= 0 ? ('+' + offset) : offset
          this.showPrompt = true
          setTimeout(() => { this.showPrompt = false }, 1500)
        }
      }
    },
    onClick(scene, option) {
      if(!scene.lock) {
        if(scene.selectedOption) {
          this.accumulateScore(scene.selectedOption, -1)
        }
        this.accumulateScore(option, +1, true)
        if(!this.canChangeAnswer) {
          scene.lock = true
        }
        scene.selectedOption = option
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
    > .prompt {
      padding: 2rem;
      background-color: $color-watchout;
    }
  }
}
</style>

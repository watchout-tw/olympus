<template>
<div class="pop-quiz tcl-container">
  <div class="quiz tcl-panel full-width tcl-left-right-margin with-top-bottom-margin">
    <div class="before paragraphs" v-html="markdown(config.before)"></div>
    <div class="question primary">
      <span>{{ config.question.primary.before }}</span>
      <span>&nbsp;</span>
      <span class="blank">{{ selectedOption ? selectedOption.label : spaces }}</span>
      <span>&nbsp;</span>
      <span>{{ config.question.primary.after }}</span>
    </div>
    <div class="questionsecondary">
      <span>{{ config.question.secondary.before }}</span>
      <span class="blank">{{ selectedOption ? selectedOption.label : spaces }}</span>
      <span>{{ config.question.secondary.after }}</span>
    </div>
    <div class="options">
      <div class="option" :class="{ selected: selectedOption && selectedOption.value === option.value }" v-for="(option, index) of config.options" @click="selectedOption = option" :key="index">{{ getCircledDigit(index + 1) }}&nbsp;{{ option.label }}</div>
    </div>
  </div>
  <div class="submit tcl-panel full-width tcl-left-right-margin">
    <submit-button :classes="['musou']" :label="config.submitPrompt" :state.sync="submit.state" :message.sync="submit.message" :once="true" @click.native="onSubmit" />
  </div>
  <div class="after tcl-panel full-width tcl-left-right-margin with-top-bottom-margin with-double-top-margin with-double-bottom-margin with-padding bg-very-light-grey" v-if="done">
    <div class="paragraphs no-margin" v-html="markdown(config.after)"></div>
  </div>
</div>
</template>

<script>
import { knowsMarkdown } from 'watchout-common-functions/interfaces'
import SubmitButton from 'watchout-common-functions/components/button/Submit'
import * as STATES from 'watchout-common-functions/lib/states'
import { getCircledDigit } from '~/util/util'

const spaces = '　　'

export default {
  mixins: [knowsMarkdown],
  props: ['data', 'done'],
  data() {
    return {
      selectedOption: null,
      submit: {
        state: STATES.DEFAULT,
        message: null
      },
      spaces
    }
  },
  computed: {
    config() {
      return this.data.config
    }
  },
  methods: {
    getCircledDigit,
    onSubmit() {
      if(this.submit.state !== STATES.DEFAULT) {
        return
      }
      if(this.selectedOption) {
        this.submit.state = STATES.SUCCESS
        this.submit.message = '你選好了'
        this.$emit('update:done', true)
      } else {
        this.submit.state = STATES.FAILED
        this.submit.message = '你沒選啊'
      }
    }
  },
  components: {
    SubmitButton
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.pop-quiz {
  > .quiz {
    > .question.primary {
      margin: 1rem 0;
      font-size: 2rem;
      line-height: $line-height-compact;
    }
    > .question.secondary {
    }
    .blank {
      font-style: italic;
      border-bottom: 2px solid #000;
    }
    > .options {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin: 0.5rem 0;
      font-size: 1.75rem;
      line-height: $line-height-tight;
      > .option {
        margin: 0.25rem;
        cursor: pointer;
        &.selected {
          color: $color-musou;
        }
      }
    }
  }
}
</style>

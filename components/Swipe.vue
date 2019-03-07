<template>
<div class="swipe" :style="containerStyles">
  <div class="swipe-interaction" :class="interactionClasses">
    <div class="swipe-deck">
      <div class="swipe-desktop">
        <div class="message">{{ project.share.message }}</div>
        <share-to-platforms :classes="['cuboids']" :url="shareURL" />
      </div>
      <div v-for="(card, index) of cards" class="swipe-card" :data-card-index="index" :class="cardClasses(index)" :style="cardStyles(index)" :key="index">
        <label v-if="index > 0" class="index">{{ index }}</label>
        <template v-if="card.data.id === 'cover'">
          <h1 class="title medium">{{ card.data.title }}</h1>
        </template>
        <template v-else>
          <h2 class="title">{{ card.data.title }}</h2>
        </template>
        <div v-if="card.data.type === 'question'" class="paragraphs" v-html="markdown(card.data.question)"></div>
        <div v-else-if="card.data.type === 'text'" class="paragraphs" v-html="markdown(card.data.content)"></div>
        <div v-if="card.data.image" class="image" :style="{ backgroundImage: `url(${card.data.image.url})`, width: `${card.data.image.width}px`, height: `${card.data.image.height}px` }"></div>
      </div>
    </div>
    <div class="swipe-actions d-flex justify-content-center">
      <button class="swipe-action d-flex justify-content-center align-items-center" @click="swipe(swipeActionEnabled('left') ? -1 : 0)" :class="swipeActionClasses('left')"></button>
      <button class="swipe-action d-flex justify-content-center align-items-center" @click="swipe(swipeActionEnabled('right') ? +1 : 0)" :class="swipeActionClasses('right')"></button>
    </div>
  </div>
  <transition name="modal">
    <div v-if="showResult" class="swipe-result d-flex justify-content-center align-items-start" @click.self="showResult = showMore = false">
      <div class="result">
        <div class="question paragraphs first" v-html="markdown(activeCard.data.hasOwnProperty('recap') ? activeCard.data.recap : activeCard.data.question)"></div>
        <div class="answer" :class="activeCard.data.answer"></div>
        <div class="but paragraphs" v-html="markdown(activeCard.data.but)"></div>
        <template v-if="showMore">
          <div class="more">
            <div class="section" v-if="activeCard.data.more" v-for="(section, index) in activeCard.data.more" :class="section.type" :key="index">
              <template v-if="section.type === 'markdown'">
                <div class="content paragraphs a-text-only" v-if="section.content" v-html="markdown(section.content)"></div>
              </template>
              <template v-else-if="section.type === 'figure'">
                <iframe v-if="section.platform === 'infogram'" class="figure" :src="`https://e.infogram.com/${section.id}?src=embed`" width="100%" :height="section.height" scrolling="no" frameborder="0"></iframe>
                <div class="description paragraphs" v-if="section.description" v-html="markdown(section.description)"></div>
              </template>
            </div>
          </div>
          <div class="buttons form-field-many-inputs form-field-align-center">
            <button class="input button small cuboid default" @click="showResult = showMore = false">{{ nextCardPrompt }}</button>
          </div>
        </template>
        <div v-else class="buttons form-field-many-inputs form-field-align-center">
          <button class="input button small cuboid default" @click="showResult = showMore = false">{{ nextCardPrompt }}</button>
          <button class="input button small cuboid musou" @click="showMore = true">繼續說下去</button>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import { knowsDOM, knowsMarkdown, knowsWatchout } from 'watchout-common-functions/interfaces'
import ShareToPlatforms from 'watchout-common-functions/components/ShareToPlatforms'

export default {
  mixins: [knowsDOM, knowsMarkdown, knowsWatchout],
  props: ['module', 'project', 'shareURL'],
  data() {
    let cards = this.project.cards.map(card => ({
      data: card,
      ...card.options && { options: card.options },
      el: null,
      swingObj: null,
      offset: {
        x: 0
      },
      state: {
        dragging: false,
        isOut: false,
        hasBeenOut: false
      }
    }))
    return {
      cards,
      cardSelector: '.swipe-card',
      stack: null,
      activeCardIndex: -1,
      mirror: [], // this is a mirror of the stack
      lastSwipe: 0,
      showResult: false,
      showMore: false
    }
  },
  computed: {
    activeCard() {
      return this.activeCardIndex >= 0 && this.activeCardIndex < this.cards.length
        ? this.cards[this.activeCardIndex]
        : null
    },
    topCard() {
      return this.mirror.length > 0 ? this.cards[this.mirror[this.mirror.length - 1]] : null
    },
    containerStyles() {
      return this.project.container && this.project.container.styles ? this.project.container.styles : {}
    },
    deckIsEmpty() {
      return this.mirror.length < 1
    },
    interactionClasses() {
      let classes = []
      if(this.deckIsEmpty) {
        classes.push('empty')
      }
      return classes
    },
    nextCardPrompt() {
      return this.deckIsEmpty ? '結束了喔' : '下一題謝謝'
    }
  },
  watch: {
    showResult() {
      const html = document.documentElement
      const body = document.body
      const className = 'no-scroll'
      if(this.showResult) {
        this.addClass(html, className)
        this.addClass(body, className)
      } else {
        this.removeClass(html, className)
        this.removeClass(body, className)
      }
    }
  },
  methods: {
    cardClasses(index) {
      let classes = []
      if(this.cards[index]) {
        if(this.cards[index].state.dragging) {
          classes.push('dragging')
        }
        if(this.cards[index].state.isOut) {
          classes.push('is-out')
        }
      }
      return classes
    },
    cardStyles(index) {
      let offset = index % 10 * 2
      let styles = {
        marginTop: `${offset}px`,
        marginLeft: `${offset}px`
      }
      return styles
    },
    swipeActionEnabled(action) {
      return this.topCard && this.topCard.options && this.topCard.options.hasOwnProperty(action)
    },
    swipeActionClasses(action) {
      let classes = []
      if(this.swipeActionEnabled(action)) {
        classes.push(this.topCard.options[action].type)
        classes.push('enabled')
      } else {
        classes.push('disabled')
      }
      return classes
    },
    swipeActionTag(action) {
      return this.topCard && this.topCard.options && this.topCard.options.hasOwnProperty(action) ? this.topCard.options[action] : 'N/A'
    },
    swipe(direction) {
      if(direction !== 0 && this.topCard) {
        this.topCard.state.dragging = true
        this.topCard.el.parentNode.appendChild(this.topCard.el) // move dom of topCard to the front
        // card.throwWhere { springThrowOut.setVelocity(0) }
        this.topCard.swingObj.throwOut(direction * 200, Math.random() * 200 * (Math.round(Math.random()) * 2 - 1))
        // modify swing to set springThrowOut velocity to 1
      }
    }
  },
  mounted() {
    const Swing = require('swing')
    const elements = [].slice.call(document.querySelectorAll(this.cardSelector))
    const config = {
      allowedDirections: [Swing.Direction.LEFT, Swing.Direction.RIGHT],
      throwOutConfidence: (xOffset, yOffset, element) => {
        const xConfidence = Math.min(Math.abs(xOffset) / element.offsetWidth * 2, 1)
        const yConfidence = Math.min(Math.abs(yOffset) / element.offsetHeight * 2, 1)
        return Math.max(xConfidence, yConfidence)
      },
      throwOutDistance: () => {
        return document.querySelector(this.cardSelector).offsetWidth * 1.05 * (1 + window.innerWidth / 320 * 0.05)
      }
    }
    this.$set(this, 'stack', Swing.Stack(config))

    elements.reverse()
    elements.forEach((el, index) => {
      this.cards[this.cards.length - index - 1].el = el
      this.cards[this.cards.length - index - 1].swingObj = this.stack.createCard(el)
      this.mirror.unshift(index)
    })
    this.stack.on('dragstart', e => {
      const index = +e.target.dataset.cardIndex
      if(this.cards[index]) {
        this.cards.forEach(card => {
          card.state.dragging = false
        })
        this.cards[index].state.dragging = true
      }
      this.activeCardIndex = index
    })
    this.stack.on('dragmove', e => {
      const index = +e.target.dataset.cardIndex
      if(this.cards[index]) {
        this.cards[index].offset.x = e.offset
      }
    })
    this.stack.on('throwinend', e => {
      const index = +e.target.dataset.cardIndex
      if(this.cards[index]) {
        this.cards[index].state.dragging = false
        this.cards[index].state.isOut = false
        this.cards[index].state.hasBeenOut = false
      }
      if(this.mirror.indexOf(index) < 0) {
        this.mirror.push(index)
      }
    })
    this.stack.on('throwout', e => {
      this.lastSwipe = e.throwDirection.toString().toLowerCase().indexOf('right') > -1 ? +1 : -1
    })
    this.stack.on('throwoutend', e => {
      const index = +e.target.dataset.cardIndex
      if(this.cards[index]) {
        this.cards[index].state.isOut = true
      }
      // this.stack.getCard(e.target).destroy()
      this.activeCardIndex = index
      if(this.cards[index].state.isOut === true && this.cards[index].state.hasBeenOut === false) {
        // first remove it from mirror
        let toRemove = this.mirror.indexOf(index)
        if(toRemove >= 0 && toRemove < this.mirror.length) {
          this.mirror.splice(toRemove, 1)
        } else {
          console.error('broken mirror')
        }
        // show result if card is a question
        if(this.cards[index].data.type === 'question') {
          this.showResult = true
        }
        // flag card as has-been-out
        this.cards[index].state.hasBeenOut = true
      }
    })
  },
  components: {
    ShareToPlatforms
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

$color-yes: $color-watchout;
$color-no: $color-musou;
$color-yes-darker: $color-watchout-darker;
$color-no-darker: $color-musou-darker;

$color-paper-white: #fffdfd;

@mixin line($size, $color, $rotation) {
  content: '';
  display: block;
  width: $size * 1.75;
  height: $size * 0.25;
  background: $color;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate($rotation);
}
@mixin forward-slash($size, $color) {
  @include line($size, $color, -45deg);
}
@mixin backward-slash($size, $color) {
  @include line($size, $color, 45deg);
}

// vertical breakpoints
@mixin v-bp-sm-down {
  @media (max-height: #{$bp-sm}) {
    @content;
  }
}
@mixin v-bp-sm-up {
  @media (min-height: #{$bp-sm}) {
    @content;
  }
}
@mixin v-bp-md-up {
  @media (min-height: #{$bp-md}) {
    @content;
  }
}

.swipe {
  z-index: 0;
  > .swipe-interaction {
    position: relative;
    width: 100%;
    max-width: 16rem;
    margin: 0 auto;
    padding: 1.5rem 0;
    @include bp-sm-up {
      max-width: 20rem;
      padding: 2rem 0;
    }
    @include bp-md-up {
      padding: 8vw 0;
    }

    > .swipe-deck {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      > .swipe-desktop {
        width: 100%;
        padding: 1.5rem;
        position: absolute;
        > .message {
          margin: 1rem 0;
        }
      }
      > .swipe-card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 1rem;
        background: $color-paper-white;
        cursor: pointer;

        @include cuboid(2px, $color-cuboid-default-darker, $color-cuboid-default);

        // shadows
        @include shadow-minimum;
        &.is-out {
          @include shadow;
        }
        &.dragging {
          @include shadow-lifted;
        }

        > .paragraphs {
          max-width: 14rem;
        }
        > .image {
          width: 100%;
          margin: 0 auto;
          background-size: contain;
        }
        > .index {
          display: block;
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          text-align: center;
          line-height: 2rem;
          background-color: rgba(black, 0.1);
          color: rgba(black, 0.25);
        }
        &.is-out {
          > .index,
          > .title,
          > .paragraphs,
          > .image,
          > .actions {
            opacity: 0.35;
          }
        }
      }
    }
    > .swipe-actions {
      margin-top: 2rem;

      $button-depth: 4px;
      > .swipe-action {
        position: relative;
        width: 5rem;
        height: 5rem;
        margin: 0 1rem;
        border: none;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;

        &.disabled {
          background: $color-disable-button-grey;
          box-shadow: $button-depth $button-depth 0 $color-generic-grey;
        }
        &.YES {
          background-color: rgba($color-yes, 0.94);
          box-shadow: $button-depth $button-depth 0 $color-yes-darker;
          @include checkmark(1.5rem, white);
        }
        &.NO {
          background-color: rgba($color-no, 0.94);
          box-shadow: $button-depth $button-depth 0 $color-no-darker;
          &:before {
            @include forward-slash(1.5rem, white);
          }
          &:after {
            @include backward-slash(1.5rem, white);
          }
        }
        &:active {
          box-shadow: none;
          transform: translate($button-depth, $button-depth);
        }
      }
    }
  }
  > .swipe-result {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(black, 0.65);
    z-index: $z-interaction;
    padding-top: $nav-height;
    transition: opacity .3s ease;

    > .result {
      position: relative;
      margin-top: 2rem;
      max-width: 24rem;
      max-height: 22rem;
      @include v-bp-md-up {
        margin-top: 4rem;
        max-height: 32rem;
      }
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding: 1rem;
      background: white;
      @include shadow-lifted-darker;

      > .more {
        h3 {
          margin: 0.25rem 0;
        }
      }
    }
  }
}
</style>

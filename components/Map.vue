<template>
<article class="map">
  <section class="question">
    <div class="introduction textgroup" v-html="markdown(project.question.introduction)"></div>
    <div class="content">
      <blockquote>Taiwan will be the first <em class="blank" v-html="interactionSelectedOption"></em> in Asia to legalize same-sex marriage.</blockquote>
      <p>
        <span>翻譯：台灣會是亞洲第一個同性婚姻合法化的</span>
        <em class="blank" v-html="interactionSelectedOption"></em>
      </p>
      <div class="interaction" :class="project.interaction.type">
        <ul class="d-flex">
          <li v-for="(option, index) in project.interaction.options" :id="'interaction-option-' + option.name" :key="option.name" @click="interactionSelectOption($event, index)" :class="{'d-flex': true, 'flex-row': true, selected: project.interaction.selection == index}"><div class="index">{{ project.circledDigits[index + 1] }}</div><div class="value">{{ option.name }}</div></li>
        </ul>
        <button class="musou" @click="interactionSubmit">{{ project.question.go }}</button>
      </div>
    </div>
    <div class="explanation textgroup" :class="project.interaction.done ? 'visible' : 'hidden'" v-html="markdown(project.question.conclusion)"></div>
  </section>
  <section class="answers">
    <div class="reminder" :class="project.interaction.done ? 'd-none' : 'd-block'">{{ project.reminder.description }}</div>
    <div class="answer graph" :class="project.interaction.done ? 'visible' : 'hidden'">
      <div class="textgroup">
        <div class="title"><h2>{{ project.graphs.tally.title }}</h2></div>
        <div class="description" v-html="markdown(project.graphs.tally.description)"></div>
      </div>
      <div class="atlas atlas-tally d-flex">
        <count v-for="(count, id) of project.tally" :raw="raw" :count="count" :key="'tally-count'+id"></count>
      </div>
    </div>
    <div class="answer graph" :class="project.interaction.done ? 'visible' : 'hidden'">
      <div class="textgroup">
        <div class="title"><h2>{{ project.graphs.regions.title }}</h2></div>
        <div class="description" v-html="markdown(project.graphs.regions.description)"></div>
      </div>
      <div class="atlas atlas-regions d-flex flex-wrap">
        <region v-for="(region, id) of project.regions" :raw="raw" :region="region" :debug="project.debug" :key="id"></region>
      </div>
    </div>
    <div class="answer graph" :class="project.interaction.done ? 'visible' : 'hidden'">
      <div class="textgroup">
        <div class="title"><h2>{{ project.graphs.world.title }}</h2></div>
        <div class="description" v-html="markdown(project.graphs.world.description)"></div>
      </div>
      <world :raw="raw" :debug="project.debug"></world>
    </div>
    <div class="answer conclusion" :class="project.interaction.done ? 'visible' : 'hidden'">
      <div class="textgroup">
        <div class="title"><h2>{{ project.conclusion.title }}</h2></div>
        <div class="description" v-html="markdown(project.conclusion.description)"></div>
      </div>
    </div>
  </section>
  <section class="call">
    <div class="textgroup">
      <div class="title"><h2>{{ project.call_for_action.title }}</h2></div>
      <div class="description" v-html="markdown(project.call_for_action.description)"></div>
    </div>
  </section>
</article>
</template>

<script>
import knowsMarkdown from 'watchout-common-functions/interfaces/knowsMarkdown'
import Count from '~/components/map/Count'
import Region from '~/components/map/Region'
import World from '~/components/map/World'

export default {
  mixins: [knowsMarkdown],
  props: ['project', 'module'],
  computed: {
    interactionSelectedOption() {
      const { interaction } = this.project
      return interaction.selection > -1 ? interaction.options[interaction.selection].name : '　　'
    }
  },
  data() {
    return {
      raw: []
    }
  },
  mounted() {
    this.raw = require('~/data/map/' + this.project.dataSource)

    // update text inside markdown
    const data = {
      'data-tally-total': this.raw.length,
      'data-title': this.project.title
    }
    for(let key in data) {
      let es = document.getElementsByClassName(key)
      for(let e of es) {
        e.innerText = data[key]
      }
    }
  },
  methods: {
    interactionSelectOption(event, selectionIndex) {
      if(!this.project.interaction.done) {
        this.project.interaction.selection = selectionIndex
      }
    },
    interactionSubmit(event) {
      const { interaction } = this.project
      if(!interaction.done && interaction.selection > -1) {
        this.project.interaction.done = true
      }
    }
  },
  components: {
    Count,
    Region,
    World
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.map {
  > section {
    box-sizing: content-box;
    width: auto;
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 1rem;
  }
  > .question {
    > .content {
      margin-bottom: 2rem;
      > blockquote, > p {
        margin: 0 0 1rem;
      }
      > blockquote {
        @include font-serif;
        font-size: 2rem;
        font-weight: normal;
        @include bp-md-up {
          font-size: 3rem;
        }
      }

      em.blank {
        border-bottom: 2px black solid;
        @include bp-md-up {
          border-bottom-width: 4px;
        }
      }

      .interaction {
        margin: 1rem 0;
        font-size: 1.75rem;

        &.multiple-choice {
          > ul {
            margin-bottom: 1rem;

            > li {
              margin: 0.25rem 1rem 0.25rem 0;
              padding: 0;
              cursor: pointer;

              > .index {
                display: block;
                font-family: $font-sans-serif;
                line-height: 1.25;
                margin-right: 0.25rem;
              }
              > .value {
                display: block;
                line-height: 1;
              }
              &:hover, &.selected {
                color: $color-musou;
              }
            }
          }
        }
        > button {
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          background: rgba($color-musou, 0.65);
          cursor: pointer;
          &:hover, &:active {
            background: rgba($color-musou, 0.85);
            @include shadow;
          }
        }
      }
    }
    > .explanation {
      padding: 1rem;
      background: rgba(black, 0.12);
    }
  }
  > .answers {
    > .reminder {
      box-sizing: content-box;
      // @include sticky; TODO
      top: 50%;
      width: 12rem;
      margin: 0 auto;
      padding: 0.5rem 1rem;
      border: 4px solid black;
      border-radius: 2px;
      background: white;
      z-index: $z-below-nav;
    }
    > .answer {
      width: auto;
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
}


.hidden {
  visibility: hidden;
}

.atlas {
  max-width: 60rem;
  margin: 0 auto;
  > .draw {
    width: 100%;
    > svg {
      width: 100%;
    }
  }
}

.atlas-with-draw {
  .draw {
    $transitionDuration: 0.25s;
    circle.center {
      fill: none;
      stroke: none;
    }
    g.quote {
      rect {
        fill: $color-musou;
        stroke: none;
        opacity: 0.25;
        transition: opacity $transitionDuration;
      }
      text {
        fill: black;
        opacity: 0.75;
        transition: opacity $transitionDuration;
        &.media {
          font-size: 0.65rem;
          font-weight: bold;
        }
        &.and {
          opacity: 0.5;
          font-size: 0.75rem;
          font-weight: bold;
        }
      }
    }
    g.quote:hover {
      rect {
        opacity: 0.85;
      }
      text {
        opacity: 1;
        &.and {
          opacity: 0.5;
        }
      }
    }
    g.quote.yes {
      rect {
        fill: $color-watchout;
      }
    }
  }

  .draw.debug {
    circle.center {
      fill: $color-musou;
      stroke: none;
    }
    g.quote {
      rect {
        fill: none;
        stroke: $color-musou;
      }
      text {
        opacity: 0.25;
      }
    }
  }
}

span.country,
span.place {
  display: inline-block;
  margin: 1px;
  padding: 1px;
}
span.country {
  background: rgba($color-watchout, 0.25);
}
span.place {
  background: rgba($color-musou, 0.25);
}
</style>

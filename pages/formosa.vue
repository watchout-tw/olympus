<template>
<div class="page formosa">
  <div class="opening">
    <div class="opening-scene-container tcl-container no-margin">
      <div class="opening-scene tcl-panel tcl-left-right-margin with-top-bottom-margin">
        <div class="content">
          <h1 class="small">{{ textMap.title }}</h1>
          <div class="paragraphs vertical" v-html="markdown(textMap.intro)"></div>
          <div class="start" @click="start">{{ textMap.start }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="mission" ref="mission">
    <div class="commander"></div>
    <div class="response-text">{{ responseText }}</div>
    <div class="book-container tcl-container no-margin">
      <div class="book-panel tcl-panel tcl-left-right-margin">
        <div class="book">
          <div class="content">
            <div class="page" v-for="(page, pageIndex) of pages" :key="pageIndex" v-show="pageIndex === activePageIndex" :style="{ backgroundImage: page.image ? `url(/formosa/${page.image})` : '' }">
              <h3 v-if="page.beforeTitle" v-html="spacingOptimizer(page.beforeTitle)"></h3>
              <h2 v-if="page.title" v-html="spacingOptimizer(page.title)"></h2>
              <div v-if="page.bodyText" v-html="markdown(page.bodyText)"></div>
            </div>
          </div>
        </div>
        <div class="prev" :class="{ inactive: activePageIndex < 1 }" @click="goPrevPage"></div>
        <div class="next" :class="{ inactive: activePageIndex > pages.length - 2 }" @click="goNextPage"></div>
      </div>
    </div>
    <div class="control-container tcl-container no-margin">
      <div class="controls tcl-panel tcl-left-right-margin with-top-bottom-margin">
        <div class="form-field-buttons no-wrap no-margin">
          <button class="input button musou dark" @click="pageIsOkay">{{ textMap.isOkay }}</button>
          <button class="input button musou dark" @click="pageIsNotOkay">{{ textMap.isNotOkay }}</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { knowsMarkdown } from 'watchout-common-functions/interfaces'
import { spacingOptimizer, PUNCT } from 'watchout-common-functions/lib/bunko'

let textMap = {
  title: '特務學校',
  intro: '你是新分發的特務。你被教導愛黨、愛國、絕對忠誠。共匪隨時隨地都在滲透我正統中國，絕不能讓他們的詭計得逞。\n\n' +
    '近年來，國內情勢動盪，據說，有一群所謂「民主運動」的叛亂份子，似乎正在伺機而動。身為特務人員，你的職責是蒐證、調查，揭發叛亂份子的陰謀。',
  start: '訓練開始',
  isOkay: '報告，這沒問題',
  isNotOkay: '報告，這有問題'
}
let responses = {
  moveAlong: '動作快。',
  tooEasy: '全都有問題？你以為當特務這麼簡單嗎？',
  areYouSure: '你確定嗎？',
  outOfScope: '眼睛看哪裡啊！',
  emptySelection: '哪裡有問題不會說清楚嗎？',
  impossible: '怎麼可能沒問題。'
}
let pages = [
  {
    image: 'cover.jpg'
  },
  {
    image: 'intro-page.png'
  },
  {
    bodyText: '玉山蒼蒼，碧海茫茫，婆娑之洋，美麗之島，是我們生長的家鄉。我們深愛這片土地及啜飲其乳汁長大的子民，更關懷我們未來共同的命運。同時我們相信，決定我們未來道路和命運，不再是任何政權和這政權所豢養之文人的權利，而是我們所有人民大眾的權利。'
  },
  {
    image: 'directory-1.jpg'
  },
  {
    image: 'directory-2.jpg'
  },
  {
    bodyText: '國民黨政府面對這一熱烈的選擧活動，在其政治危機來臨時驚慌失措，急急忙忙下令停止選擧，並施展一連串高壓手段，企圖摧毀這一股民主運動的洪流，這造成半年來我們社會的緊張不安。'
  },
  {
    bodyText: '三十年來，國民黨已禁忌、神話隱蔽我們國家社會的許許多多問題，扼殺了我們政治的生機，阻礙了社會的進步。'
  },
  {
    bodyText: '「美麗島」雜誌的目標就是要推動新生代政治運動。我們將提供廣大的園地給所有不願意讓禁忌、神話、權勢束縛，而願意站在自己的土地上講話的同胞，共同來耕耘這美麗之島。'
  },
  {
    bodyText: '但是，三十年來在意識上忽視群眾、背離群眾的國民黨在運動過程中驚奇地發現，「群眾突然之間成為可見的，且很穩固地盤踞在社會最顯明的地帶。」國民黨面對這一情勢，迷惘無助，無法正確估計其群眾基礎，於是，順應世界潮流之民主化意識與維續政權的統治意識相互掙扎、扯裂。'
  },
  {
    bodyText: '國民黨就在這種掙扎、扯裂、徬徨的矛盾心理下迎接新生一代的挑戰！'
  }
]

export default {
  mixins: [knowsMarkdown],
  data() {
    return {
      textMap,
      responses,
      pages,
      activePageIndex: 0,
      selectedText: null,
      responseText: responses.moveAlong,
      PUNCT
    }
  },
  computed: {
    activePage() {
      return pages[this.activePageIndex]
    },
    activePageText() {
      return '' +
        (this.activePage.beforeTitle || PUNCT.SLASH) +
        (this.activePage.title || PUNCT.SLASH) +
        (this.activePage.bodyText || PUNCT.SLASH)
    }
  },
  methods: {
    start() {
      if(window) {
        window.scroll({
          top: this.$refs.mission.offsetTop - 16,
          behavior: 'smooth'
        })
      }
    },
    goPrevPage() {
      if(this.activePageIndex > 0) {
        this.activePageIndex = this.activePageIndex - 1
      }
      this.responseText = responses.moveAlong
    },
    goNextPage() {
      if(this.activePageIndex < this.pages.length - 1) {
        this.activePageIndex = this.activePageIndex + 1
      }
      this.responseText = responses.moveAlong
    },
    pageIsOkay() {
      this.responseText = responses.impossible
    },
    pageIsNotOkay() {
      this.getSelectedText()
    },
    getSelectedText() {
      let selectedText = null
      if(typeof window.getSelection !== 'undefined') {
        selectedText = window.getSelection().toString()
      } else if(typeof document.selection !== 'undefined' && document.selection.type === 'Text') {
        selectedText = document.selection.createRange().text
      }
      if(selectedText) {
        selectedText = selectedText.trim()
        if(this.activePage.bodyText === selectedText) {
          this.responseText = responses.tooEasy
        } else if(this.activePageText.includes(selectedText)) {
          this.responseText = responses.areYouSure
        } else {
          this.responseText = responses.outOfScope
        }
      } else {
        this.responseText = responses.emptySelection
      }
      this.selectedText = selectedText
    },
    spacingOptimizer
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';
@import 'assets/draw';

$darkness: #202020;
$secret: $color-musou;
$light: #EFEFEF;
$mission: #DDD;
$page: #DFE2DB;

@mixin move-to-front {
  z-index: 2;
}
@mixin vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 0.0625rem;
}

.paragraphs.vertical {
  margin: 0 1em;
  > p {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0;
    margin-left: 1rem;
    &:last-child {
      margin-left: 0;
    }
  }
}
.input.button.musou.dark {
  color: black;
  font-weight: bold;
}

.page.formosa {
  > .opening {
    background-color: $darkness;
    > .opening-scene-container {
      padding: 1rem 0;
      > .opening-scene {
        > .content {
          width: 100%;
          max-height: 28rem;
          @include vertical-text;
          color: $secret;
          > .start {
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 0.75rem 0.5rem;
            background-color: $secret;
            font-size: 1.25rem;
            font-weight: bold;
            color: $darkness;
          }
        }
      }
    }
  }
  > .mission {
    position: relative;
    padding: 1rem 0;
    background-color: $mission;
    > .commander {
      width: 4rem;
      height: 4rem;
      margin-left: 1rem;
      background-image: url('/formosa/policeman.png');
      background-size: contain;
      background-position: center center;
      @include move-to-front;
      @include tcl-md {
        position: absolute;
        top: 1rem;
      }
    }
    > .response-text {
      @include vertical-text;
      position: absolute;
      top: -0.625rem;
      left: 5rem;
      margin: 0;
      padding: 0.75rem 0.5rem;
      max-height: 12.5rem;
      border: 2px solid $secret;
      border-radius: 0.125rem;
      font-weight: bold;
      color: $secret;
      @include move-to-front;
    }
    > .book-container {
      > .book-panel {
        > .book {
          @include rect(3/4);
          width: 100%;
          margin: 0 auto;
          > .content {
            > .page {
              width: 100%;
              height: 100%;
              padding: 2.25rem;
              background-color: $page;
              background-size: cover;
              background-position: center center;
              @include vertical-text;
              @include shadow-expanded;
              font-size: 1.25rem;
            }
          }
        }
        > .prev,
        > .next {
          position: absolute;
          width: 2rem;
          height: 2rem;
          background-color: $light;
          &.inactive {
            opacity: 0.25;
          }
        }
        > .prev {
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          @include arrow(0.75rem, left);
        }
        > .next {
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          @include arrow(0.75rem, right);
        }
      }
    }
  }
}
</style>

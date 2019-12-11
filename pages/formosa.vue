<template>
<div class="page formosa">
  <div class="opening">
    <div class="opening-scene-container tcl-container no-margin">
      <div class="opening-scene tcl-panel tcl-left-right-margin with-top-bottom-margin">
        <div class="content">
          <h1 class="small">{{ textMap.title }}</h1>
          <div class="paragraphs vertical" v-html="markdown(textMap.intro)"></div>
          <div class="action start" @click="start">
            <label>{{ textMap.start }}</label>
            <div class="arrow"></div>
          </div>
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
            <div class="page" v-for="(page, pageIndex) of pages" :key="`page-${pageIndex}`" v-show="pageIndex === activePageIndex" :style="{ backgroundImage: page.image ? `url(/formosa/${page.image})` : '' }">
              <h4 v-if="page.beforeTitle" v-html="spacingOptimizer(page.beforeTitle)" class="before-title"></h4>
              <h3 v-if="page.title" v-html="spacingOptimizer(page.title)" class="title"></h3>
              <div v-if="page.bodyText" class="body">
                <span v-for="(segment, segmentIndex) of page.bodyTextSegements" :key="`segment-${segmentIndex}`" class="selectable" :class="{ selected: segment.isSelected }" @click="selectSegment($event, segment)">{{ segment.content }}</span>
              </div>
              <div v-if="page.result && pagesIX[pageIndex].showResult && page.hasText" v-html="markdown(page.result)" class="result"></div>
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
          <button class="input button musou dark" @click="pageIsOkay" v-html="spacingOptimizer(isOkayText)"></button>
          <button class="input button musou dark" @click="pageIsNotOkay" v-html="spacingOptimizer(isNotOkayText)"></button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { knowsFSCache, knowsMarkdown, knowsWatchout } from 'watchout-common-functions/interfaces'
import { spacingOptimizer, PUNCT } from 'watchout-common-functions/lib/bunko'
import * as info from '~/data/info'
import projectCoverImage from '~/static/formosa/project-cover.png'

let textMap = {
  title: '特務學校',
  description: '你是新分發的特務，愛黨、愛國、絕對忠誠。你的職責是蒐證、調查，揭發叛亂份子的陰謀。',
  intro: '你是新分發的特務。你被教導愛黨、愛國、絕對忠誠。共匪隨時隨地在滲透我正統中國，絕不能讓他們的詭計得逞。\n\n據報，近期有所謂「民主」的「黨外」份子正伺機而動。身為特務人員，你的職責是蒐證、調查，揭發叛亂份子的陰謀，保衛國家。',
  start: '訓練開始',
  isOkay: '報告，這沒問題',
  isNotOkay: '報告，這有問題',
  confirm: '報告，確定！',
  notSure: '報告，不確定！'
}

let responses = {
  moveAlong: '動作快。',
  start: '翻開這本《美麗島》，找出叛亂的證據。',
  selectText: '點選有問題的句子，要仔細點！',
  tooEasy: '全都有問題？你以為當特務這麼簡單？',
  areYouSure: '你確定嗎？',
  okay: '這不是重點，繼續往下。',
  outOfScope: '眼睛看哪裡啊！',
  emptySelection: '哪裡有問題是不會標記清楚嗎？',
  impossible: '怎麼可能沒問題。',
  wellDone: '幹得不錯，重點都有抓到。繼續往下。',
  notGoodEnough: '有抓到一些重點了，還可以更好。',
  missingTarget: '完全沒有抓到重點，重來！'
}

const RES_SQ_START = 1
const RES_SQ_TUTORIAL = 2
const RES_SQ_PASS = 3

let defaultResult = '尚未構成刑責。'

let pages = [
  {
    image: 'cover-4-5.jpg'
  },
  {
    beforeTitle: '⬤ 發刊詞 ⬤',
    title: '共同來推動新生代政治運動！',
    bodyText: '今年是決定我們未來道路和命運的歷史關鍵時刻，動盪的世局和暗潮汹湧的台灣政治、社會變遷在在逼使我們在一個新的世代來臨之前抉擇我們未來的道路。歷史在試煉著我們！'
  },
  {
    image: 'directory-1.jpg'
  },
  {
    image: 'directory-2.jpg'
  },
  {
    bodyText: '國民黨政府面對這一熱烈的選擧活動，在其政治危機來臨時驚慌失措，急急忙忙下令停止選擧，並施展一連串高壓手段，企圖摧毀這一股民主運動的洪流，這造成半年來我們社會的緊張不安。',
    targets: [
      '高壓手段',
      '企圖摧毀',
      '緊張不安'
    ],
    result: '誣指政府以高壓手段，摧殘民主運動，造成社會緊張不安。傳播不實消息，觸犯懲治叛亂條例第六條。'
  },
  {
    bodyText: '三十年來，國民黨以禁忌、神話隱蔽我們國家社會的許多問題，扼殺了我們政治的生機，阻礙了社會的進步。「美麗島」雜誌的目標就是要推動新生代政治運動。我們將提供廣大的園地，給所有願意站在自己的土地上講話的同胞，共同耕耘這美麗之島。',
    targets: [
      '扼殺了我們政治的生機'
    ],
    result: '誣指本黨扼殺政治生機。傳播不實消息，觸犯懲治叛亂條例第六條。'
  },
  {
    bodyText: '三十年來，忽視群衆、背離群衆的國民黨驚奇地發現，「群衆突然成為可見的，且很穩固地盤踞在社會最顯明的地帶。」國民黨面對這一情勢，迷惘無助，無法正確估計其群衆基礎，於是，順應世界潮流之民主化意識與維續政權的統治意識相互掙扎、扯裂。',
    targets: [
      '忽視群衆',
      '背離群衆',
      '群衆基礎'
    ],
    result: '攻訐本黨忽視群衆，背離群衆，無群衆基礎，並稱本黨黨制專政，其偏頗不實旨在打擊本黨。'
  },
  {
    bodyText: '國民黨政府依賴特務爲統治工具，表現在這次危機中的，便是軍事特務統治傾向的加強。半年多以來，從余登發案、許信良案，到最近的「七二八」台中事件，「潮流」陳博文事件都是這種傾向加強的結果。',
    targets: [
      '特務',
      '余登發'
    ],
    result: '表現懼怕軍警治安人員之心態，有利於叛徒余登發之宣傳，觸犯懲治叛亂條例第七條。'
  },
  {
    bodyText: '一年多以來，我們看到世界各地許多獨裁腐敗的證券紛紛垮台，如伊朗的巴勒維、尼加拉瓜的蘇慕沙、烏干達的阿敏，這是非偶發、非獨特、非區域性的事件，它標示了一個信念：獨裁腐敗政權的最後命運是在全國上下一致的憤怒反對聲中走上滅亡的悲慘道路。',
    targets: [
      '巴勒維',
      '蘇慕沙',
      '阿敏'
    ],
    result: '舉巴勒維、蘇幕沙、阿敏之垮台，似別具用心之暗示。'
  },
  {
    bodyText: '玉山蒼蒼，碧海茫茫，婆娑之洋，美麗之島，我們豈能容忍，情同手足的弟兄在此相殘；我們豈能容忍，無知之徒縱情地摧殘我美麗家鄉。',
    targets: [
      '手足',
      '相殘'
    ],
    result: '言手足弟兄相殘，受無知之徒摧殘，詞義隱晦有台獨意識。'
  },
  {
    bodyText: '如此種種，誰說不是軍事統治已出現了明顯的徵兆？權力如果繼續如此濫用的話，當政府和人民間的衝突節節升高之後，其終極的後果，誰能說不會發展成為與民為敵的內戰？',
    targets: [
      '政府和人民間的衝突',
      '內戰'
    ],
    result: '政府與人民間衝突，終將成為內戰，似有預見而不違背其本意，有鼓煽民眾背叛政府之作用。具煽動顛覆政府陰謀，觸犯懲治叛亂條例第二條。'
  },
  {
    bodyText: '將中華民國的法統奠基在三十多前選出的中央民意代表終身職，已令世人覺其荒誕無稽，啼笑皆非！中華民國立國，原有其滂礡之氣、千秋之勢，奈何半世紀後，千百名中央民意代表老態龍鍾，倚仗而行，怎不令人為之黯然神傷，喟然嘆惋！',
    targets: [
      '中央民意代表終身職'
    ],
    result: '攻訐基本國策及立國法統，具煽動性。違背國策之言論有意圖破壞國體之陰謀，觸犯懲治叛亂條例第二條第三項。'
  }
]

export default {
  mixins: [knowsFSCache, knowsMarkdown, knowsWatchout],
  data() {
    for(let i = 0; i < pages.length; i++) {
      if(pages[i].bodyText) {
        let tokens = pages[i].bodyText.split(new RegExp(`([${PUNCT.COMMA}${PUNCT.FSTOP}${PUNCT.EXCLA}${PUNCT.Q}${PUNCT.PAUSE}${PUNCT.L.QUOTE}${PUNCT.R.QUOTE}])`))
        let segments = []
        for(let j = 0; j < tokens.length; j += 2) {
          let content = tokens[j] + (j + 1 < tokens.length ? tokens[j + 1] : '')
          if(content) {
            segments.push({
              content,
              isSelected: false
            })
          }
        }
        pages[i].bodyTextSegements = segments
      }
      if(!pages[i].result) {
        pages[i].result = defaultResult
      }
      pages[i].hasText = !(!pages[i].beforeTitle && !pages[i].title && !pages[i].bodyText)
    }
    let pagesIX = pages.map(page => ({
      showResult: false
    }))
    return {
      textMap,
      responses,
      pages,
      pagesIX,
      activePageIndex: 0,
      selectedText: null,
      responseText: responses.moveAlong,
      responseSequenceTimer: null,
      PUNCT,
      okayCounter: 0,
      notOkayCounter: 0,
      isOkayText: textMap.isOkay,
      isNotOkayText: textMap.isNotOkay
    }
  },
  computed: {
    activePage() {
      return pages[this.activePageIndex]
    },
    activePageText() {
      return '' +
        (this.activePage.beforeTitle || '') +
        (this.activePage.title || '') +
        (this.activePage.bodyText || '')
    }
  },
  head() {
    let title = textMap.title + PUNCT.SLASH + info.SITE_TITLE
    let description = textMap.description
    let image = projectCoverImage
    let meta = this.generateMeta('musou', title, description, image)
    return {
      title,
      meta
    }
  },
  methods: {
    start() {
      if(window) {
        window.scroll({
          top: this.$refs.mission.offsetTop - 32, // FIXME
          behavior: 'smooth'
        })
      }
      this.startResponseSequence(RES_SQ_START)
    },
    startResponseSequence(seqID) {
      this.cancelResponseSequence()
      if(seqID === RES_SQ_START) {
        this.responseText = responses.moveAlong
        this.responseSequenceTimer = setTimeout(() => {
          this.responseText = responses.start
        }, 1500)
      } else if(seqID === RES_SQ_TUTORIAL) {
        this.responseText = responses.moveAlong
        this.responseSequenceTimer = setTimeout(() => {
          this.responseText = responses.selectText
        }, 1500)
      } else if(seqID === RES_SQ_PASS) {
        this.responseText = responses.moveAlong
        this.responseSequenceTimer = setTimeout(() => {
          this.responseText = responses.okay
        }, 1000)
      }
    },
    cancelResponseSequence() {
      if(this.responseSequenceTimer) {
        clearTimeout(this.responseSequenceTimer)
      }
    },
    goPrevPage() {
      if(this.activePageIndex > 0) {
        this.activePageIndex--
        if(this.activePage.hasText) {
          this.startResponseSequence(RES_SQ_TUTORIAL)
        } else {
          this.startResponseSequence(RES_SQ_PASS)
        }
      }
    },
    goNextPage() {
      if(this.activePageIndex < this.pages.length - 1) {
        this.activePageIndex++
        if(this.activePage.hasText) {
          this.startResponseSequence(RES_SQ_TUTORIAL)
        } else {
          this.startResponseSequence(RES_SQ_PASS)
        }
      }
    },
    pageIsOkay() {
      this.cancelResponseSequence()
      this.okayCounter++
      if(this.activePage.hasOwnProperty('targets')) {
        this.responseText = responses.impossible
      } else if(this.okayCounter === 1 && !this.pagesIX[this.activePageIndex].showResult) {
        this.responseText = responses.impossible
      } else {
        this.responseText = responses.okay
        this.pagesIX[this.activePageIndex].showResult = true
        this.okayCounter = 0
      }
    },
    pageIsNotOkay() {
      this.cancelResponseSequence()
      this.updateSelectedText()
      this.notOkayCounter++
      let text = this.selectedText
      if(!text) {
        this.responseText = responses.emptySelection
        this.notOkayCounter = 0
      } else if(this.activePage.bodyText === text) { // invalid selected text
        this.responseText = responses.tooEasy
        this.notOkayCounter = 0
      } else if(this.notOkayCounter === 1 && !this.pagesIX[this.activePageIndex].showResult) { // valid
        this.responseText = responses.areYouSure
      } else if(this.activePage.hasOwnProperty('targets')) { // has targets (is not okay)
        let targets = this.activePage.targets
        let targetHitCount = 0
        targets.forEach(target => {
          targetHitCount += text.includes(target) ? 1 : 0
        })
        if(targetHitCount === targets.length) {
          this.responseText = responses.wellDone
          this.pagesIX[this.activePageIndex].showResult = true
        } else if(targetHitCount > 0) {
          this.responseText = responses.notGoodEnough
          this.pagesIX[this.activePageIndex].showResult = false
        } else {
          this.responseText = responses.missingTarget
          this.pagesIX[this.activePageIndex].showResult = false
        }
        this.notOkayCounter = 0
      } else { // has no targets (is okay)
        this.responseText = responses.okay
        this.pagesIX[this.activePageIndex].showResult = true
        this.notOkayCounter = 0
      }
    },
    updateSelectedText() {
      let selectedText = []
      if(document) {
        let els = document.querySelectorAll('.selectable.selected')
        for(let i = 0; i < els.length; i++) {
          selectedText.push(els[i].innerHTML)
        }
        selectedText = selectedText.join('').trim()
      }
      this.selectedText = selectedText
    },
    selectSegment(event, segment) {
      this.cancelResponseSequence()
      segment.isSelected = !segment.isSelected
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
$mission: #B0B0B0;
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
          max-height: 24rem;
          @include vertical-text;
          color: $secret;
          > .action.start {
            display: flex;
            align-items: center;
            justify-content: center;
            > label {
              margin-bottom: 0.5rem;
              font-size: 1.25rem;
              font-weight: bold;
            }
            > .arrow {
              position: relative;
              width: 3rem;
              height: 3rem;
              background-color: $secret;
              border-radius: 50%;
              @include arrow(1.125rem, down);
            }
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
      top: 0;
      left: 0;
      margin: -1rem 0 0 5rem;
      padding: 0.75rem 0.5rem;
      max-height: 8rem;
      background-color: rgba($secret, 0.65);
      border-radius: 0.125rem;
      font-weight: bold;
      color: $darkness;
      @include move-to-front;
    }
    > .book-container {
      > .book-panel {
        > .book {
          @include rect(4/5);
          width: 100%;
          margin: 0 auto;
          > .content {
            > .page {
              width: 100%;
              height: 100%;
              padding: 1.5rem 2rem;
              background-color: $page;
              background-size: cover;
              background-position: center center;
              @include vertical-text;
              @include shadow-expanded;
              .before-title {
                font-size: 1rem;
              }
              .title {
                font-size: 1.5rem;
                letter-spacing: 0.0625rem;
                line-height: $line-height-comfortable;
                @include iPhone5 {
                  font-size: 1.25rem;
                }
              }
              .body {
                font-size: 1.25rem;
                line-height: $line-height-comfortable;
                @include iPhone5 {
                  font-size: 1rem;
                }
              }
              .result {
                margin-right: 0.25rem;
                font-size: 1rem;
                font-weight: bold;
                color: $secret;
                @include iPhone5 {
                  font-size: 0.875rem;
                }
              }
              .selectable {
                border-left: 4px solid transparent;
                &.selected {
                  border-left-color: $secret;
                }
              }
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

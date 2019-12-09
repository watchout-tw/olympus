<template>
<div class="page formosa">
  <div class="book-container">
    <div class="book">
      <div class="content">
        <div class="book-page" :class="[page.type]" v-for="(page, pageIndex) of pages" :key="pageIndex" v-show="pageIndex === activePageIndex">
          <div v-if="page.type === 'text'" v-html="page.content"></div>
          <h3 v-if="page.type === 'title'" v-html="page.content"></h3>
          <img v-if="page.type === 'image'" :src="`/formosa/${page.content}`" height="100%" />
        </div>
      </div>
    </div>
  </div>
  <div class="controls">
    <div class="form-field-buttons">
      <button class="input button" @click="goPrevPage">上一頁</button>
      <button class="input button" @click="verify">報告長官我好了</button>
      <button class="input button" @click="goNextPage">下一頁</button>
    </div>
    <div class="text-align-center font-size-tiny">{{ selectedText }}</div>
  </div>
</div>
</template>

<script>
let pages = [
  {
    type: 'title',
    content: '發刊詞'
  },
  {
    type: 'text',
    content: '玉山蒼蒼，碧海茫茫，婆娑之洋，美麗之島，是我們生長的家鄉。我們深愛這片土地及啜飲其乳汁長大的子民，更關懷我們未來共同的命運。同時我們相信，決定我們未來道路和命運，不再是任何政權和這政權所豢養之文人的權利，而是我們所有人民大眾的權利。'
  },
  {
    type: 'image',
    content: 'directory-1.jpg'
  },
  {
    type: 'image',
    content: 'directory-2.jpg'
  },
  {
    type: 'text',
    content: '國民黨政府面對這一熱烈的選擧活動，在其政治危機來臨時驚慌失措，急急忙忙下令停止選擧，並施展一連串高壓手段，企圖摧毀這一股民主運動的洪流，這造成半年來我們社會的緊張不安。'
  },
  {
    type: 'text',
    content: '三十年來，國民黨已禁忌、神話隱蔽我們國家社會的許許多多問題，扼殺了我們政治的生機，阻礙了社會的進步。'
  },
  {
    type: 'text',
    content: '「美麗島」雜誌的目標就是要推動新生代政治運動。我們將提供廣大的園地給所有不願意讓禁忌、神話、權勢束縛，而願意站在自己的土地上講話的同胞，共同來耕耘這美麗之島。'
  },
  {
    type: 'text',
    content: '但是，三十年來在意識上忽視群眾、背離群眾的國民黨在運動過程中驚奇地發現，「群眾突然之間成為可見的，且很穩固地盤踞在社會最顯明的地帶。」國民黨面對這一情勢，迷惘無助，無法正確估計其群眾基礎，於是，順應世界潮流之民主化意識與維續政權的統治意識相互掙扎、扯裂。'
  },
  {
    type: 'text',
    content: '國民黨就在這種掙扎、扯裂、徬徨的矛盾心理下迎接新生一代的挑戰！'
  }
]

export default {
  data() {
    return {
      activePageIndex: 0,
      pages,
      selectedText: null
    }
  },
  computed: {
    activePage() {
      return pages[this.activePageIndex]
    }
  },
  methods: {
    goPrevPage() {
      if(this.activePageIndex > 0) {
        this.activePageIndex = this.activePageIndex - 1
      }
    },
    verify() {
      this.getSelectedText()
    },
    goNextPage() {
      if(this.activePageIndex < this.pages.length - 1) {
        this.activePageIndex = this.activePageIndex + 1
      }
    },
    getSelectedText() {
      if(typeof window.getSelection !== 'undefined') {
        this.selectedText = window.getSelection().toString()
      } else if(typeof document.selection !== 'undefined' && document.selection.type === 'Text') {
        this.selectedText = document.selection.createRange().text
      } else {
        this.selectedText = null
      }
    }
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';

.page.formosa {
  background-color: #aaa;
  > .book-container {
    padding: 2rem 0;
    > .book {
      @include rect(3/4);
      max-width: 24rem;
      margin: 0 auto;
      .book-page {
        width: 100%;
        height: 100%;
        background-color: rgb(255, 238, 180);
        writing-mode: vertical-rl;
        text-orientation: mixed;
        @include shadow-expanded-soft;
        &.text {
          padding: 2rem;
          font-size: 1.25rem;
        }
        &.title {
          padding: 2rem;
          font-size: 2rem;
        }
      }
    }
  }
  > .controls {
    max-width: 24rem;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
}
</style>

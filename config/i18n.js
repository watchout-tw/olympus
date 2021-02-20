const map228Translation = require('../data/map/2019-228-translation')
const anotherJourneyTranslation = require('../data/journey/another-future-translation')

let map228ZH = {}
let map228TLJ = {}
let map228EN = {}

map228Translation.forEach((row, index) => {
  var plusOneIdx = index + 1
  map228ZH['stop' + plusOneIdx] = {}
  map228TLJ['stop' + plusOneIdx] = {}
  map228EN['stop' + plusOneIdx] = {}
  if (row.title) {
    map228ZH['stop' + plusOneIdx].title = row.title
    map228TLJ['stop' + plusOneIdx].title = row.tlj_title
    map228EN['stop' + plusOneIdx].title = row.en_title
  }
  if (row.image_caption) {
    map228ZH['stop' + plusOneIdx].image_caption = row.image_caption
    map228TLJ['stop' + plusOneIdx].image_caption = row.tlj_image_caption
    map228EN['stop' + plusOneIdx].image_caption = row.en_image_caption
  }
  if (row.image_license) {
    map228ZH['stop' + plusOneIdx].image_license = row.image_license
    map228TLJ['stop' + plusOneIdx].image_license = row.tlj_image_license
    map228EN['stop' + plusOneIdx].image_license = row.en_image_license
  }
  if (row.description) {
    map228ZH['stop' + plusOneIdx].description = row.description
    map228TLJ['stop' + plusOneIdx].description = row.tlj_description
    map228EN['stop' + plusOneIdx].description = row.en_description
  }
  if (row.date) {
    map228ZH['stop' + plusOneIdx].date = row.date
    map228TLJ['stop' + plusOneIdx].date = row.tlj_date
    map228EN['stop' + plusOneIdx].date = row.en_date
  }
})

let journeyZH = {}
let journeyTLJ = {}
let journeyEN = {}

anotherJourneyTranslation.forEach((row, index) => {
  var plusOneIdx = index + 1
  journeyZH['scene' + plusOneIdx] = {}
  journeyTLJ['scene' + plusOneIdx] = {}
  journeyEN['scene' + plusOneIdx] = {}
  if (row.description) {
    journeyZH['scene' + plusOneIdx].description = row.description
    journeyTLJ['scene' + plusOneIdx].description = row.tlj_description
    journeyEN['scene' + plusOneIdx].description = row.en_description
  }
  if (row.subtitle) {
    var subtitles = row.subtitle.split('\n')
    var tlj_subtitles = row.tlj_subtitle.split('\n')
    var en_subtitles = row.en_subtitle.split('\n')
    journeyZH['scene' + plusOneIdx].subtitle = {}
    journeyTLJ['scene' + plusOneIdx].subtitle = {}
    journeyEN['scene' + plusOneIdx].subtitle = {}
    subtitles.forEach((item, idx) => {
      journeyZH['scene' + plusOneIdx].subtitle['line' + (idx + 1)] = item
    })
    tlj_subtitles.forEach((item, idx) => {
      journeyTLJ['scene' + plusOneIdx].subtitle['line' + (idx + 1)] = item
    })
    en_subtitles.forEach((item, idx) => {
      journeyEN['scene' + plusOneIdx].subtitle['line' + (idx + 1)] = item
    })
  }
})

export const config = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'tlj',
      name: '漢羅台文'
    },
    {
      code: 'zh',
      iso: 'zh-TW',
      name: '繁體中文'
    }
  ],
  defaultLocale: 'zh',
  strategy: 'prefix_except_default',
  vueI18n: {
    fallbackLocale: 'zh',
    messages: {
      en: {
        message: {
          references: 'References',
          share: 'Share',
          map228: {
            ...map228EN,
            prev: 'Previous',
            next: 'Next',
            disappear_elite: '那些消失的台灣菁英…NOT TRANSLATED YET',
            go_back_to_1947: 'Go back to 1947, Taiwan',
            go_back_to_1947_again: 'Go back to 1947 again'
          },
          anotherJourney: {
            ...journeyEN,
            diary228: '[The 228 Incident: A Chronicle]',
            openSceneTitle: 'The Lost Generation',
            references: {
              memorialFoudation: 'Memorial Foundation of 228',
              taiwanDiaryArchive: 'Taiwan Diary Archive, Institute of Taiwan History, Academia Sinica',
              digitalCollectionService: 'Digital Collection Service, National Library of Public Information',
              officialDocuments: 'Officials Documents Archive of Taiwan Provincial Administration, Taiwan Historica'
            }
          }
        }
      },
      tlj: {
        message: {
          references: '參考資料',
          share: '認同請分享',
          map228: {
            ...map228TLJ,
            prev: '頂一站',
            next: '後一站',
            disappear_elite: '那些消失的台灣菁英…還沒翻譯',
            go_back_to_1947: '回到 1947 的台灣…還沒翻譯',
            go_back_to_1947_again: '再次回到 1947 的台灣…'
          },
          anotherJourney: {
            ...journeyTLJ,
            diary228: '【二二八日記】',
            openSceneTitle: '你不知影你失去siánn-mi̍h',
            references: {
              memorialFoudation: '二二八事件紀念基金會',
              taiwanDiaryArchive: '中研院台灣史研究所台灣日記智識庫',
              digitalCollectionService: '國立公共資訊圖書館數位典藏服務網',
              officialDocuments: '國史館台灣文獻館台灣省行政長官公署檔案'
            }
          }
        }
      },
      zh: {
        message: {
          references: '參考資料',
          share: '認同請分享',
          map228: {
            ...map228ZH,
            prev: '上一站',
            next: '下一站',
            disappear_elite: '那些消失的台灣菁英…',
            go_back_to_1947: '回到 1947 的台灣…',
            go_back_to_1947_again: '再次回到 1947 的台灣…'
          },
          anotherJourney: {
            ...journeyZH,
            diary228: '【二二八日記】',
            openSceneTitle: '你不知道你失去了什麼',
            references: {
              memorialFoudation: '二二八事件紀念基金會',
              taiwanDiaryArchive: '中研院台灣史研究所台灣日記智識庫',
              digitalCollectionService: '國立公共資訊圖書館數位典藏服務網',
              officialDocuments: '國史館台灣文獻館台灣省行政長官公署檔案'
            }
          }
        }
      }
    }
  }
}

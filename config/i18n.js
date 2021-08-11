const map228Translation = require('../data/map/2019-228-translation')
const anotherJourneyTranslation = require('../data/journey/another-future-translation')

let map228ZH = {}
let map228TB = {}
let map228EN = {}

map228Translation.forEach((row, index) => {
  let plusOneIdx = index + 1
  map228ZH['stop' + plusOneIdx] = {}
  map228TB['stop' + plusOneIdx] = {}
  map228EN['stop' + plusOneIdx] = {}
  if(row.title) {
    map228ZH['stop' + plusOneIdx].title = row.title
    map228TB['stop' + plusOneIdx].title = row.tb_title
    map228EN['stop' + plusOneIdx].title = row.en_title
  }
  if(row.image_caption) {
    map228ZH['stop' + plusOneIdx].image_caption = row.image_caption
    map228TB['stop' + plusOneIdx].image_caption = row.tb_image_caption
    map228EN['stop' + plusOneIdx].image_caption = row.en_image_caption
  }
  if(row.image_license) {
    map228ZH['stop' + plusOneIdx].image_license = row.image_license
    map228TB['stop' + plusOneIdx].image_license = row.tb_image_license
    map228EN['stop' + plusOneIdx].image_license = row.en_image_license
  }
  if(row.description) {
    map228ZH['stop' + plusOneIdx].description = row.description
    map228TB['stop' + plusOneIdx].description = row.tb_description
    map228EN['stop' + plusOneIdx].description = row.en_description
  }
  if(row.date) {
    map228ZH['stop' + plusOneIdx].date = row.date
    map228TB['stop' + plusOneIdx].date = row.tb_date
    map228EN['stop' + plusOneIdx].date = row.en_date
  }
})

let journeyZH = {}
let journeyTB = {}
let journeyEN = {}

anotherJourneyTranslation.forEach((row, index) => {
  let plusOneIdx = index + 1
  journeyZH['scene' + plusOneIdx] = {}
  journeyTB['scene' + plusOneIdx] = {}
  journeyEN['scene' + plusOneIdx] = {}
  if(row.description) {
    journeyZH['scene' + plusOneIdx].description = row.description
    journeyTB['scene' + plusOneIdx].description = row.tb_description
    journeyEN['scene' + plusOneIdx].description = row.en_description
  }
  if(row.subtitle) {
    let subtitles = row.subtitle.split('\n')
    let tbSubtitles = row.tb_subtitle.split('\n')
    let enSubtitles = row.en_subtitle.split('\n')
    journeyZH['scene' + plusOneIdx].subtitle = {}
    journeyTB['scene' + plusOneIdx].subtitle = {}
    journeyEN['scene' + plusOneIdx].subtitle = {}
    subtitles.forEach((item, idx) => {
      journeyZH['scene' + plusOneIdx].subtitle['line' + (idx + 1)] = item
    })
    tbSubtitles.forEach((item, idx) => {
      journeyTB['scene' + plusOneIdx].subtitle['line' + (idx + 1)] = item
    })
    enSubtitles.forEach((item, idx) => {
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
      code: 'tb',
      name: '臺文'
    },
    {
      code: 'zh',
      iso: 'zh-TW',
      name: '繁體中文'
    }
  ],
  defaultLocale: 'zh',
  detectBrowserLanguage: false,
  strategy: 'prefix_except_default',
  vueI18n: {
    fallbackLocale: 'zh',
    messages: {
      en: {
        message: {
          companyTitle: 'Watchout',
          siteTitle: 'Watchout Musou',
          references: 'References',
          share: 'Share',
          map228: {
            ...map228EN,
            prev: 'Previous',
            next: 'Next',
            disappear_elite: 'The Lost Generation of Taiwanese...',
            go_back_to_1947: 'Back to 1947 Taiwan',
            go_back_to_1947_again: 'Back to 1947 Taiwan again'
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
      tb: {
        message: {
          companyTitle: '沃草',
          siteTitle: '沃草國會無雙',
          references: '參考資料',
          share: '認同請分享',
          map228: {
            ...map228TB,
            prev: '頂一站',
            next: '後一站',
            disappear_elite: '那些消失的台灣菁英…',
            go_back_to_1947: '轉去 1947 年的臺灣',
            go_back_to_1947_again: '閣一擺轉去 1947 年的臺灣'
          },
          anotherJourney: {
            ...journeyTB,
            diary228: '【二二八日記】',
            openSceneTitle: '你不知影你失去 siánn-mi̍h',
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
          companyTitle: '沃草',
          siteTitle: '沃草國會無雙',
          references: '參考資料',
          share: '認同請分享',
          map228: {
            ...map228ZH,
            prev: '上一站',
            next: '下一站',
            disappear_elite: '那些消失的台灣菁英…',
            go_back_to_1947: '回到 1947 年的台灣',
            go_back_to_1947_again: '再次回到 1947 年的台灣'
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

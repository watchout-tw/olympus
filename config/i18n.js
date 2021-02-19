const map228Translation = require('../data/map/2019-228-translation')

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
          map228: {
            ...map228EN,
            prev: 'Previous',
            next: 'Next',
            disappear_elite: '那些消失的台灣菁英…NOT TRANSLATED YET',
            go_back_to_1947: 'Go back to 1947, Taiwan',
            go_back_to_1947_again: 'Go back to 1947 again'
          }
        }
      },
      tlj: {
        message: {
          map228: {
            ...map228TLJ,
            prev: '頂一站',
            next: '後一站',
            disappear_elite: '那些消失的台灣菁英…還沒翻譯',
            go_back_to_1947: '回到 1947 的台灣…還沒翻譯',
            go_back_to_1947_again: '再次回到 1947 的台灣…'
          }
        }
      },
      zh: {
        message: {
          map228: {
            ...map228ZH,
            prev: '上一站',
            next: '下一站',
            disappear_elite: '那些消失的台灣菁英…',
            go_back_to_1947: '回到 1947 的台灣…',
            go_back_to_1947_again: '再次回到 1947 的台灣…'
          }
        }
      }
    }
  }
}

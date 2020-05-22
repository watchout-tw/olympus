# olympus

> News media experiments with nuxt.js

## Map data spec

一筆資料就是一個地圖上的點，用很多點來表達一系列的事件。以下可能會用事件、座標點、資料，來敘述一個 object。

### Sample

```js
[
  {
    "lat": 42.0,
    "lng": 42.0,
    ...
  },
  ...
]
```

### Columns

| Key | Type | Required | Description |
| --- | --- | :---: | --- |
| `lat` | float | 🌕 | 此座標點的緯度 |
| `lng` | float | 🌕 | 此座標點的經度 |
| `zoom` | integer | 🌑 | 在地圖上的放大率 |
| `display_type` `[1]` | string | 🌑 | 這筆資料的顯示方式 |
| `link` | string | 🌑 | 點下此座標點後可以連到的網址，通常是新聞、事件網址 |
| `publisher` | string | 🌑 | 上述連結的報社、網站、出版者 |
| `contributor` | string | 🌑 | 登錄這筆資料的貢獻者 |
| `verifier` | string | 🌑 | 這筆資料的查證者 |
| `date` | string | 🌑 | 事件發生日期 YYYY-MM-DD |
| `time` | string | 🌑 | 事件發生時間 hh-mm-ss |
| `title` | string | 🌑 | 事件標題 |
| `title_tw` | string | 🌑 | 事件中文標題 |
| `description` | string | 🌑 | 事件詳細敘述 |
| `image` | string | 🌑 | 事件圖片連結 |
| `image_caption` | string | 🌑 | 事件圖片說明 |
| `image_license` | string | 🌑 | 事件圖片授權說明 |
| `audio` | string | 🌑 | 事件音檔連結 |
| `audio_caption` | string | 🌑 | 事件音檔說明 |
| `audio_license` | string | 🌑 | 事件音檔授權說明 |
| `world_region` | string | 🌑 | 事件發生於世界上的哪一洲、大區域 |
| `country` | string | 🌑 | 事件發生於哪一個國家、準國家 |
| `national_region` | string | 🌑 | 事件發生於國家內的哪一省、州、大區域 |
| `city` | string | 🌑 | 事件發生於哪一個城市 |
| `place` | string | 🌑 | 事件發生於哪一個地方 |
| `address` | string | 🌑 | 事件發生地址 |
| `prev_step_button` | string | 🌑 | 介面上「上一步」按鈕字樣 |
| `next_step_button` | string | 🌑 | 介面上「下一步」按鈕字樣 |
| `note` | string | 🌑 | 關於這筆資料的其它註記 |
| `tags` | array of strings | 🌑 | 事件標籤；暫無使用 |
| `type` | string | 🌑 | 暫無使用 |
| `data` | JSON object | 🌑 | 其它非通用的欄位就放在 data 之下 |

`[1]` 目前的 `display_type` 有：`default`, `warning`, `imminent_danger`，詳見 `/map/swine-flu`

## Notes

- Use `google-spreadsheet-to-json` to convert Google Sheet data to JSON.

## Build setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:[port]
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# Use pm2 for production deployment
$ pm2 start npm --name olympus -- start

# generate static project
$ npm run generate
```

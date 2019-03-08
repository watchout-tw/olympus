# Map Data Specification

## Description

一筆資料就是一個地圖上的點，用很多點來表達一系列的事件。
以下可能會用事件、座標點、資料，來敘述一個 object

## Data Structure

An array of objects

## Data Column

| Key | Type | Required | Description |
| --- | --- | :---: | --- |
| `lat` | float | 🌕 | 此座標點的緯度 |
| `lng` | float | 🌕 | 此座標點的經度 |
| `zoom` | integer | 🌑 | 在地圖上放大的比例 |
| `display_type` [1] | JSON | 🌑 | 地圖下方資料卡片的顯示類型 |
| `link` | string | 🌑 | 點下此座標點後可以連到的網址，通常是新聞、事件網址 |
| `publisher` | string | 🌑 | 上述的連結的出版者 |
| `contributor` | string | 🌑 | 此資料的貢獻者 |
| `verifier` | string | 🌑 | 此資料的查證者 |
| `date` | string | 🌑 | 此事件發生的日期 |
| `time` | string | 🌑 | 此事件發生的時間 |
| `title` | string | 🌑 | 此事件的標題 |
| `title_tw` | string | 🌑 | 此事件的中文標題 |
| `description` | string | 🌑 | 此事件的詳細敘述 |
| `image` | string | 🌑 | 此事件的圖片連結 |
| `image_caption` | string | 🌑 | 此事件的圖片標題 |
| `image_license` | string | 🌑 | 此事件的圖片授權說明 |
| `audio` | string | 🌑 | 此事件的音檔連結 |
| `audio_caption` | string | 🌑 | 此事件的音檔標題 |
| `audio_license` | string | 🌑 | 此事件的音檔授權說明 |
| `world_region` | string | 🌑 | 發生於哪一洲 |
| `country` | string | 🌑 | 發生於哪一個國家 |
| `national_region` | string | 🌑 | 發生於哪一區，通常用於中國（省份） |
| `city` | string | 🌑 | 發生於哪一個城市 |
| `place` | string | 🌑 | 發生於哪一個地區 |
| `address` | string | 🌑 | 事件發生地址 |
| `prev_step_button` | string | 🌑 | 地圖模組中的「上一步」按鈕字樣 |
| `next_step_button` | string | 🌑 | 地圖模組中的「下一步」按鈕字樣 |
| `note` | string | 🌑 | 關於此資料的其它註記 |
| `tags` | array of strings | 🌑 | 此事件的相關標籤，欄位暫無被使用 |
| `type` | string | 🌑 | 此欄位暫無使用 |
| `data` | JSON | 🌑 | 其它非通用的欄位就放在 data 之下 |

`[1]` 目前的 display_type 有：`default`, `warning`, `imminent_danger`，詳見 swine-flu

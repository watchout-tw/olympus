export default {
  id: '181124',
  module: 'map',
  title: '期中選舉後，世界看台灣',
  description: '11月24日的九合一選舉結束，這樣的選舉結果，你怎麼看？那你有關心過其他國家的人對我們的看法嗎？《沃草》蒐集了這些多國媒體的報導，讓我們一起來看看，外國人怎麼評論這次台灣選舉。',
  image: 'modules/map.jpg',
  date: '2018-11-29 21:00:00',
  breaking: true,
  dataSource: '2018-election-international-coverage',
  sections: [
    {
      id: 'map-box',
      type: 'map-box'
    },
    {
      id: 'title-description',
      type: 'title-description'
    }
  ],
  authorship: [
    {
      job: '資料蒐集',
      people: ['洪國鈞']
    },
    {
      job: '設計開發',
      people: ['游知澔']
    }
  ],
  callForAction: {
    title: '你看到的外媒報導沒出現嗎？',
    content: '由於人力、時間和語言能力的限制，我們能蒐集到的相關報導數量有限，你有看到其他的嗎？你可以[與我們聯絡](https://watchout.tw/contact)，我們會在確認內容後更新網頁內容，並將你列為貢獻者。\n\n在沃草，我們持續以各種方式，**努力降低理解複雜議題的門檻**。互動、資訊新聞需要許多人力整理資料、設計、製作，如果你喜歡沃草的內容，請別忘了[支持我們](https://watchout.tw/?support)！'
  }
}

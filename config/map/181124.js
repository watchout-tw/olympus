export default {
  id: '181124',
  module: 'map',
  title: '投票完，世界怎麼看台灣？',
  description: '11月24日地方選舉和公民投票結果出爐，你覺得世界各國媒體如何理解這次投票呢？《沃草》蒐集了各國媒體的報導，讓我們一起來看看，大家怎麼看台灣。',
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
    content: '由於人力、時間和語言能力的限制，我們能蒐集到的相關報導數量有限，你有看到其他的嗎？你可以[來這裡](https://goo.gl/forms/KkMqmWqVy1Ai7nTt1)填寫你所看到的新聞資料，我們會在確認內容後更新網頁內容，並將你列為貢獻者。\n\n在《沃草》，我們持續以各種方式，**努力降低理解複雜議題的門檻**。互動、資訊新聞需要許多人力整理資料、設計、製作，如果你喜歡《沃草》的內容，請別忘了[支持我們](https://watchout.tw/?support)哦！'
  }
}

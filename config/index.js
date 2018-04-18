export const projects = [
  {
    id: 'congress-midterm-mock-exam',
    module: 'qz',
    title: '國會草知識期中模擬考',
    image: 'congress-midterm-mock-exam.jpg',
    date: '2018-04-14 20:00:00',
    breaking: true
  },
  {
    id: '3-principles',
    module: 'qz',
    title: '你唸過三民主義嗎？',
    image: '3-principles.jpg',
    date: '2017-11-12 20:00:00'
  },
  {
    id: 'republic-of-china',
    module: 'qz',
    title: '做個堂堂正正的中華民國人',
    image: 'republic-of-china.jpg',
    date: '2017-10-10 20:00:00'
  },
  {
    id: 'labor-standard-act',
    module: 'swipe',
    title: '《勞基法》流言終結者',
    image: 'swipe.png',
    date: '2018-01-26 20:00:00',
    breaking: true
  },
  {
    id: 'another-future',
    module: 'journey',
    beforeTitle: '《二二八日記》',
    title: '你不知道你失去了什麼',
    image: 'another-future-light.jpg',
    date: '2018-02-27 20:00:00',
    breaking: true
  },
  {
    id: 'terror-30',
    module: 'role-play',
    title: '你是戒嚴時代的誰呢？',
    image: 'terror-30.jpg',
    date: '2017-07-13 21:00:00'
  },
  {
    id: 'yulamchia',
    module: 'role-play',
    title: '遊覽車為什麼翻車？跟著這樣做，你也會成為黑心慣老闆！',
    date: '2017-02-15 21:00:00'
  },
  {
    id: '748',
    module: 'map',
    title: '同志結婚會滅國？醒醒吧，你沒有▁▁',
    date: '2017-06-14 21:00:00'
  },
  {
    id: 'tsai-first-year',
    module: 'draw',
    title: '蔡總統的第一年',
    description: '蔡英文政府已執政滿一週年，跟過去幾年相比，到底表現好不好呢？沃草透過比較從扁政府、馬政府到蔡政府第一年的各項數據，請你先自己畫出心中的感受，再來看看跟真實數據的差多少？',
    date: '2017-05-19 21:00:00'
  }
]

export const modules = [
  {
    id: 'qz',
    image: 'qz.png',
    title: '小測驗',
    description: '中華民國的教育系統最喜歡考試了。沃草也有小測驗，現在就試試看，看你是不是個好學生。',
    component: 'longform'
  },
  {
    id: 'swipe',
    image: 'swipe.png',
    title: '滑滑看',
    description: '滑滑看？',
    component: 'swipe'
  },
  {
    id: 'journey',
    image: 'journey.png',
    title: '小旅行',
    description: '跟阿草一起來一場小旅行嗎？',
    component: 'journey'
  },
  {
    id: 'role-play',
    image: 'role-play.png',
    title: '模擬人生',
    description: '如果能夠身歷其境，或許我們都能更了解彼此？',
    component: 'longform'
  },
  {
    id: 'map',
    image: 'map.jpg',
    title: '啊不是很有國際觀',
    description: '世界各地的人，說著不同的語言，讀著不同的報導，過著不同的生活。我們對他們了解多少？他們又是如何認識、看待台灣的？',
    component: 'map'
  },
  {
    id: 'draw',
    image: 'draw.png',
    title: '不然你來畫畫看啊',
    description: '不靠感覺，靠資料、靠數據的新聞，有時候並不符合期待。你也來試試？',
    component: 'draw'
  }
]

let colors = {
  'other': 'rgba(0, 0, 0, 0.65)',
  'default': 'rgba(255, 83, 104, 0.95)'
}

export default {
  id: '228-72',
  module: 'map',
  title: '重返二二八起點',
  beforeTitle: '互動地圖',
  description: '1947年發生的「二二八事件」已經過了72年，即便是當年六歲的孩童，現在都已經高齡78歲，超過台灣男性平均壽命。那麼誰還能留下來，訴說那段時間的故事呢？《沃草》結合史料和當代的地圖資料，試著帶你去體驗當年的時代氛圍，重返二二八的起點。',
  image: 'map/228-72-2.jpg',
  date: '2019-02-27 23:00:00',
  breaking: true,
  dataSource: '2019-228',
  sections: [
    {
      id: 'map-box',
      type: 'map-box',
      config: {
        mode: 'fly',
        colors,
        theme: 'dark',
        center: { lat: 23.797815, lng: 121.000736 },
        zoom: 5, // TODO: mobile zoom & desktop zoom?
        story: true,
        feature: {
          primaryField: 'date'
        },
        start: '回到1947的台灣⋯',
        restart: '再次回到1947的台灣⋯',
        flyLayerPaint: {
          'circle-color': [
            'match', ['get', 'isLatest'],
            'latest', colors.default,
            colors.other
          ]
        },
        prompt: {
          classes: ['warning']
        },
        finale: {
          type: 'doc',
          id: 'pXnCb0YgUaci9Jeuxg0I',
          classes: ['warning'],
          messageClasses: ['font-size-large']
        }
      }
    },
    {
      id: 'title-description',
      type: 'title-description'
    }
  ],
  authorship: [
    {
      job: '資料蒐集',
      people: ['洪國鈞', '薛翰駿']
    },
    {
      job: '設計開發',
      people: ['林家偉', '游知澔']
    }
  ]
}

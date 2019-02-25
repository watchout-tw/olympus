let colors = {
  'default': 'rgba(0, 0, 0, 0.50)',
  'warning': 'rgba(255, 83, 104, 0.75)',
  'imminent_danger': 'rgba(255, 83, 104, 0.95)'
}

export default {
  id: '228-72',
  module: 'map',
  title: '二二八互動地圖',
  beforeTitle: '互動地圖',
  description: 'tbd',
  image: 'map/swine-flu.jpg',
  date: '2018-12-13 21:00:00',
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
        prompt: {
          classes: ['warning']
        },
        finale: {
          type: 'doc',
          id: 'pM9TqPuxNO1jCWMdN6jB',
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
      people: ['洪國鈞']
    },
    {
      job: '設計開發',
      people: ['林家偉', '游知澔']
    }
  ]
}

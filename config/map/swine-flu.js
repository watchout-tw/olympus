export default {
  id: 'swine-flu',
  module: 'map',
  title: '中国有豬瘟',
  description: '中国有豬瘟；中国有豬瘟；中国有豬瘟。',
  image: 'map/swine-flu.jpg',
  date: '2018-12-18 21:00:00',
  breaking: true,
  dataSource: '2018-swine-flu',
  sections: [
    {
      id: 'map-box',
      type: 'map-box',
      config: {
        center: { lat: 36.067108, lng: 120.382609 },
        zoom: 2, // TODO: mobile zoom & desktop zoom?
        live: true,
        liveLayerPaint: {
          'circle-color': 'rgba(0, 0, 0, 0.50)',
          'circle-radius': {
            property: 'data.total',
            stops: [
              [40, 4],
              [20000, 48]
            ]
          }
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
      people: ['游知澔']
    }
  ]
}

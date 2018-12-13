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
          'circle-color': [
            'match', ['get', 'display_type'],
            'warning', 'rgba(255, 83, 104, 0.85)',
            'rgba(0, 0, 0, 0.50)'
          ],
          'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            1, [
              'match', ['get', 'display_type'],
              'warning', 12,
              ['/', ['sqrt', ['get', 'data.total']], 4]
            ],
            13, [
              'match', ['get', 'display_type'],
              'warning', 12,
              ['/', ['sqrt', ['get', 'data.total']], 8]
            ]
          ]
        },
        feature: {
          primaryField: 'date',
          secondaryFields: ['country', 'national_region']
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

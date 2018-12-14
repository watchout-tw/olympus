export default {
  id: 'swine-flu',
  module: 'map',
  title: '中国有豬瘟',
  beforeTitle: '互動地圖',
  description: '中國豬瘟疫情不斷延燒，台灣出現五起自中國攜帶**有非洲豬瘟病毒**的豬肉製品案例，12月12日農委會更是以**警訊通知**告知全民疫情嚴重性。《沃草》以中國農業農村部資料和周邊國家新聞為素材，帶大家一起體驗《中国有豬瘟》互動地圖。',
  image: 'map/swine-flu.jpg',
  date: '2018-12-13 21:00:00',
  breaking: true,
  dataSource: '2018-swine-flu',
  sections: [
    {
      id: 'map-box',
      type: 'map-box',
      config: {
        theme: 'dark',
        center: { lat: 36.067108, lng: 120.382609 },
        zoom: 2, // TODO: mobile zoom & desktop zoom?
        clusterLayerPaint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            'rgba(0, 0, 0, 0.50)',
            10,
            'rgba(0, 0, 0, 0.65)',
            30,
            'rgba(0, 0, 0, 0.80)'
          ],
          'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            1, ['*', ['sqrt', ['get', 'point_count']], 8],
            6, ['*', ['sqrt', ['get', 'point_count']], 16]
          ]
        },
        clusterCountLayerPaint: {
          'text-color': 'white'
        },
        markerLayerPaint: {
          'circle-color': 'rgba(0, 0, 0, 0.65)',
          'circle-radius': 8
        },
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
              'warning', 8,
              ['/', ['sqrt', ['get', 'data.total']], 12]
            ],
            13, [
              'match', ['get', 'display_type'],
              'warning', 8,
              ['/', ['sqrt', ['get', 'data.total']], 0.5]
            ]
          ]
        },
        feature: {
          primaryField: 'date',
          secondaryFields: ['country', 'national_region']
        },
        prompt: {
          classes: ['warning']
        },
        finale: {
          classes: ['warning'],
          message: '中國有豬瘟\n\n偷帶會罰錢\n\n檢舉有獎金\n\n認同請分享',
          messageClasses: ['font-size-2x', 'text-align-center']
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

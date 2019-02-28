let colors = {
  'other': 'rgba(0, 0, 0, 0.65)',
  'default': 'rgba(255, 83, 104, 0.95)'
}

export default {
  id: '228-72',
  module: 'map',
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
    }
  ]
}

<template>
<div class="map-box">
  <div id="map-container" class="map-container"></div>
</div>
</template>

<script>
import config from 'watchout-common-functions/config/config'
export default {
  props: ['markers'],
  data() {
    return {
      map: null
    }
  },
  mounted() {
    const mapbox = require('mapbox-gl')
    // const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder')
    mapbox.accessToken = config.mapboxAccessToken
    this.map = new mapbox.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/light-v9'
    })
    this.map.addControl(new mapbox.NavigationControl(), 'top-left')
    // this.map.addControl(new MapboxGeocoder({ accessToken: config.mapboxAccessToken }), 'top-left')
    let geojson = {
      type: 'FeatureCollection',
      features: this.markers.map(marker => {
        return {
          type: 'Feature',
          properties: {
            title: marker.title
          },
          geometry: {
            type: 'Point',
            coordinates: [marker.lng, marker.lat]
          }
        }
      })
    }
    // https://www.mapbox.com/mapbox-gl-js/example/add-image/
    // https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/
    this.map.loadImage('https://raw.githubusercontent.com/watchout-tw/watchout-common-assets/e631b3500c79507c9dcc481bcdd066f007aad902/images/content-types/doc.png', (error, image) => {
      if(error) {
        throw error
      }
      this.map.addImage('doc', image)
      this.map.addLayer({
        id: 'markers',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: geojson
        },
        layout: {
          'icon-image': 'doc',
          'icon-size': 0.25,
          'icon-allow-overlap': true
        }
      })
    })
    this.map.on('click', 'markers', (e) => {
      var title = e.features[0].properties.title
      var coordinates = e.features[0].geometry.coordinates.slice()
      while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
      }

      new mapbox.Popup()
        .setLngLat(coordinates)
        .setText(title)
        .addTo(this.map)
    })
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';
@import 'mapbox-gl/dist/mapbox-gl.css';
@import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

.map-box {
  display: flex;
  width: 100%;
  min-height: 24rem;
  > .map-container {
    width: 100%;
    flex-grow: 1;
    &.mapboxgl-map {
      font-family: $font-sans-serif;
    }

    .marker {
      background-size: cover;
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      @include shadow;
      &.doc {
        background-image: url('~watchout-common-assets/images/content-types/doc.png');
      }
    }
    .mapboxgl-popup {
      max-width: 12rem;
      font-size: $font-size-small;
      line-height: $line-height-compact;
    }
    .mapboxgl-popup-content {
    }
    .mapboxgl-popup-close-button {
      font-size: 1.5rem;
    }
  }
}
</style>

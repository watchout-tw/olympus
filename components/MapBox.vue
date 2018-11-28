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
      style: 'mapbox://styles/watchout/cjozx93ng11m72rlqumr7uobd',
      center: [71.963, 36.011],
      zoom: 1
    })
    this.map.addControl(new mapbox.NavigationControl(), 'top-left')
    // this.map.addControl(new MapboxGeocoder({ accessToken: config.mapboxAccessToken }), 'top-left')
    let geojson = {
      type: 'FeatureCollection',
      features: this.markers.map(marker => {
        return {
          type: 'Feature',
          properties: marker,
          geometry: {
            type: 'Point',
            coordinates: [marker.lng, marker.lat]
          }
        }
      })
    }
    let markerLayer = {
      id: 'markers',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'icon-image': 'doc',
        'icon-size': 1,
        'icon-allow-overlap': true
      }
    }
    // https://www.mapbox.com/mapbox-gl-js/example/add-image/
    // https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/
    this.map.on('load', (e) => {
      this.map.addLayer(markerLayer)
    })
    this.map.on('click', 'markers', (e) => {
      let feature = e.features[0]
      let coordinates = feature.geometry.coordinates.slice()
      while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
      }
      new mapbox.Popup()
        .setLngLat(coordinates)
        .setHTML(`<a href="${feature.properties.link}" target="_blank" class="a-block"><span class="a-target">${feature.properties.title}</span></a><div>${feature.properties.media}</div><div>${feature.properties.publish_date}</div>`)
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
      font-size: auto;
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
      line-height: $line-height-default;
    }
    .mapboxgl-popup-content {
    }
    .mapboxgl-popup-close-button {
      font-size: 1.5rem;
    }
  }
}
</style>

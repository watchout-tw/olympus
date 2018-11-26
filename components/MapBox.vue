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
    var markerHeight = 8
    let markerRadius = 4
    let linearOffset = 4
    var popupOffsets = {
      'top': [0, 0],
      'top-left': [0, 0],
      'top-right': [0, 0],
      'bottom': [0, -markerHeight],
      'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
      'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
      'left': [markerRadius, (markerHeight - markerRadius) * -1],
      'right': [-markerRadius, (markerHeight - markerRadius) * -1]
    }
    geojson.features.forEach(feature => {
      let el = document.createElement('div')
      el.classList.add('marker', 'doc')
      let popup = new mapbox.Popup({ offset: popupOffsets }).setHTML(feature.properties.title)
      new mapbox.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(popup)
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

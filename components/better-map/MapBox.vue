<template>
<div class="map-box">
  <div class="map-container">
    <div class="map content" id="map"></div>
  </div>
  <div class="note secondary-text font-size-small margin-top-4 d-flex align-items-center justify-content-center"><span>提示：點擊地圖上的圖示</span><span style="display: inline-block; font-size: 1.5rem; margin: 0 0.125rem;">④</span><span>看當地新聞</span></div>
  <div class="markers tcl-container">
    <a class="marker a-block tcl-panel tcl-left-right-margin with-top-bottom-margin with-padding bg-very-very-light-grey" :href="marker.properties.link" target="_blank" v-for="marker of selectedMarkers">
      <div class="date"><label>{{ marker.properties.date }}</label>&nbsp;<label v-if="marker.properties.publisher">{{ marker.properties.publisher }}</label></div>
      <div class="title" v-if="marker.properties.title">{{ marker.properties.title }}</div>
      <div class="title-tw" v-if="marker.properties.title_tw">{{ marker.properties.title_tw }}</div>
      <div class="description secondary-text font-size-small margin-top-bottom-4">{{ marker.properties.description }}</div>
      <label class="more">閱讀更多</label>
    </a>
    <div class="tcl-panel"></div>
    <div class="tcl-panel"></div>
    <div class="tcl-panel"></div>
  </div>
</div>
</template>

<script>
import config from 'watchout-common-functions/config/config'

export default {
  props: ['markers', 'config'],
  data() {
    return {
      map: null,
      mapElementID: 'map',
      selectedClusterID: null,
      selectedMarkers: []
    }
  },
  mounted() {
    const mapbox = require('mapbox-gl')
    // const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder')
    mapbox.accessToken = config.mapboxAccessToken

    this.map = new mapbox.Map({
      container: this.mapElementID,
      style: 'mapbox://styles/watchout/cjozx93ng11m72rlqumr7uobd',
      center: this.config && this.config.center ? this.config.center : { lat: 23.9609981, lng: 120.9718638 },
      zoom: this.config && this.config.zoom ? this.config.zoom : 1
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
    // https://www.mapbox.com/mapbox-gl-js/example/add-image/
    // https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/
    // https://www.mapbox.com/mapbox-gl-js/example/cluster/
    const sourceID = 'markers'
    let clusterRadius = 50
    this.map.on('load', (e) => {
      this.map.addSource(sourceID, {
        type: 'geojson',
        data: geojson,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius
      })
      this.map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'markers',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            'rgba(80, 227, 194, 0.85)',
            10,
            'rgba(255, 181, 93, 0.85)',
            30,
            'rgba(255, 83, 104, 0.85)'
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            16,
            10,
            24,
            25,
            32
          ]
        }
      })
      this.map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'markers',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium'],
          'text-size': 20
        }
      })
      this.map.addLayer({
        id: 'markers-not-in-cluster',
        type: 'circle',
        source: 'markers',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': 'rgba(80, 227, 194, 0.85)',
          'circle-radius': 8
        }
      })
    })
    this.map.on('click', 'clusters', (e) => {
      let cluster = this.map.queryRenderedFeatures(e.point, { layers: ['clusters'] })[0]
      let clusterCoordinates = cluster.geometry.coordinates

      // https://stackoverflow.com/a/52344700
      // https://www.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterleaves
      let clusterID = cluster.properties.cluster_id
      let markerCount = cluster.properties.point_count
      let source = this.map.getSource(sourceID)
      source.getClusterLeaves(clusterID, markerCount, 0, (error, markers) => {
        if(error) {
          console.error(error)
        }
        this.selectedMarkers = markers
        this.map.flyTo({
          center: clusterCoordinates,
          zoom: this.map.getZoom() + 1
        })
      })
    })
    this.map.on('click', 'markers-not-in-cluster', (e) => {
      let marker = e.features[0]
      let coordinates = marker.geometry.coordinates.slice()
      this.selectedMarkers = [marker]
      this.map.flyTo({
        center: coordinates,
        zoom: this.map.getZoom() + 1
      })
    })
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';
@import 'mapbox-gl/dist/mapbox-gl.css';
@import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
@import url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic:400,400i,700,700i');

.map-box {
  width: 100%;
  > .map-container {
    display: flex;
    width: 100%;
    max-width: $tcl-bp-lg;
    margin-left: auto;
    margin-right: auto;
    @include rect(2/1);

    > .map {
      width: 100%;
      flex-grow: 1;
      &.mapboxgl-map {
        font-family: $font-sans-serif;
        font-size: auto;
      }
      .mapboxgl-canvas {
        &:active, &:focus {
          outline: none;
        }
      }
      .mapboxgl-popup {
        max-width: 16rem;
        line-height: $line-height-default;
      }
      .mapboxgl-popup-content {
        min-width: 4rem;
        padding: 0.25rem 0.5rem;
        > .marker-html {
          margin: 0.5rem 0;
        }
      }
      .mapboxgl-popup-close-button {
        font-size: 1.5rem;
        line-height: 1;
        padding:0 0.25rem;
      }
    }
  }
  > .markers {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    > .marker {
      position: relative;
      @include shadow;
      > .date {
        font-size: $font-size-small;
        line-height: $line-height-tight;
      }
      > .title {
        font-family: 'Gentium Book Basic', Times, serif;
        font-style: italic;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: $line-height-tight;
        margin: 0.25rem 0;
      }
      > .title-tw {
        font-weight: bold;
      }
      > .more {
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 0.25rem;
        font-size: $font-size-tiny;
        line-height: $line-height-tight;
        color: $color-secondary-text-grey;
        @include underline(1.0);
      }
    }
  }
}
</style>

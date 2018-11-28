<template>
<div class="map-box">
  <div id="map-container" class="map-container content"></div>
</div>
</template>

<script>
import config from 'watchout-common-functions/config/config'

function getMarkerHTML(feature) {
  return `<div class="marker-html"><div style="font-size: 0.85em;">${feature.properties.media} ${feature.properties.publish_date}</div><a href="${feature.properties.link}" target="_blank" class="a-block"><span class="a-target">${feature.properties.title}</span></a></div>`
}

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
      center: [120.9605, 23.6978],
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
            25,
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
          'text-size': 16
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
        new mapbox.Popup()
          .setLngLat(clusterCoordinates)
          .setHTML(markers.map(getMarkerHTML).join(''))
          .addTo(this.map)
      })
    })
    this.map.on('click', 'markers-not-in-cluster', (e) => {
      let feature = e.features[0]
      let coordinates = feature.geometry.coordinates.slice()
      while(Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
      }
      new mapbox.Popup()
        .setLngLat(coordinates)
        .setHTML(getMarkerHTML(feature))
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
  @include rect(1);
  @include tcl-sm {
    @include rect(2/1);
  }
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
</style>

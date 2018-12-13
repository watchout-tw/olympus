<template>
<div class="map-box" :class="[config.theme]">
  <div class="map-container">
    <div class="map content" id="map"></div>
    <div class="datetime">{{ currentDateTime }}</div>
  </div>
  <div v-if="config.live" class="controls form-field-many-inputs justify-center margin-top-bottom-8">
    <div class="input button large musou" @click="togglePlay"><span>{{ isPlaying ? '暫停' : (nextMarker ? '繼續播放' : (nextToPlay < 0 ? '播放' : '再次播放')) }}</span></div>
    <div class="input button" @click="quitPlay" v-if="nextToPlay > -1"><span>結束播放</span></div>
  </div>
  <div class="note secondary-text font-size-tiny margin-top-4" v-if="nextToPlay < 0">
    <div class="d-flex align-items-center justify-content-center"><span>點擊地圖上的圖示</span><span style="display: inline-block; margin: 0 0.125rem; font-size: 1.5rem; line-height: 1;">④</span><span>看當地新聞</span></div>
    <div class="text-align-center" v-if="config.live">點擊「播放」自動播放各地新聞</div>
  </div>
  <div class="active-features tcl-container" v-if="activeFeatures.length > 0">
    <a class="feature a-block tcl-panel tcl-left-right-margin with-top-bottom-margin with-padding bg-very-very-light-grey" :href="feature.properties.link" target="_blank" v-for="feature of activeFeatures">
      <div class="primary-secondary-fields"><label>{{ feature.properties[config.feature.primaryField] }}</label>&nbsp;<label>{{ config.feature.secondaryFields.map(key => feature.properties[key]).join('') }}</label></div>
      <div class="title" v-if="feature.properties.title">{{ feature.properties.title }}</div>
      <div class="title-tw" v-if="feature.properties.title_tw">{{ feature.properties.title_tw }}</div>
      <div class="description secondary-text font-size-small margin-top-bottom-4">{{ feature.properties.description }}</div>
      <label class="more">閱讀更多</label>
    </a>
    <div class="tcl-panel"></div>
    <div class="tcl-panel"></div>
    <div class="tcl-panel"></div>
  </div>
  <div class="prompt-overlay" :class="[config.theme]" v-if="prompt.show">
    <div class="prompt" :class="prompt.classes">
      <div class="primary-secondary-fields font-weight-bold">{{ prompt.primaryField }}&nbsp;{{ prompt.secondaryFields }}</div>
      <div class="message">{{ prompt.description }}</div>
      <div class="dismiss" @click="dismissPrompt"><span>OK</span></div>
    </div>
  </div>
  <div class="prompt-overlay" :class="[config.theme]" v-if="config.finalPrompt && canShowFinalPrompt && finalPrompt.show">
    <div class="prompt" :class="prompt.classes">
      <div class="message paragraphs no-margin tightly-packed" :class="config.finalPrompt.classes" v-html="markdown(config.finalPrompt.message)"></div>
      <div class="share margin-top-bottom-single">
        <share-to-platforms :url="shareURL" />
      </div>
      <div class="dismiss" @click="finalPrompt.show = false"><span>OK</span></div>
    </div>
  </div>
</div>
</template>

<script>
import { knowsMarkdown } from 'watchout-common-functions/interfaces'
import config from 'watchout-common-functions/config/config'
import ShareToPlatforms from 'watchout-common-functions/components/ShareToPlatforms'

const SRC_STATIC = 'markers'
const SRC_LIVE = 'markers-live'
const SOURCES = [ SRC_STATIC, SRC_LIVE ]

const LAYER_CL = 'clusters'
const LAYER_CL_COUNT = 'cluster-count'
const LAYER_MARKERS = 'markers-not-in-cluster'
const LAYER_LIVE = 'markers-live'
const LAYERS = [ LAYER_CL, LAYER_CL_COUNT, LAYER_MARKERS, LAYER_LIVE ]

function makeFeature(marker) {
  return {
    type: 'Feature',
    properties: marker,
    geometry: {
      type: 'Point',
      coordinates: [marker.lng, marker.lat]
    }
  }
}

export default {
  mixins: [knowsMarkdown],
  props: {
    shareURL: String,
    markers: Array,
    config: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      map: null,
      mapElementID: 'map',
      activeClusterID: null,
      activeFeatures: [],
      staticDS: null,
      liveDS: null,
      isPlaying: false,
      nextToPlay: -1,
      timer: null,
      prompt: {
        show: false,
        classes: ['warning'],
        primaryField: null,
        secondaryFields: null,
        description: null
      },
      finalPrompt: {
        show: false
      }
    }
  },
  computed: {
    nextMarker() {
      return this.nextToPlay >= 0 && this.nextToPlay < this.markers.length ? this.markers[this.nextToPlay] : null
    },
    lastMarker() {
      let index = this.nextToPlay - 1
      return index >= 0 && index < this.markers.length ? this.markers[index] : null
    },
    currentDateTime() {
      return this.nextToPlay >= 0 && this.nextToPlay < this.markers.length ? this.nextMarker.date : this.markers[this.markers.length - 1].date
    },
    canShowFinalPrompt() {
      return !this.isPlaying && this.nextToPlay >= this.markers.length && !this.prompt.show
    }
  },
  watch: {
    canShowFinalPrompt() {
      this.finalPrompt.show = this.canShowFinalPrompt
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    clear() {
      LAYERS.forEach(layerName => {
        if(this.map.getLayer(layerName)) {
          this.map.removeLayer(layerName)
        }
      })
      SOURCES.forEach(sourceName => {
        if(this.map.getSource(sourceName)) {
          this.map.removeSource(sourceName)
        }
      })
      this.activeClusterID = null
      this.activeFeatures = []
      this.isPlaying = false
      this.nextToPlay = -1
      window.clearInterval(this.timer)
      this.timer = null
    },
    init() {
      const mapbox = require('mapbox-gl')
      // const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder')
      mapbox.accessToken = config.mapboxAccessToken

      this.map = new mapbox.Map({
        container: this.mapElementID,
        style: 'mapbox://styles/watchout/cjozx93ng11m72rlqumr7uobd',
        center: this.config.center ? this.config.center : { lat: 23.9609981, lng: 120.9718638 },
        zoom: this.config.zoom ? this.config.zoom : 1
      })
      this.map.addControl(new mapbox.NavigationControl(), 'top-left')
      // this.map.addControl(new MapboxGeocoder({ accessToken: config.mapboxAccessToken }), 'top-left')

      // https://www.mapbox.com/mapbox-gl-js/example/add-image/
      // https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/
      // https://www.mapbox.com/mapbox-gl-js/example/cluster/
      this.map.on('load', this.draw)
      this.map.on('click', 'clusters', (e) => {
        let cluster = this.map.queryRenderedFeatures(e.point, { layers: ['clusters'] })[0]
        let clusterCoordinates = cluster.geometry.coordinates

        // https://stackoverflow.com/a/52344700
        // https://www.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterleaves
        let clusterID = cluster.properties.cluster_id
        let markerCount = cluster.properties.point_count
        let source = this.map.getSource(SRC_STATIC)
        source.getClusterLeaves(clusterID, markerCount, 0, (error, markers) => {
          if(error) {
            console.error(error)
          }
          this.activeFeatures = markers
          this.map.flyTo({
            center: clusterCoordinates,
            zoom: this.map.getZoom() + 1
          })
        })
      })
      this.map.on('click', 'markers-not-in-cluster', (e) => {
        let marker = e.features[0]
        let coordinates = marker.geometry.coordinates.slice()
        this.activeFeatures = [marker]
        this.map.flyTo({
          center: coordinates,
          zoom: this.map.getZoom() + 1
        })
      })
    },
    draw() {
      if(!this.map.getSource(SRC_STATIC)) {
        this.staticDS = {
          type: 'FeatureCollection',
          features: this.markers.map(makeFeature)
        }
        this.map.addSource(SRC_STATIC, {
          type: 'geojson',
          data: this.staticDS,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50
        })
      }
      this.map.addLayer({
        id: LAYER_CL,
        type: 'circle',
        source: 'markers',
        filter: ['has', 'point_count'],
        paint: this.config.clusterLayerPaint
      })
      this.map.addLayer({
        id: LAYER_CL_COUNT,
        type: 'symbol',
        source: 'markers',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium'],
          'text-size': 20
        },
        paint: this.config.clusterCountLayerPaint
      })
      this.map.addLayer({
        id: LAYER_MARKERS,
        type: 'circle',
        source: 'markers',
        filter: ['!', ['has', 'point_count']],
        paint: this.config.markerLayerPaint
      })
    },
    preparePlay() {
      this.clear()
      if(!this.map.getSource(SRC_LIVE)) {
        this.liveDS = {
          type: 'FeatureCollection',
          features: []
        }
        this.map.addSource(SRC_LIVE, {
          type: 'geojson',
          data: this.liveDS
        })
      }
      this.map.addLayer({
        id: LAYER_LIVE,
        type: 'circle',
        source: SRC_LIVE,
        paint: this.config.liveLayerPaint
      })
      this.nextToPlay = 0
    },
    togglePlay() {
      if(this.isPlaying) {
        // pause
        window.clearInterval(this.timer)
        this.isPlaying = false
      } else {
        if(this.nextToPlay < 0 || this.nextToPlay >= this.markers.length) {
          this.preparePlay()
        }
        // resume
        this.isPlaying = true
        this.timer = window.setInterval(() => {
          if(this.lastMarker && this.lastMarker.display_type === 'warning') {
            // show prompt
            this.prompt.primaryField = this.lastMarker[this.config.feature.primaryField]
            this.prompt.secondaryFields = this.config.feature.secondaryFields.map(key => this.lastMarker[key]).join('')
            this.prompt.description = this.lastMarker.description
            this.togglePlay()
            this.prompt.show = true
          } else if(this.nextMarker) {
            // show next marker
            let nextFeature = makeFeature(this.nextMarker)
            this.liveDS.features.push(nextFeature)
            this.map.getSource(SRC_LIVE).setData(this.liveDS)
            this.activeFeatures.unshift(nextFeature)
            this.nextToPlay += 1
          } else {
            // stop
            this.togglePlay()
          }
        }, 100)
      }
    },
    quitPlay() {
      this.clear()
      this.draw()
    },
    dismissPrompt() {
      this.prompt.show = false
      if(!this.isPlaying && this.nextMarker) {
        this.nextToPlay += 1
        this.togglePlay()
      }
    }
  },
  components: {
    ShareToPlatforms
  }
}
</script>

<style lang="scss">
@import '~watchout-common-assets/styles/resources';
@import 'mapbox-gl/dist/mapbox-gl.css';
@import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
@import url('https://fonts.googleapis.com/css?family=Gentium+Book+Basic:400,400i,700,700i');
@import '~assets/colors';
@import '~assets/prompt-overlay';

.font-size-2x {
  font-size: 2rem;
}

.map-box {
  width: 100%;
  padding-bottom: 1rem;
  > .map-container {
    position: relative;
    display: flex;
    width: 100%;
    max-width: $tcl-bp-lg;
    margin-left: auto;
    margin-right: auto;
    @include rect(4/3);
    @include tcl-sm {
      @include rect(2/1);
    }

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
    > .datetime {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.25rem 0.5rem;
      background: white;
      font-size: $font-size-small;
      font-weight: bold;
    }
  }
  > .active-features {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    > .feature {
      position: relative;
      @include shadow;
      > .primary-secondary-fields {
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
  &.dark {
    background-color: #333;
  }
}
</style>

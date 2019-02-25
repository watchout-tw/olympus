<template>
<div class="map-box" :class="[config.theme]">
  <div class="map-container">
    <div class="map content" id="map"></div>
    <div class="datetime">{{ currentDateTime }}</div>
  </div>
  <div v-if="config.live" class="controls form-field-many-inputs justify-center margin-top-bottom-8">
    <div class="input button large musou" @click="play" v-if="!isPlaying">{{ nextEvent ? '繼續播放' : (hasNotStarted ? '播放' : '再次播放') }}</div>
    <div class="input button large musou" @click="pause" v-else>暫停</div>
    <div class="input button" @click="quitPlay" v-if="isPlaying || nextToPlay > 0">結束播放</div>
  </div>
  <div v-if="config.story" class="controls form-field-many-inputs justify-center margin-top-bottom-8">
    <div class="input button large musou" @click="flyBack" v-if="isPlaying && nextToPlay > 1">上一站</div>
    <div class="input button large musou" @click="fly">{{ isPlaying ? '下一站' : (hasNotStarted ? '回到1947年的台灣' : '重玩一次') }}</div>
  </div>
  <div class="note font-size-tiny margin-top-4" v-if="config.live && nextToPlay < 0">
    <div class="text-align-center" v-if="config.live">點擊「播放」自動播放各地新聞</div>
    <div class="d-flex align-items-center justify-content-center"><span>點擊地圖上的圖示</span><span style="display: inline-block; margin: 0 0.125rem; font-size: 1.5rem; line-height: 1;">④</span><span>看當地新聞</span></div>
  </div>
  <div class="active-features tcl-container" v-if="activeFeatures.length > 0">
    <a class="feature a-block tcl-panel tcl-left-right-margin with-top-bottom-margin bg-very-very-light-grey" :href="feature.properties.link" target="_blank" v-for="(feature, index) of activeFeatures" :style="getFeatureStyles(feature)" :key="`active-feature-${index}`">
      <div class="primary-secondary-fields" v-if="feature.properties[config.feature.primaryField]"><label>{{ feature.properties[config.feature.primaryField] }}</label>&nbsp;<label>{{ config.feature.secondaryFields.map(key => feature.properties[key]).join('') }}</label></div>
      <img class="image" v-if="feature.properties.image" v-show="imageIsLoaded" @load="imageIsLoaded = true" :src="feature.properties.image">
      <div class="description secondary-text font-size-small margin-top-bottom-4" v-if="feature.properties.image_caption">{{ feature.properties.image_caption }}</div>
      <audio controls v-if="feature.properties.audio"><source :src="feature.properties.audio" type="audio/mp3">哭哭，瀏覽器不支援播放音檔 QQ</audio>
      <div class="title" v-if="feature.properties.title">{{ feature.properties.title }}</div>
      <div class="title-tw" v-if="feature.properties.title_tw">{{ feature.properties.title_tw }}</div>
      <div class="description secondary-text font-size-small margin-top-bottom-4">{{ feature.properties.description }}</div>
      <label class="more" v-if="feature.properties.link">閱讀更多</label>
    </a>
    <div class="tcl-panel"></div>
    <div class="tcl-panel"></div>
    <div class="tcl-panel"></div>
  </div>
  <div class="prompt-overlay" :class="[config.theme]" v-if="prompt.show">
    <div class="prompt with-dismiss" :class="config.prompt.classes">
      <img class="image" v-if="prompt.image" :src="prompt.image">
      <div class="primary-secondary-fields font-weight-bold">{{ prompt.primaryField }}&nbsp;{{ prompt.secondaryFields }}</div>
      <div class="message">{{ prompt.description }}</div>
      <div class="dismiss" @click="dismissPrompt"><span>OK</span></div>
    </div>
  </div>
  <div class="prompt-overlay" :class="[config.theme]" v-if="config.finale && finale.show">
    <div class="prompt with-dismiss" v-if="config.finale.type === 'doc'">
      <ghost-article :article="doc.content" />
      <div class="dismiss" @click="finale.show = false"><span>OK</span></div>
    </div>
    <div class="prompt with-dismiss" :class="config.finale.classes" v-else>
      <div class="message paragraphs no-margin" :class="config.finale.messageClasses" v-html="markdown(config.finale.message)"></div>
      <div class="share margin-top-bottom-single">
        <share-to-platforms :url="shareURL" />
      </div>
      <div class="dismiss" @click="finale.show = false"><span>OK</span></div>
    </div>
  </div>
</div>
</template>

<script>
import * as firestore from 'watchout-common-functions/lib/firestore'
import { knowsMarkdown } from 'watchout-common-functions/interfaces'
import config from 'watchout-common-functions/config/config'
import ShareToPlatforms from 'watchout-common-functions/components/ShareToPlatforms'
import GhostArticle from 'watchout-common-functions/components/ghost/Article'

const SRC_STATIC = 'markers'
const SRC_LIVE = 'markers-live'
const SRC_FLY = 'markers-fly'
const SOURCES = [ SRC_STATIC, SRC_LIVE, SRC_FLY ]

const LAYER_CL = 'clusters'
const LAYER_CL_COUNT = 'cluster-count'
const LAYER_MARKERS = 'markers-not-in-cluster'
const LAYER_LIVE = 'markers-live'
const LAYER_FLY = 'markers-fly'
const LAYERS = [ LAYER_CL, LAYER_CL_COUNT, LAYER_MARKERS, LAYER_LIVE, LAYER_FLY ]

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
    },
    stepwise: Boolean
  },
  data() {
    return {
      map: null,
      mapElementID: 'map',
      activeClusterID: null,
      activeFeatures: [],
      staticDS: null,
      liveDS: null,
      playbackInterval: 150,
      isPlaying: false,
      nextToPlay: -1,
      timer: null,
      prompt: {
        show: false,
        primaryField: null,
        secondaryFields: null,
        description: null
      },
      finale: {
        show: false
      },
      doc: null,
      imageIsLoaded: false
    }
  },
  computed: {
    eventQueue() {
      let queue = []
      for(let i = 0; i < this.markers.length; i++) {
        let marker = this.markers[i]
        // only shows prompt, no marker
        if(marker.display_type === 'introduction') {
          queue.push({
            type: 'prompt',
            markerIndex: i
          })
          continue
        }
        queue.push({
          type: 'marker',
          markerIndex: i
        })
        if(marker.display_type === 'imminent_danger') {
          queue.push({
            type: 'prompt',
            markerIndex: i
          })
        }
      }
      if(this.config.finale) {
        queue.push({
          type: 'finale'
        })
      }
      return queue
    },
    hasNotStarted() {
      return this.nextToPlay < 0
    },
    nextEvent() {
      return this.nextToPlay >= 0 && this.nextToPlay < this.eventQueue.length ? this.eventQueue[this.nextToPlay] : null
    },
    nextEventMarker() {
      return this.nextEvent ? this.markers[this.nextEvent.markerIndex] : null
    },
    prevEvent() {
      return this.nextToPlay > 0 && this.nextToPlay <= this.eventQueue.length ? this.eventQueue[this.nextToPlay - 1] : null
    },
    prevEventMarker() {
      return this.prevEvent ? this.markers[this.prevEvent.markerIndex] : null
    },
    currentDateTime() {
      return this.nextEvent && this.nextEvent.markerIndex ? this.markers[this.nextEvent.markerIndex - 1].date : this.markers[this.markers.length - 1].date
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
      this.clearTimer()
    },
    init() {
      const mapbox = require('mapbox-gl')
      // const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder')
      mapbox.accessToken = config.mapboxAccessToken

      this.map = new mapbox.Map({
        container: this.mapElementID,
        style: 'mapbox://styles/watchout/cjozx93ng11m72rlqumr7uobd',
        center: this.config.center ? this.config.center : { lat: 25.0538962, lng: 121.5116391 },
        zoom: this.config.zoom ? this.config.zoom : 1
      })
      this.map.addControl(new mapbox.NavigationControl(), 'top-left')
      // this.map.addControl(new MapboxGeocoder({ accessToken: config.mapboxAccessToken }), 'top-left')

      // https://www.mapbox.com/mapbox-gl-js/example/add-image/
      // https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/
      // https://www.mapbox.com/mapbox-gl-js/example/cluster/
      if (this.stepwise) {
        firestore.bunko.getDoc(this.config.finale.id, true).then(response => {
          this.doc = response
        })
      } else {
        this.map.on('load', this.setClusterMarkers)
        this.setCluster()
      }
    },
    setClusterMarkers() {
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
        source: SRC_STATIC,
        filter: ['has', 'point_count'],
        paint: this.config.clusterLayerPaint
      })
      this.map.addLayer({
        id: LAYER_CL_COUNT,
        type: 'symbol',
        source: SRC_STATIC,
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
        source: SRC_STATIC,
        filter: ['!', ['has', 'point_count']],
        paint: this.config.markerLayerPaint
      })
    },
    setCluster() {
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
    clearTimer() {
      if(this.timer) {
        window.clearTimeout(this.timer)
      }
      this.timer = null
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
      this.isPlaying = false
      this.nextToPlay = 0
      this.clearTimer()
    },
    play() {
      if(this.nextToPlay < 0 || this.nextToPlay >= this.eventQueue.length) {
        this.preparePlay()
      }
      if(this.nextEvent.type === 'marker') {
        // show marker
        this.isPlaying = true
        let nextFeature = makeFeature(this.nextEventMarker)
        this.liveDS.features.push(nextFeature)
        this.map.getSource(SRC_LIVE).setData(this.liveDS)
        this.activeFeatures.unshift(nextFeature)

        // done
        this.nextToPlay += 1
        if(this.nextEvent) {
          this.timer = window.setTimeout(this.play, this.playbackInterval)
        } else {
          this.isPlaying = false
        }
      } else if(this.nextEvent.type === 'prompt') {
        // show prompt
        this.isPlaying = false
        this.prompt.primaryField = this.nextEventMarker[this.config.feature.primaryField]
        this.prompt.secondaryFields = this.config.feature.secondaryFields.map(key => this.nextEventMarker[key]).join('')
        this.prompt.description = this.nextEventMarker.description
        this.prompt.show = true

        // done
        this.nextToPlay += 1
      } else if(this.nextEvent.type === 'finale') {
        // show finale
        this.isPlaying = false
        this.finale.show = true
        // done
        this.nextToPlay += 1
      }
    },
    setFlyMarkers() {
      this.clear()
      if(!this.map.getSource(SRC_FLY)) {
        this.liveDS = {
          type: 'FeatureCollection',
          features: []
        }
        this.map.addSource(SRC_FLY, {
          type: 'geojson',
          data: this.liveDS
        })
      }
      this.map.addLayer({
        id: LAYER_FLY,
        type: 'circle',
        source: SRC_FLY
      })
      this.nextToPlay++
    },
    fly() {
      if(this.nextToPlay < 0 || this.nextToPlay >= this.eventQueue.length) {
        this.setFlyMarkers()
      }
      this.imageIsLoaded = false
      this.isPlaying = true
      if (this.nextEvent.type === 'marker') {
        let nextFeature = makeFeature(this.nextEventMarker)
        this.liveDS.features.push(nextFeature)
        this.map.getSource(SRC_FLY).setData(this.liveDS)
        this.map.flyTo({
          center: [this.nextEventMarker.lng, this.nextEventMarker.lat],
          zoom: this.nextEventMarker.zoom ? this.nextEventMarker.zoom : 15,
          speed: 1.2
        })
        this.activeFeatures.unshift(nextFeature)
      } else if (this.nextEvent.type === 'prompt') {
        // show prompt
        this.isPlaying = false
        this.prompt.primaryField = this.nextEventMarker[this.config.feature.primaryField]
        this.prompt.secondaryFields = this.config.feature.secondaryFields.map(key => this.nextEventMarker[key]).join('')
        this.prompt.description = this.nextEventMarker.description
        this.prompt.image = this.nextEventMarker.image
        this.prompt.show = true
      } else if (this.nextEvent.type === 'finale') {
        this.isPlaying = false
        this.finale.show = true
      }
      this.nextToPlay++
    },
    flyBack() {
      this.nextToPlay--
      if (this.prevEvent.type === 'marker') {
        this.liveDS.features.splice(this.liveDS.features.length - 1, 1)
        this.map.getSource(SRC_FLY).setData(this.liveDS)
        this.map.flyTo({
          center: [this.prevEventMarker.lng, this.prevEventMarker.lat],
          zoom: this.prevEventMarker.zoom ? this.prevEventMarker.zoom : 12,
          speed: 1.2
        })
        this.activeFeatures.splice(0, 1)
      } else if (this.prevEvent.type === 'prompt') {
        // show prompt
        this.isPlaying = false
        this.prompt.primaryField = this.prevEventMarker[this.config.feature.primaryField]
        this.prompt.secondaryFields = this.config.feature.secondaryFields.map(key => this.prevEventMarker[key]).join('')
        this.prompt.description = this.prevEventMarker.description
        this.prompt.image = this.prevEventMarker.image
        this.prompt.show = true
      }
    },
    pause() {
      this.clearTimer()
      this.isPlaying = false
    },
    quitPlay() {
      this.clear()
      this.draw()
    },
    dismissPrompt() {
      this.prompt.show = false
      if (this.stepwise) this.fly()
      else this.play()
    },
    getFeatureStyles(feature) {
      let colors = this.config.colors
      let styles = {}
      let displayType = feature.properties.display_type
      if(displayType !== 'default' && colors && colors.hasOwnProperty(displayType)) {
        styles.borderColor = colors[displayType]
      }
      return styles
    }
  },
  components: {
    GhostArticle,
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

.font-size-large {
  font-size: 1.25rem;
}
.text-align-default {
  text-align: left;
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
      padding: 0.5rem;
      border: 0.5rem solid transparent;
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
      > .image {
        max-width: 100%;
        margin: 0.25rem 0;
      }
      > .more {
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 0.25rem;
        font-size: $font-size-tiny;
        line-height: $line-height-tight;
        color: $color-secondary-text-grey;
        @include underline($color-watchout, 1.0);
      }
    }
  }
  > .note {
    color: rgba(white, 0.95);
  }
  &.dark {
    background-color: #333;
  }
}
</style>

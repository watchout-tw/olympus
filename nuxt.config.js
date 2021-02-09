const pkg = require('./package')

function getFavicon(projectID) {
  return 'https://raw.githubusercontent.com/watchout-tw/watchout-common-assets/master/images/logo/' + projectID + '/small.png'
}
function getProjectLogo(projectID) {
  return 'https://raw.githubusercontent.com/watchout-tw/watchout-common-assets/master/images/logo/' + projectID + '/large.png'
}

const info = require('./data/info')
const siteTitle = info.SITE_TITLE
const siteDescription = info.SITE_DESCRIPTION

export default {
  head: {
    title: siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDescription }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: getFavicon('musou') },
      { rel: 'apple-touch-icon', sizes: '256x256', href: getProjectLogo('musou') }
    ]
  },
  loading: {
    color: '#E64C5E',
    height: '4px'
  },
  // Global CSS
  css: [],
  // Plugins to load before mounting the App
  plugins: [
    '~/plugins/firestore.js'
  ],
  // Nuxt.js modules
  modules: [
    '@nuxtjs/gtm'
  ],
  gtm: {
    id: 'GTM-TF76PLV'
  },
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  // Server middleware
  serverMiddleware: [
    '~/servermiddleware/301.js'
  ],
  // Build configuration
  build: {
    transpile: [
      'watchout-common-assets',
      'watchout-common-functions'
    ],
    // Extend webpack config here
    extend(config, ctx) {
      // To require('fs')
      config.node = {
        fs: 'empty'
      }
    }
  }
}

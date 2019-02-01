const nodeExternals = require('webpack-node-externals')
function getFavicon(projectID) {
  return 'https://raw.githubusercontent.com/watchout-tw/watchout-common-assets/master/images/logo/' + projectID + '/small.png'
}
function getProjectLogo(projectID) {
  return 'https://raw.githubusercontent.com/watchout-tw/watchout-common-assets/master/images/logo/' + projectID + '/large.png'
}
module.exports = {
  head: {
    title: '沃草國會無雙',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: '沃草國會無雙是⋯', hid: 'description' }
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
  build: {
    vender: ['axios', 'vuex'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^watchout-common/]
          })
        ]
      }
    }
  },
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-TF76PLV' }]
  ],
  serverMiddleware: [
    '~/servermiddleware/301.js'
  ]
  // NOTE: Add Markdown loader <https://github.com/nuxt/nuxt.js/issues/1072>
}

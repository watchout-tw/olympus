import * as firestore from 'watchout-common-functions/lib/firestore'
import * as util from 'watchout-common-functions/lib/util'
import * as watchout from 'watchout-common-functions/lib/watchout'
import config from 'watchout-common-functions/config/config'
const i18n = require('./config/i18n')
const info = require('./data/info')
const siteTitle = info.SITE_TITLE
const siteDescription = info.SITE_DESCRIPTION

function getFavicon(projectID) {
  return 'https://raw.githubusercontent.com/watchout-tw/watchout-common-assets/master/images/logo/' + projectID + '/small.png'
}
function getProjectLogo(projectID) {
  return 'https://raw.githubusercontent.com/watchout-tw/watchout-common-assets/master/images/logo/' + projectID + '/large.png'
}

async function getSitemap() {
  let routes = []
  let pubDest = info.CHANNEL_ID
  await firestore.sys.init({})
  let docs = await firestore.bunko.getDocs({ pubDest, limit: -1 })
  routes = routes.concat(docs.map(doc => {
    return {
      url: `/read/${doc.id}`,
      changefreq: 'monthly',
      lastmod: util.fsTSToDateObj(doc.contentUpdatedAt || doc.publishedAt)
    }
  }))
  let latestDoc = docs.reduce((prev, curr) => {
    return util.fsTSCompare(prev.contentUpdatedAt || prev.publishedAt, curr.contentUpdatedAt || curr.publishedAt) > 0 ? prev : curr
  })

  let projects = await firestore.bunko.getProjects({ pubDest })
  routes = routes.concat(projects.map(project => {
    return {
      url: `/${project.slug}`,
      changefreq: 'monthly',
      lastmod: util.fsTSToDateObj(project.contentUpdatedAt || project.publishedAt)
    }
  }))

  return {
    hostname: watchout.getBaseURL('musou'),
    gzip: true,
    exclude: [],
    defaults: {
      changefreq: 'weekly',
      lastmod: util.fsTSToDateObj(latestDoc.contentUpdatedAt || latestDoc.publishedAt)
    },
    routes: routes
  }
}

function getRobotsTXT() {
  let allow = {
    UserAgent: '*',
    Allow: '/', // accepts function
    Sitemap: watchout.getBaseURL('musou')
  }
  let notallow = {
    UserAgent: '*',
    Disallow: '/' // accepts function
  }
  return [].push(config.env === 'production' ? allow : notallow)
}

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
    '@nuxtjs/gtm',
    'nuxt-i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  gtm: {
    id: 'GTM-TF76PLV'
  },
  i18n: i18n.config,
  robots: getRobotsTXT(),
  sitemap: async function() {
    return await getSitemap()
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

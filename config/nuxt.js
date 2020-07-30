'use strict'

const { resolve } = require('path')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Adonuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1'
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge,chrome=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'favicon.png'
      }
    ],
    noscript: [{ innerHtml: `
      <h1>Javascript Disabled</h1>
      <p>It appears that you do not have Javascript enabled. This application relies on Javascript for most of our features.<p>
      <p>Please enable Javascript and <a href=".">reload</a> in order to use this site.</p>
    `}]
  },

  loading: {
    color: '#744d82'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: '127.0.0.1',
    https: true
  },
  auth: {
    redirect: {
      login: '/user/login',
      logout: '/',
      home: '/'
    },
    localStorage: {
      prefix: 'auth.'
    },
    cookie: false,
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/auth/RequestToken',
            method: 'post',
            propertyName: false
          },
          logout: {
            url: '/api/auth/logout',
            method: 'get'
          },
          user: {
            url: '/api/user/me',
            method: 'get',
            propertyName: false
          }
        }
      },
      // google: {
      //   client_id: env.GOOGLE_CLIENT_ID,
      //   // '821875460763-rmf638dvvf5es89shlmi54hf9h7v43s1.apps.googleusercontent.com',
      //   redirect_uri: env.LOGIN_GOOGLE_CALLBACK // 'https://localhost:44371/api/auth/LoginWithGoogleCallback'
      // },
      redirect: {
        login: '/user/login',
        logout: '/user/login',
        home: '/'
      }
    }
  },
  build: {
    analyze: {
      analyzerMode: 'static',
      generateStatsFile: true,
      statsFilename: 'webpack-stats.json'
    }
  },
  /*
   ** Global CSS
   */
  css: [
    '~assets/styles/main.css'
  ],
  
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~/plugins/vuesax', ssr: false },
    { src: '~/plugins/vue-bootstrap', ssr: false }
  ],
  router: {
    base: '/',
    scrollBehaviour: () => ({
      x: 0,
      y: 0
    })
  },

  srcDir: resolve(__dirname, '..', 'resources'),
  extend(config, ctx) {
    // Run ESLint on save
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/
      })
    }
  }
}

const path = require('path')
import Mode from "frontmatter-markdown-loader/mode"

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - NS Repo` : 'NS Repo';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/globalComponents'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      './assets/scss/_normalize.scss',
      './assets/scss/main.scss',
      './assets/scss/globals.scss',

      './assets/scss/input.scss',
      './assets/scss/font.scss',
    ]
  },

  // case insnsitive routes
  router: {
    extendRoutes(routes) {
      for (const key in routes) {
        routes[key].caseSensitive = false
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      };
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.HTML, Mode.BODY, Mode.META, Mode.VUE_RENDER_FUNCTIONS],
          vue: {
            root: "dynamicMarkdown"
          }
        }
      });
      config.module.rules.push({
        test: /\.yml$/,
        use: 'js-yaml-loader',
      })
    }
  }
}

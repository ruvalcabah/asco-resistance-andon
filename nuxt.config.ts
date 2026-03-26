// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // app template
  app: {
    head: {
      title: 'Asco Resistance ANDON App',
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        // { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      nodeEnv: 'development', // can be overridden by NUXT_PUBLIC_NODE_ENV environment variable
      serverName: 'localhost' // can be overridden by NUXT_PUBLIC_SERVER_NAME environment variable
    }
  },
  modules: ['vuetify-nuxt-module'],
  vuetify: {
    moduleOptions: {
      /* module specific options */
      styles: { configFile: 'public/assets/variables.scss' }
    },
    vuetifyOptions: {
      /* vuetify options */
      labComponents: true
    }
  },
  typescript: {
    strict: false
  }
  // css: ['@/public/assets/variables.scss']
});

export default {
  mode: 'universal',
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ,{ href: 'https://fonts.googleapis.com/css?family=Poppins:100|Poppins:200|Poppins:300|Poppins:400|Poppins:500|Poppins:600|Poppins:700|Poppins:800|Poppins:900', rel: 'stylesheet'}
    ],
    script: [
      { src: 'https://kit.fontawesome.com/48d20e9c42.js', crossorigin: 'anonymous', type:'text/javascript'}
      ,{ src: 'http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js', crossorigin: 'anonymous', type: 'text/javascript'}
      ,{ src: 'http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js', crossorigin: 'anonymous', type: 'text/javascript'}
      ,{ src: 'https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js', type: 'text/javascript'}
      ,{ src: 'https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js', type: 'text/javascript'}
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
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

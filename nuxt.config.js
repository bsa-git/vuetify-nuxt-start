const webpack = require('webpack')
module.exports = {
    /*
     ** Middleware
     */
    router: {
        middleware: 'ini-app'
    },
    generate: {
        dir: 'docs'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'Nuxt + Vuetify project',
        meta: [
            {charset: 'utf-8'},
            {"http-equiv": 'X-UA-Compatible', content: 'IE=edge'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico'},
            // {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {color: '#3B8070'},
    /*
     ** Build configuration
     */
    build: {
        vendor: [
            'babel-polyfill',
            'vuetify',
            'vee-validate',
            'lodash',
            'axios',
            'qs', // Parser JSON/QUERY
            'cheerio',// Parser HTML/XML
            'express-useragent',// Get useragent info
            '~plugins/lib/http.class', // http class
            // '~plugins/lib/utility-box'
        ],
        plugins: [
            new webpack.ProvidePlugin({
                '_': 'lodash',
            })
        ]
    },
    plugins: [
        '~plugins/vuetify.js',
        // '~plugins/vee-validate.js',
    ],
    css: [
        {src: '~assets/style/vuetify.styl', lang: 'styl'},
        {src: '~assets/style/app.styl', lang: 'styl'}
    ]
}

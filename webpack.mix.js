const mix = require('laravel-mix')

mix
    .js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .autoload({
        vue: "Vue",
        lodash: "_"
    })
    .extract([
        "lodash",
        "nprogress",
        "vue",
        "vue-router"
    ])
    .sourceMaps()
    .browserSync({
        open: 'external',
        host: "drive.dev",
        proxy: "drive.dev",
        files: [
            "public/**/*.html",
            "public/js/**/*.js",
            "public/css/**/*.css"
        ]
    })
    .webpackConfig({
        resolve : {
            alias : {
                '@js.views' : path.join(__dirname, 'resources/js/views'),
                '@js.components' : path.join(__dirname, 'resources/js/components'),
                '@js.helpers' : path.join(__dirname, 'resources/js/mixins/helpers')
            }
        }
    })

require('dotenv').config({
    path: __dirname + '/.env'
});

let env = process.env

const mix = require('laravel-mix')

mix
    .js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .autoload({
        axios: "axios",
        vue: "Vue",
        lodash: "_",
        NProgress: "nprogress"
    })
    .extract([
        "lodash",
        "vue",
        "vue-router",
        "nprogress"
    ])
    .webpackConfig({
        resolve : {
            alias : {
                '@views' : path.join(__dirname, 'resources/assets/js/views'),
                '@components' : path.join(__dirname, 'resources/assets/js/components'),
                '@helpers' : path.join(__dirname, 'resources/assets/js/mixins/helpers')
            }
        }
    })

if (mix.inProduction()) {
    mix.version()
    mix.disableNotifications()
} else {
    mix.sourceMaps()
        .browserSync({
            open: 'external',
            host: env.APP_DOMAIN,
            proxy: env.APP_DOMAIN,
            files: [
                "public/**/*.html",
                "public/js/**/*.js",
                "public/css/**/*.css"
            ]
        })
}
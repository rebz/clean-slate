require('dotenv').config({
    path: __dirname + '/.env'
});

let env = process.env

const mix = require('laravel-mix')

mix.setPublicPath('public/')
    .js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .autoload({
        axios: "axios",
        nprogress: "nprogress",
        vue: "Vue"
    })
    .extract([
        "axios",
        "nprogress",
        "vue",
        "vue-router",
        "vuex"
    ])
    .webpackConfig({
        resolve : {
            alias : {
                '@': path.join(__dirname, 'resources/js'),
                '@views' : path.join(__dirname, 'resources/js/views'),
                '@directives' : path.join(__dirname, 'resources/js/directives'),
                '@components' : path.join(__dirname, 'resources/js/components'),
                '@mixins' : path.join(__dirname, 'resources/js/mixins'),
                '@store': path.join(__dirname, 'resources/js/store'),
                '@helpers': path.join(__dirname, 'resources/js/helpers'),
                '@classes' : path.join(__dirname, 'resources/js/classes'),
                '@router' : path.join(__dirname, 'resources/js/classes'),
                '@config' : path.join(__dirname, 'resources/js/config'),
                // "@resources": "resources/js/resources",
                // "@app": "resources/js/app",
                // "@models": "resources/js/app/models",
            }
        }
    })

if (mix.inProduction()) {
    mix.sourceMaps(false)
        .version()
        .disableNotifications()
} else {
    mix.sourceMaps(true)
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

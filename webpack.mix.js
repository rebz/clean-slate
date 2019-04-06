require('dotenv').config({
    path: __dirname + '/.env'
});

let env = process.env

const mix = require('laravel-mix')

mix.setPublicPath('public/')
    .js('src/js/app.js', 'public/js/app.js')
    .sass('src/sass/app.scss', 'public/css/app.css')
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
                '@': path.join(__dirname, 'src/js'),
                '@api' : path.join(__dirname, 'src/js/api'),
                '@classes' : path.join(__dirname, 'src/js/classes'),
                '@components' : path.join(__dirname, 'src/js/components'),
                '@config' : path.join(__dirname, 'src/js/config'),
                '@directives' : path.join(__dirname, 'src/js/directives'),
                '@helpers': path.join(__dirname, 'src/js/helpers'),
                '@mixins' : path.join(__dirname, 'src/js/mixins'),
                '@models' : path.join(__dirname, 'src/js/models'),
                '@router' : path.join(__dirname, 'src/js/router'),
                '@store': path.join(__dirname, 'src/js/store'),
                '@views' : path.join(__dirname, 'src/js/views')
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

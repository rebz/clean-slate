const path = require('path')
const loaders = require('./webpack.loaders')
const plugins = require('./webpack.plugins')

module.exports = {

    entry: {
        app: [
            path.join(__dirname, "resources/js/app.js"),
            // path.join(__dirname, "resources/js/main.js"),
            path.join(__dirname, "resources/sass/app.scss"),
        ],
    },

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js'
    },

    module: {
        rules: [
            loaders.js(),
            loaders.vue(),
            loaders.css(),
            loaders.fonts(),
            loaders.images()
        ]
    },

    plugins: [
        plugins.html(),
        plugins.vue(),
        plugins.cssExtract()
    ],

    // TODO - Learn more about `resolve`, https://webpack.js.org/configuration/resolve/
    resolve: {
        extensions: [".js", ".vue", ".json"],
        alias: {
            "vue$": "vue/dist/vue.esm.js", // TODO - Better understand why this is required.
            "@resources": path.join(__dirname, "resources"),
            "@views": path.join(__dirname, "resources/js/views"),
            "@components": path.join(__dirname, "resources/js/components"),
            "@mixins": path.join(__dirname, "resources/js/mixins"),
            "@store": path.join(__dirname, "resources/js/store"),
            "@router": path.join(__dirname, "resources/js/router"),
        },
    },

    devServer: {
        // Display only errors to reduce the amount of output.
        stats: "errors-only",

        historyApiFallback: true, // TODO - read more about this
        overlay: true, // TODO - https://www.npmjs.com/package/error-overlay-webpack-plugin

        // Parse host and port from env to allow customization.
        //
        // If you use Docker, Vagrant or Cloud9, set
        // host: options.host || "0.0.0.0";
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: 'cleanslate.test', // Defaults to `localhost`
        port: 8080, // Defaults to 8080
        open: true, // Open the page in browser
    },
};


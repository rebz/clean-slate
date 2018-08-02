const path = require('path')
const loaders = require('./resources/build/loaders')
const plugins = require('./resources/build/plugins')

module.exports = () => {

    const config = {
        appName: 'My Application Name'
    }

    return {

        entry: {
            app: [
                path.join(__dirname, "resources/js/app.js"),
                path.join(__dirname, "resources/sass/app.scss"),
            ],
        },

        output: {
            publicPath: '/',
            path: path.resolve(__dirname, 'public'),
            filename: 'js/[name].js'
        },

        /*
         *  Sourcemaps
         *  https://survivejs.com/webpack/building/source-maps/
         *  key: devtool
         *  values:
         *      Inline Source Map Types
         *          eval                            = generates code in which each module is wrapped within an eval function
         *          cheap-eval-source-map           = goes a step further and it includes base64 encoded version of the code as a data url. The result contains only line data while losing column mappings
         *          cheap-module-eval-source-map    = same idea, except with higher quality and lower performance
         *          eval-source-map                 = is the highest quality option of the inline options. It's also the slowest one as it emits the most data
         *      Separate Source Map Types
         *          cheap-source-map                = is similar to the cheap options above. The result is going to miss column mappings. Also, source maps from loaders, such as css-loader, are not going to be used
         *          cheap-module-source-map         = is the same as previous except source maps from loaders are simplified to a single mapping per line. It yields the following output in this case
         *          hidden-source-map               = hidden-source-map is the same as source-map except it doesn't write references to the source maps to the source files. If you don't want to expose source maps to development tools directly while you wish proper stack traces, this is handy.
         *          nosources-source-map            = creates a source map without sourcesContent in it. You still get stack traces, though. The option is useful if you don't want to expose your source code to the client
         *          source-map                      = slowest and highest quality option of them all, good for production
         */
        devtool: "eval",

        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        name: "vendors",
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        chunks: "all",
                        enforce: true
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
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
            plugins.html(config),
            plugins.vue(),
            plugins.cssExtract()
        ],

        // TODO - Learn more about `resolve`, https://webpack.js.org/configuration/resolve/
        resolve: {
            extensions: [".js", ".vue", ".json"],
            alias: {
                "vue$": "vue/dist/vue.esm.js", // TODO - Better understand why this is required... I understand the different versions just not this part in particular
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
        }
    }
};


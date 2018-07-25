const path = require('path')

// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    entry: {
        app: [
            path.join(__dirname, "resources/sass/app.scss"),
        ],
    },

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'public'),
        filename: `js/[name].js?`,
        chunkFilename: `js/[name].js?`,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            template: "./resources/html/index.html"
        }),
    ],

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
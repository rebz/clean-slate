/*
 * TODO
 *
 * Copy Webpack Plugin - https://www.npmjs.com/package/copy-webpack-plugin
 *
 */

const parts = require('./webpack.parts')

const path = require('path')

// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// https://github.com/webpack-contrib/mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {

    entry: {
        app: [
            path.join(__dirname, "resources/js/app.js"),
            path.join(__dirname, "resources/sass/app.scss"),
        ],
    },

    module: {
        rules: [
            parts.js(),
            parts.vue(),
            parts.css(),
            parts.fonts(), // TODO - Test that fonts are actually being loaded...
            parts.images(),
        ],
    },

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            template: "./resources/html/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        })
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


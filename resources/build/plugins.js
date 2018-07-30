/*
 * TODO
 *
 * Copy Webpack Plugin - https://www.npmjs.com/package/copy-webpack-plugin
 *
 */

// https://vue-loader.vuejs.org/options.html
const { VueLoaderPlugin } = require("vue-loader");

// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// https://github.com/webpack-contrib/mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

exports.vue = () => {
    return new VueLoaderPlugin() // TODO - Options
}

exports.html = (config) => {
    return new HtmlWebpackPlugin({
        title: config.appName || 'HtmlWebpackPlugin App Name',
        template: "./resources/html/index.html",
        meta: {
            viewport: 'width=device-width, initial-scale=1, user-scalable=0'
        }
    })
}

exports.cssExtract = () => {
    return new MiniCssExtractPlugin({
        filename: "css/[name].css",
    })
}
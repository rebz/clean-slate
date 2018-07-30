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
    // TODO - Options
    return new VueLoaderPlugin()
}

exports.html = () => {
    return new HtmlWebpackPlugin({
        title: "Webpack demo",
        template: "./resources/html/index.html"
    })
}

exports.cssExtract = () => {
    return new MiniCssExtractPlugin({
        filename: "css/[name].css",
    })
}
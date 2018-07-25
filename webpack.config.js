// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            template: "./resources/html/index.html"
        }),
    ],
};
// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function () {
    return new HtmlWebpackPlugin({
        template: "./resources/html/index.html"
    });
};

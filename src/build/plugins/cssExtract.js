const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (config) {
    return new MiniCssExtractPlugin({
        filename: config.isProduction ? `css/[name].css?[${config.hashType}]` : `css/[name].css`,
        chunkFilename: config.isProduction ? `css/[id].css?[${config.hashType}]` : `css/[id].css`,
    });
};
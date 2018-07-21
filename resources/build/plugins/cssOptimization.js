// https://github.com/NMFR/optimize-css-assets-webpack-plugin
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function () {
    return new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
            safe: true,
            discardComments: {
                removeAll: true,
            },
        },
        // assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        canPrint: true
    });
};

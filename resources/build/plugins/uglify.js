const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = function () {
    return new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // TODO - based off config, show sourcemaps when not in production, currently shows only in production
    });
};

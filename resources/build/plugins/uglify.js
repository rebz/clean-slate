const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = function () {
    return new UglifyJSPlugin({
        cache: true,
        parallel: 4, // true
        sourceMap: false, // TODO - based off config, show sourcemaps when not in production, currently shows only in production
    });
};

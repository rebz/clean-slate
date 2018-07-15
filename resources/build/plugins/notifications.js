const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = function (config) {
    return new WebpackNotifierPlugin({
        title: config.appName || 'Generic App Title',
        alwaysNotify: false,
        skipFirstNotification: true,
    });
};

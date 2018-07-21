// https://github.com/jantimon/favicons-webpack-plugin
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = function (config) {
    return new FaviconsWebpackPlugin({

        // Your source logo
        logo: './resources/images/favicon.png',

        // The prefix for all image files (might be a folder or a name)
        prefix: 'icons-[hash]/',

        // Emit all stats of the generated icons
        emitStats: false,

        // The name of the json containing all favicon information
        statsFilename: 'iconstats-[hash].json',

        // Generate a cache file with control hashes and
        // don't rebuild the favicons until those hashes change
        persistentCache: true,

        // Inject the html into the html-webpack-plugin
        inject: true,

        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: null,

        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        title: config.appName,

        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: true,
            yandex: false,

            windows: true
        }
    });
};

module.exports = function (config) {
    return {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
            ...(!config.isProduction ? ["cache-loader"] : []),
            {
                loader: "babel-loader",
            },
        ],
    };
};

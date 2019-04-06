module.exports = function (config) {
    return {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
            {
                loader: "babel-loader",
            },
        ],
    };
};

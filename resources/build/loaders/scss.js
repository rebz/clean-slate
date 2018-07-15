const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (config) {
    return {
        test: /\.s[ac]ss|\.css/,
        use: [
            // TODO - fix below, it wont recompile the CSS after running `npm run dev` once
            // ...(!config.isProduction ? ["cache-loader"] : []),
            {
                loader: config.hmr ? "style-loader" : MiniCssExtractPlugin.loader,
            },
            {
                loader: "css-loader",
                options: {
                    sourceMap: !config.isProduction,
                    minimize: config.isProduction,
                    importLoaders: 1,
                },
            },
            {
                loader: "resolve-url-loader",
                options: {
                    sourceMap: !config.isProduction,
                },
            },
            {
                loader: "postcss-loader",
                options: {
                    ident: "postcss",
                    autoprefixer: {
                        browsers: ["last 2 versions"],
                    },
                    sourceMap: !config.isProduction,
                    plugins: () => [autoprefixer],
                },
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: !config.isProduction,
                },
            },
        ],
    };
};

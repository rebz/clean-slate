// TODO - https://www.npmjs.com/package/fast-sass-loader
// TODO - http://cssnext.io/
// TODO - Question... why is a sourceMap key added to each loader? How do I control this between dev/watch/prod commands?

const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Output extracted CSS to a file
exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.s[ac]ss|\.css/,
                include,
                exclude,
                use: [
                    // 'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2, // TODO - better understand how this works
                            sourceMap: true
                        }
                    },
                    {
                        // TODO - learn more about https://github.com/webpack-contrib/css-loader
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            autoprefixer: {
                                browsers: [
                                    '> 1%',
                                    'last 2 versions',
                                    'IE 11'
                                ],
                            },
                            plugins: () => [autoprefixer]
                        }
                    },
                    {
                        // TODO - learn more about https://www.npmjs.com/package/resolve-url-loader
                        loader: 'resolve-url-loader'
                    },
                    'sass-loader'
                ]
            }
        ]
    }
})
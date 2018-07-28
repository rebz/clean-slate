// TODO - https://www.npmjs.com/package/fast-sass-loader
// TODO - http://cssnext.io/
// TODO - Question... why is a sourceMap key added to each loader? How do I control this between dev/watch/prod commands?
// TODO - Question... when is it efficient to use `style-loader` over MiniCssExtractPlugin.loader?

const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.css = ({ include, exclude } = {}) => {
    return {
        test: /\.s[ac]ss|\.css/,
        // include,
        // exclude,
        use: [
            {
                // loader: 'style-loader'
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
                loader: 'resolve-url-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
        ]
    }
}


exports.images = ({ include, exclude } = {}) => {
    return {
        test: /\.(jpg|png)$/,
        // include,
        // exclude,
        use: [
            {
                loader: "url-loader", // inlines images to base64
                options: {
                    fallback: 'file-loader',
                    name: "images/[name].[hash].[ext]",
                    limit: 90000 // <8kb
                }
            }
        ]
    }
}
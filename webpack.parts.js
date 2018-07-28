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
            // TODO - Research other URL/Image Loaders; possibly don't use the `url-loader`.
            // TODO - Possible addition/replacement... https://github.com/tcoopman/image-webpack-loader
            // TODO - Compression... https://github.com/vanwagonet/img-loader
            /*
             * Regarding CSS, it will only affect images referenced via a relative path
             * Images with an absolute path will be ignored
             */
                loader: "url-loader", // inlines images to base64
                options: {
                    fallback: 'file-loader', // fallback to file loader if above `limit`
                    name: "images/[name].[ext]?[hash:8]",
                    limit: 12000 // <12kb
                }
            }
        ]
    }
}

exports.fonts = () => {
    return {
        test: /\.(woff|woff2|ttf|eot|svg|otf)$/,
        loader: "file-loader",
        options: {
            limit: 4096,
            name: "fonts/[name].[ext]?[hash:8]"
        },
    }
}

exports.js = () => {

    /*
     *  Package:        babel-core
     *  Description:    contains the Node API and require hook
     *  Docs:           https://babeljs.io/docs/en/babel-core
     */

    /*
     *  Package:        babel-loader
     *  Description:    allows transpiling of JavaScript files using Babel and Webpack
     *  Docs:           https://github.com/babel/babel-loader
     */

    /*
     *  Package:        babel-plugin-syntax-dynamic-import
     *  Description:    allows for parsing of `import()`
     *  Docs:           https://babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html
     */

    /*
     *  Package:        babel-preset-env
     *  Description:    enables the required plugins based on the optional environment definition passed to it
     *  Docs:           https://babeljs.io/docs/en/next/babel-preset-env.html
     *  Requires:       .babelrc
     */

    return {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
            {
                loader: "babel-loader"
            }
        ],
    }
}

exports.vue = () => {
    return {
        test: /\.vue$/,
        use: [
            {
                loader: 'vue-loader'
            }
        ]
    }
}
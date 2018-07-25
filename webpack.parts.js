// TODO - https://www.npmjs.com/package/fast-sass-loader
// TODO - http://cssnext.io/

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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
})
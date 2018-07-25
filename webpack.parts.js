// TODO - https://www.npmjs.com/package/fast-sass-loader
// TODO - http://cssnext.io/
exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.s[ac]ss|\.css/,
                include,
                exclude,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
})
const path = require("path");
const envConfig = require('dotenv').config().parsed
const buildPath = "./resources/build/";
const jsPath = "resources/js/";

module.exports = (env, argv) => {

    const config = {
        mode: argv.mode,
        host: envConfig.APP_HOST,
        appName: envConfig.APP_NAME || 'AppNameNotSpecified',
        root: path.resolve(__dirname),
        hmr: process.argv.includes("--hot"),
        isProduction: argv.mode === "production",
        outputPath: path.join(__dirname, "public"),
        hashType: process.argv.includes("--hot") ? "hash" : "contenthash"
    };

    return {
        mode: config.mode,
        context: config.root,
        optimization: require(buildPath+"optimization")(config),
        devtool: config.isProduction ? "source-map" : "eval-source-map",
        entry: {
            app: [
                path.join(config.root, "resources/js/app.js"),
                path.join(config.root, "resources/sass/app.scss")
            ],
        },
        output: {
            publicPath: "/",
            path: config.outputPath,
            filename: config.isProduction ? `js/[name].js?[${config.hashType}]` : `js/[name].js`,
            chunkFilename: config.isProduction ? `js/[name].js?[${config.hashType}]` : `js/[name].js`
        },
        module: {
            noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
            rules: [
                require(buildPath+"loaders/js")(config),
                require(buildPath+"loaders/vue")(config),
                require(buildPath+"loaders/scss")(config),
                require(buildPath+"loaders/html")(config),
                require(buildPath+"loaders/fonts")(config),
                require(buildPath+"loaders/images")(config)
            ],
        },
        plugins: [
            require(buildPath+"plugins/define")({
                ENV: config.mode,
            }),
            require(buildPath+"plugins/clean")(config),
            require(buildPath+"plugins/html")(config),

            // duplicate, abstract 1 into favicon, another for other, larger, icons
            // require(buildPath+"plugins/favicon")(config),

            require(buildPath+"plugins/vue")(config),

            require(buildPath+"plugins/cssExtract")(config),

            require(buildPath+"plugins/moduleConcatentation")(config),
            require(buildPath+"plugins/errors")(config),
            require(buildPath+"plugins/notifications")(config),
            require(buildPath+"plugins/browserSync")(config),
            ...require(buildPath+"plugins/hashedModuleIds")(config)
        ],
        resolve: {
            symlinks: false,
            extensions: [".js", ".jsx", ".vue", ".json"],
            alias: {
                vue$: "vue/dist/vue.esm.js",
                "@components": path.join(__dirname, jsPath+"components"),
                "@mixins": path.join(__dirname, jsPath+"mixins"),
                "@store": path.join(__dirname, jsPath+"store"),
                "@views": path.join(__dirname, jsPath+"views")


                '@': path.join(__dirname, jsPath),
                '@api' : path.join(__dirname, jsPath+'/api'),
                '@classes' : path.join(__dirname, jsPath+'/classes'),
                '@components' : path.join(__dirname, jsPath+'/components'),
                '@config' : path.join(__dirname, jsPath+'/config'),
                '@directives' : path.join(__dirname, jsPath+'/directives'),
                '@helpers': path.join(__dirname, jsPath+'/helpers'),
                '@mixins' : path.join(__dirname, jsPath+'/mixins'),
                '@models' : path.join(__dirname, jsPath+'/models'),
                '@router' : path.join(__dirname, jsPath+'/router'),
                '@store': path.join(__dirname, jsPath+'/store'),
                '@views' : path.join(__dirname, jsPath+'/views')
            },
        },
        stats: require(buildPath+"stats")(config),
        devServer: require(buildPath+"devServer")(config)
    };
};
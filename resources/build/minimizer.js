module.exports = function (config) {
    if (config.isProduction) {
        return [
            require("./plugins/uglify")(), // TODO - use config
            require("./plugins/cssOptimization")(), // TODO - use config
        ];
    }
    return [];
};

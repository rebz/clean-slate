// THIS IS FOR THE IDE TO KNOW HOW TO RESOLVE THE PATHS
const path = require('path');

module.exports = {
    resolve : {
        alias : {
            '@views' : path.join(__dirname, 'resources/js/views'),
            '@directives' : path.join(__dirname, 'resources/js/directives'),
            '@components' : path.join(__dirname, 'resources/js/components'),
            '@mixins' : path.join(__dirname, 'resources/js/mixins')
        }
    }
}
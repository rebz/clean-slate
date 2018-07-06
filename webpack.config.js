// THIS IS FOR THE IDE TO KNOW HOW TO RESOLVE THE PATHS
const path = require('path');

module.exports = {
    resolve : {
        alias : {
            '@views' : path.join(__dirname, 'resources/js/views'),
            '@components' : path.join(__dirname, 'resources/js/components'),
            '@helpers' : path.join(__dirname, 'resources/js/mixins/helpers')
        }
    }
}
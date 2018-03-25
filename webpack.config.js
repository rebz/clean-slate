// THIS IS FOR THE IDE TO KNOW HOW TO RESOLVE THE PATHS
const path = require('path');

module.exports = {
    resolve : {
        alias : {
            '@js.views' : path.join(__dirname, 'resources/js/views'),
            '@js.components' : path.join(__dirname, 'resources/js/components'),
            '@js.helpers' : path.join(__dirname, 'resources/js/mixins/helpers')
        }
    }
}
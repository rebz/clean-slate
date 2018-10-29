# README #
Please read the information below for details about this project and expectations 
around how it is being built.

### Laravel Valet
Inside the root directory you will find `LocalValetDriver.php` that will allow Vue Router to work with Laravel Valet by referencing an HTML file and allowing requests.

### Node Version
**8.11.3**<br>
I personally use [Node Version Manager](https://github.com/creationix/nvm) to jump between different versions of node for different projects. You can create a `.nvmrc` file in your project root with the version of node inside of it and then type `nvm use` to switch to that version of node when inside the project root. You can easily install other versions of node with `nvm install {node version}`.

### Tech
1. Vue
1. Vuex
1. Vue Router
1. Axios
1. Lodash 
    1. Working on removing completely but it makes things easier at times.
1. FontAwesome Pro 
    1. JS+SVG, npm + component
    1. I use a .npmrc file in the project root with my font-awesome pro auth key in it
    1. ```
       @fortawesome:registry=https://npm.fontawesome.com
       //npm.fontawesome.com/:_authToken=
       ```     
1. Browser Sync
1. nprogress
    1. progress bar for http requests
1. store
    1. for localstorage
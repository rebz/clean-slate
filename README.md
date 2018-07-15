# README #
Please read the information below for details about this project and expectations 
around how it is being built.

### Requirements
* Node v8.11.3+

### Installation & Getting Started
```js
npm install     // Install Dependencies
npm run dev     // development mode
npm run watch   // BrowserSync w/ Hot Reload in development mode
npm run prod    // production mode
```

### Project Setup
* Webpack 4
* Vue
* Vue Router
* Vuex
* Axios
* Nprogress
* Sass (BEM + ITCSS)

### TODO
* Use a module bundler, instead of Laravel mix
    * Switch to Webpack 4
    * Browsersync w/ hot reload
    * Generate index.html from template
    * Load robots.txt
    * Load favicon
    * Load iOS and Andriod App Screen Icons
* Project Cleanup
    * Render component, don't use <router-view> to load (reduce number of div containers)
    * Cleanup mixins structure
    * Move Navigation/App Components into `./views/layouts`
    * Move PageNotFound into `./views/404`, or some other related folder
        * Keep `./components` for non-`./views` specific components. Use for FontAwesome, Froala, Select2, etc
* Setup FontAwesome Vue Implemtnation
    
### Laravel Valet
Inside the root directory you will find `LocalValetDriver.php` that will allow Vue Router to work correctly with Laravel Valet.  

# README #

Please read the information below for details about this project and expectations 
around how it is being built.

### Laravel Valet
Inside the root directory you will find `LocalValetDriver.php` that will allow Vue Router to work correctly with Laravel Valet.  


### TODO

* Switch to Webpack4
    * Browsersync w/ hot reload
* HTML Index Plugin
* Render component, don't use <router-view> to load (reduce number of div containers)
* Cleanup mixins structure
* Setup FontAwesome Vue Implemtnation
* Move Navigation/App Components into `./views/layouts`
* Move PageNotFound into `./views/404`, or some other related folder
    * Keep `./components` for non-`./views` specific components. Use for FontAwesome, Froala, Select2, etc
* 


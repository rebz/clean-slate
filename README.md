# README #
Please read the information below for details about this project and expectations 
around how it is being built.

# What is this repo? #
`clean-slate` is a personal starter template for new Vue projects.

### Requirements
* Node v8.11.3+

### Setup
1. Duplicate `.env-example` and save as `.env`
1. Fill out the environment variables as needed

### Installation
```js
npm install     // Install Dependencies
```

### Getting Started
```js
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
    - [X] Switch to Webpack 4
    - [X] Browsersync w/ hot reload
    - [X] Generate index.html from template
    - [ ] Generate robots.txt from template
    - [ ] Generate Favicon from template
    - [ ] Generate iOS and Andriod App Screen Icons from template
    * Generated CSS
        * `npm run prod` 
            - [ ] removes all comments, not just single line comments, but also block comments like: `/* css comment */`
            - [ ] Consolidate styles where possible: [example](https://stackoverflow.com/a/46176755/865803)
            - [ ] minify CSS
            - [ ] uglify CSS
* Project Cleanup
    - [ ] Render component, don't use <router-view> to load (reduce number of div containers)
    - [ ] Cleanup mixins structure
    - [ ] Move Navigation/App Components into `./views/layouts`
    - [ ] Move PageNotFound into `./views/404`, or some other related folder
        - [ ] Keep `./components` for non-`./views` specific components. Use for FontAwesome, Froala, Select2, etc
- [ ] Setup FontAwesome Vue Implemtnation

### Files
* `LocalValetDriver.php` - Not required
    * Located inside the root directory, this file will allow Vue Router to work correctly with Laravel Valet.  
* `.nvmrc` - Not required
    * Located inside the root directory, this file defines the Node version we should use. .nvmrc is part of the Node Version Manager package. 

---

### Initial Todo

- [ ] Remove Laravel Mix
- [ ] Webpack Config
    - [ ] Browsersync
    - [ ] Cached assets w/ HMR
    - [ ] Generate HTML page
- [ ] ESLint
- [ ] Prettier
- [ ] Render component, don't use <router-view>
- [ ] Cleanup initial mixins setup

### Laravel Valet for MacOS
Inside the root directory you will find `LocalValetDriver.php` that will allow Vue Router to work with Laravel Valet by referencing an HTML file and allowing requests.

### Node Version
**10.15.0**<br>
Using [Node Version Manager](https://github.com/creationix/nvm) you can jump between different versions of Node for each project. Create a `.nvmrc` file in your project root with the version of node inside of it and then type `nvm use` (inside the root folder) to use that version. Easily install versions of Node with `nvm install {node version}`.

### Primary Packages
1. Vue
1. Vuex
1. Vue Router
1. Axios
1. Browser Sync
1. Laravel Mix
>>>>>>> dev

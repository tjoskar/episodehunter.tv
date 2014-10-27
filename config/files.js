/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function() {
  //Override file patterns here
  return {

    js: {

        app: [
            "app/js/app.js",
            "app/js/**/*.js"
        ],

        vendor: [
            "vendor/js/jquery/dist/jquery.js",
            "vendor/js/angular/angular.js",
            "vendor/js/angular-route/angular-route.js",
            "vendor/js/angular-aria/angular-aria.js",
            "vendor/js/angular-animate/angular-animate.js",
            "vendor/js/hammerjs/hammer.js",
            "vendor/js/angular-material/angular-material.js",
        ]

    },

    css: {
        vendor: [
            "vendor/js/foundation/css/normalize.css",
            "vendor/js/angular-material/angular-material.css",
            "vendor/css/**/*.css"
        ]
    },

    sass: {
        main: "app/css/main.sass"
    }

  };
};

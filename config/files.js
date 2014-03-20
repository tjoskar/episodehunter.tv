/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    js: {

      vendor: [
        "vendor/js/jquery/dist/jquery.js",
        "vendor/js/angular/angular.js",
        "vendor/js/angular-route/angular-route.js",
        "vendor/js/jquery.lazyload.min.js",
	"vendor/js/jquery.knob.js",
	"vendor/js/momentjs/moment.js",
	"vendor/js/moment-timezone/moment-timezone.js",
	"vendor/js/moment-timezone-data.js"
      ],

      ehw: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]

    }

  };
};

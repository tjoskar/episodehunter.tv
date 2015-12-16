'use strict';

module.exports = function(config) {
    config.set({
        browsers: ['Firefox'],
        frameworks: ['browserify', 'jasmine'],
        files: [
            '.tmp/serve/vendor.js',
            'vendor/angular-mocks/angular-mocks.js',
            '.tmp/serve/app/boot.js',
            'spec/**/*.js'
        ],
        logLevel: config.LOG_WARN,
        reporters: ['dots'],
        preprocessors: {
              'spec/**/*.es6.js': [ 'browserify' ]
        },
        browserify: {
            debug: true,
            extensions: ['.js'],
            transform: ['babelify']
        }
    });
};

'use strict';

module.exports = function(config) {
    config.set({
        browsers : ['Chrome'],
        frameworks: ['browserify', 'jasmine'],
        files: [
            '.tmp/serve/vendor.js',
            '.tmp/serve/app/boot.js',
            'spec/**/*.js'
        ],
        logLevel: config.LOG_WARN,
        reporters: ['dots'],
        preprocessors: {
              'spec/**/*.js': [ 'browserify' ]
        },
        browserify: {
            debug: true,
            extensions: ['.js'],
            transform: ['6to5ify']
        },
    });
};

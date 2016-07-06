const path = require('path');

module.exports = function(config) {

    config.set({

        // base path that will be used to resolve all patterns (e.g. files, exclude)
        basePath: '',

        /*
         * Frameworks to use
         *
         * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['mocha'],

        // list of files to exclude
        exclude: [ ],

        /*
         * list of files / patterns to load in the browser
         *
         * we are building the test environment in ./spec-bundle.js
         */
        files: [ { pattern: './test-bundle.js', watched: false } ],

        /*
         * preprocess matching files before serving them to the browser
         * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
         */
        preprocessors: { './test-bundle.js': ['webpack', 'sourcemap'] },

        // Webpack Config at ./webpack.test.js
        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['', '.ts', '.js']
            },
            module: {
                preLoaders: [{
                    test: /\.js$/,
                    loader: 'source-map-loader',
                    exclude: [
                        // these packages have problems with their sourcemaps
                        path.resolve(__dirname, 'node_modules/rxjs'),
                        path.resolve(__dirname, 'node_modules/@angular')
                    ]
                }],
                loaders: [{
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader',
                    query: {
                        doTypeCheck: true
                    }
                },

                // Support for CSS as raw text
                { test: /\.css$/, loader: 'raw-loader' },

                { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },

                // support for .html as raw text
                { test: /\.html$/,  loader: 'raw-loader', exclude: [ './src/index.html' ] }],
                noParse: [/zone\.js\/dist\/.+/]
            },
            debug: true
        },

        // Webpack please don't spam the console when running in karma!
        webpackServer: { noInfo: true },

        /*
         * test results reporter to use
         *
         * possible values: 'dots', 'progress'
         * available reporters: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: [ 'progress' ],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        /*
         * level of logging
         * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        /*
         * start these browsers
         * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: [
            'Electron'
        ],

        singleRun: false
    });

};

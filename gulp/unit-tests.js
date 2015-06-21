'use strict';

var gulp = require('gulp');
var karma = require('karma').server;

function runTests (singleRun, browsers, done) {
  karma.start({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: singleRun,
    browsers: browsers
  }, done);
}

gulp.task('test', ['browserify'], function(done) {
  runTests(true, ['Chrome'], done);
});

gulp.task('test:ci', ['vendor', 'browserify'], function(done) {
  runTests(true, ['Firefox'], done);
});

gulp.task('test:auto', ['browserify'], function(done) {
  runTests(false, ['Chrome'], done);
});

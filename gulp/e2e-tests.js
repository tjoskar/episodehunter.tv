'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var paths = gulp.paths;

// Downloads the selenium webdriver
gulp.task('webdriver-update', $.protractor.webdriver_update);
gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

function runProtractor (done) {

  gulp.src(paths.e2e + '/**/*.spec.js')
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js',
      args: ['--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      console.log('All done');
      done();
    });

}

gulp.task('protractor', runProtractor);

// gulp.task('protractor', ['protractor:src']);
// gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
// gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);

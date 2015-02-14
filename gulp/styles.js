'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-ruby-sass');
var mainBowerFiles = require('main-bower-files');
var filter = require('gulp-filter');

var paths = gulp.paths;

gulp.task('dev-fonts', function () {
  return gulp.src(mainBowerFiles(), {base: paths.vendor + '/materialize/font/'})
    .pipe(filter('**/*.{eot,svg,ttf,woff}'))
    .pipe(gulp.dest(paths.tmp + '/serve/font/'));
});

gulp.task('styles', ['dev-fonts'], function() {
    return sass(paths.src + '/app/index.scss', { sourcemap: true })
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.tmp + '/serve/app/'));
});

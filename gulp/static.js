'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var paths = gulp.paths;

gulp.task('dev-images', function () {
  return gulp.src(paths.src + '/assets/images/**/*')
    .pipe(gulp.dest(paths.tmp + '/serve/assets/images/'));
});

gulp.task('dev-misc', function () {
  gulp.src(paths.src + '/**/*.ico')
    .pipe(gulp.dest(paths.tmp + '/serve/'));
  gulp.src(paths.src + '/manifest.json')
    .pipe(gulp.dest(paths.tmp + '/serve/'));
  return gulp.src(paths.src + '/*.gif')
    .pipe(gulp.dest(paths.tmp + '/serve/'));
});

gulp.task('dev-fonts', function () {
  return gulp.src($.mainBowerFiles(), {base: paths.vendor + '/materialize/font/'})
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe(gulp.dest(paths.tmp + '/serve/font/'));
});

gulp.task('dev-service-worker', function () {
  return gulp.src(paths.src + '/service_worker/*')
    .pipe(gulp.dest(paths.tmp + '/serve/'));
});

gulp.task('dev-vendor-js', function() {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.js'))
    .pipe($.concat('vendor.js'))
    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(gulp.dest(paths.tmp + '/serve/'));
});

gulp.task('dev-vendor-css', function() {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.css'))
    .pipe(gulp.dest(paths.tmp + '/serve/'));
});

gulp.task('static', ['dev-fonts', 'dev-misc', 'dev-images', 'dev-vendor-js', 'dev-service-worker']);

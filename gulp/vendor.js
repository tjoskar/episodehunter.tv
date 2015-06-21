'use strict';

var gulp = require('gulp');
var merge = require('merge-stream');
var bowerFiles = require('main-bower-files');
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var uglifySaveLicense = require('uglify-save-license');

var paths = gulp.paths;

gulp.task('vendor', function() {
    var js = gulp.src(bowerFiles())
        .pipe(filter('**/*.js'))
        .pipe(sourcemaps.init({loadMaps: true, debug: true}))
        .pipe(concat('vendor.js'))
        .pipe(uglify({preserveComments: uglifySaveLicense}))
        .pipe(gulp.dest(paths.tmp + '/serve/'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist));

    var css = gulp.src(bowerFiles())
          .pipe(filter('**/*.css'))
          .pipe(concat('vendor.css'))
          .pipe(gulp.dest(paths.tmp + '/serve/'))
          .pipe(gulp.dest(paths.dist));

    return merge(js, css);
});

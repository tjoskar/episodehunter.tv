'use strict';

var gulp = require('gulp');
// var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var paths = gulp.paths;

gulp.task('styles', function() {
    return gulp.src(paths.src + '/app/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.tmp + '/serve/app/'))
        .pipe(gulp.dest(paths.dist));
});

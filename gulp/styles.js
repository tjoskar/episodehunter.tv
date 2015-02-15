'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-ruby-sass');
var paths = gulp.paths;

gulp.task('styles', function() {
    return sass(paths.src + '/app/index.scss', { sourcemap: true })
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.tmp + '/serve/app/'));
});

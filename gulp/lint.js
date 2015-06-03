'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

var paths = gulp.paths;

gulp.task('lint', function () {
    return gulp.src(paths.src + '/app/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

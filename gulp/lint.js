'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

var paths = gulp.paths;

gulp.task('lint', function () {
    return gulp.src(paths.src + '/app/**/*.js')
        .pipe(eslint())
        .on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(eslint.format());
});

'use strict';

var gulp = require('gulp');
var size = require('gulp-size');

var paths = gulp.paths;

gulp.task('size', function() {
    gulp.src([
        paths.dist + '/*.ico',
        paths.dist + '/one_file_to_rule_them_all-*',
        paths.dist + '/sw.js'
    ])
    .pipe(size({ title: paths.dist + '/', showFiles: true }));
});

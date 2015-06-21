'use strict';

var gulp = require('gulp');
var loadThemAll = require('require-dir');

gulp.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'e2e',
    vendor: 'vendor'
};

loadThemAll('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

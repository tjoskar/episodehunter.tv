'use strict';

const gulp = require('gulp');
const loadThemAll = require('require-dir');

gulp.paths = {
    src: 'src',
    dist: 'dist'
};

loadThemAll('./gulp');

gulp.task('default', [
    'script',
    'sass',
    'copy-template'
], () => {});

gulp.task('watch', [
    'script:watch',
    'sass:watch',
    'copy-template:watch'
], () => {});

'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var paths = gulp.paths;

function serverInit(baseDir) {
  connect.server({
    root: baseDir,
    port: 9000,
    livereload: false
  });
}

gulp.task('serve', ['watch'], function () {
  serverInit(paths.tmp + '/serve');
});

gulp.task('serve:dist', ['build'], function () {
  serverInit(paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  serverInit(paths.tmp + '/serve');
});

gulp.task('serve:e2e-dist', ['build'], function () {
  serverInit(paths.dist);
});

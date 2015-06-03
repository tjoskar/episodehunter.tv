'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var paths = gulp.paths;

gulp.task('browserify', ['lint'], function () {
  return gulp.src(paths.src + '/app/boot.js', { read: false })
    .pipe($.browserify({
        debug: true,
        transform: ['babelify']
    }))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest(paths.tmp + '/serve/app'))
    .pipe($.size());
});

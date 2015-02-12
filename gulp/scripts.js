'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();
// var concat = require('gulp-concat');
var sourcemap = require('gulp-sourcemaps');

gulp.task('scripts', function () {
    // return gulp.src(paths.src + '/app/**/*.js')
    //     .pipe($['6to5']())
    //     .pipe(concat('all.js'))
    //     .pipe(gulp.dest(paths.tmp + '/6to5'));

  return gulp.src(paths.src + '/app/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(sourcemap.init())
    .pipe($['6to5']())
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(paths.tmp + '/6to5'))
    .pipe($.size());
});

gulp.task('browserify', function () {
  return gulp.src(paths.src + '/app/boot.js', { read: false })
    .pipe(sourcemap.init({loadMaps: true}))
    .pipe($.browserify({
        debug: true,
        transform: ['6to5ify']
    }))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest(paths.tmp + '/serve/app'))
    .pipe($.size());
});

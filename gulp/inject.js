'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('inject', ['styles', 'browserify', 'template_cache'], function () {

  var injectStyles = gulp.src(paths.tmp + '/serve/app/index.css', { read: false });
  var injectScripts = gulp.src(paths.tmp + '/serve/app/boot.js', { read: false });
  var partialsInjectFile = gulp.src(paths.tmp + '/serve/template_cache.js', { read: false });
  var injectVendor = gulp.src(paths.tmp + '/serve/vendor.js', { read: false });

  var injectOptions = {
    ignorePath: [paths.src, paths.tmp + '/serve'],
    addRootSlash: false
  };

  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: paths.tmp + '/serve',
    addRootSlash: true
  };

  var injectVendorOptions = {
    starttag: '<!-- inject:vendor -->',
    ignorePath: paths.tmp + '/serve',
    addRootSlash: true
  };

  return gulp.src(paths.src + '/index.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe($.inject(injectVendor, injectVendorOptions))
    .pipe(gulp.dest(paths.tmp + '/serve'));

});

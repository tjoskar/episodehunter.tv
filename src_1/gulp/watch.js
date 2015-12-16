'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject:dev'], function () {
    gulp.watch(paths.src + '/app/**/*.html', ['template_cache']);
    gulp.watch(paths.src + '/app/**/*.scss', ['styles']);
    gulp.watch(paths.src + '/app/**/*.js', ['browserify']);

    // TODO: Watch bower.json
});

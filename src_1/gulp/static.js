'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var paths = gulp.paths;

gulp.task('images', function () {
    return gulp.src(paths.src + '/assets/images/**/*')
        .pipe(gulp.dest(paths.tmp + '/serve/assets/images/'))
        .pipe(gulp.dest(paths.dist + '/assets/images/'));
});

gulp.task('misc', function () {
    var files = ['/**/*.ico', '/manifest.json', '/*.gif', '/service_worker/*'];

    return gulp.src(files.map(function(file) {
        return paths.src + file;
    }))
    .pipe(gulp.dest(paths.tmp + '/serve/'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('fonts', function () {
    return gulp.src($.mainBowerFiles(), {base: paths.vendor + '/materialize/font/'})
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe(gulp.dest(paths.tmp + '/serve/font/'))
        .pipe(gulp.dest(paths.dist + '/font/'));
});


gulp.task('static', ['images', 'misc', 'fonts']);

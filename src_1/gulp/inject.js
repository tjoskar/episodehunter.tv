'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var rev = require('gulp-rev');

var paths = gulp.paths;

gulp.task('inject:dev', ['static', 'vendor', 'styles', 'browserify', 'template_cache'], function () {

    var injectFile = gulp.src([
        paths.tmp + '/serve/app/index.css',
        paths.tmp + '/serve/vendor.js',
        paths.tmp + '/serve/app/boot.js',
        paths.tmp + '/serve/template_cache.js'
    ], { read: false });

    var injectOptions = {
        ignorePath: [paths.src, paths.tmp + '/serve'],
        addRootSlash: false
    };

    return gulp.src(paths.src + '/index.html')
        .pipe(inject(injectFile, injectOptions))
        .pipe(gulp.dest(paths.tmp + '/serve'));

});

gulp.task('inject', ['concat'], function () {

    var injectFile = gulp.src([
        paths.dist + '/one_file_to_rule_them_all.js',
        paths.dist + '/one_file_to_rule_them_all.css'
    ])
    .pipe(rev())
    .pipe(gulp.dest(paths.dist));

    var injectOptions = {
        ignorePath: [paths.src, paths.tmp + '/serve', paths.dist],
        addRootSlash: false
    };

    return gulp.src(paths.src + '/index.html')
        .pipe(inject(injectFile, injectOptions))
        .pipe(gulp.dest(paths.dist));

});

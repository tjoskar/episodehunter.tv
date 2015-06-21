'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var paths = gulp.paths;

gulp.task('browserify', ['lint'], function () {
    return browserify(paths.src + '/app/boot.js', { debug: true })
        .transform(babelify.configure({
            optional: [
                'es7.classProperties',
                'es7.functionBind'
            ]
        }))
        .bundle()
        .pipe(source('boot.js'))
        .on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(paths.tmp + '/serve/app'));
});

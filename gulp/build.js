'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var uglifySaveLicense = require('uglify-save-license');
var merge = require('merge-stream');
var csso = require('gulp-csso');

var paths = gulp.paths;

gulp.task('concat', ['static', 'vendor', 'styles', 'browserify', 'template_cache'], function() {
    var js = gulp.src([
        paths.dist + '/vendor.js',
        paths.dist + '/boot.js',
        paths.dist + '/template_cache.js'
    ])
    .pipe(sourcemaps.init({loadMaps: true, debug: true}))
    .pipe(concat('one_file_to_rule_them_all.js'))
    .pipe(uglify({preserveComments: uglifySaveLicense}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist));

    var css = gulp.src([
        paths.dist + '/index.css',
        paths.dist + '/vendor.css'
    ])
    .pipe(sourcemaps.init({loadMaps: true, debug: true}))
    .pipe(concat('one_file_to_rule_them_all.css'))
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist));

    return merge(js, css);
});

gulp.task('build', ['inject']);

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const paths = gulp.paths;

gulp.task('sass', () => {
    return gulp.src(paths.src + '/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('sass:watch', ['sass'], () => {
    gulp.watch(paths.src + '/**/*.scss', ['sass']);
});

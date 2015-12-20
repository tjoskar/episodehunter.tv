'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');

const paths = gulp.paths;
const tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('script', () =>  {
    return gulp.src([
        paths.src + '/**/*.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('script:watch', ['script'], () => {
    gulp.watch(paths.src + '/**/*.ts', ['script']);
});

'use strict';

const gulp = require('gulp');
const paths = gulp.paths;

gulp.task('copy-template', () => {
    return gulp.src(paths.src + '/**/*.html')
        .pipe(gulp.dest(paths.dist));
});

gulp.task('copy-template:watch', ['copy-template'], () => {
    gulp.watch(paths.src + '/**/*.html', ['copy-template']);
});

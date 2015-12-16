var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var to5 = require('gulp-6to5');
var concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src('app/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(to5())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*']
});
var paths = gulp.paths;

gulp.task('template_cache', function () {
  return gulp.src(paths.src + '/app/**/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('template_cache.js', {
      module: 'EH',
      root: 'app'
    }))
    .pipe(gulp.dest(paths.tmp + '/serve/'));
});

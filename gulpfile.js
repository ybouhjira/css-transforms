var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');

gulp.task('default', function() {
  return gulp.src('*.css')
    .pipe(prefix())
    .pipe(gulp.dest('./dist'))
});

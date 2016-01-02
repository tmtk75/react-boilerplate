var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('default', ['mocha', 'watch-mocha']);

gulp.task('mocha', function() {
  gulp.src(['test/*.js'], {read: false})
    .pipe(mocha({reporter: 'list', require: ["babel-core/register"]}))
    .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
  gulp.watch(['test/**/*.js'], ['mocha']);
});

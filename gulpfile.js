var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var env = require('gulp-env');

gulp.task('default', ['set-env', 'mocha', 'watch-mocha']);

gulp.task('mocha', function() {
  return gulp.src(['test/*.js'], {read: false})
    .pipe(mocha({reporter: 'list', require: ["babel-core/register"]}))
    .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
  return gulp.watch(['test/**/*.js'], ['mocha']);
});

gulp.task('lint', function() {
  var eslint   = require('gulp-eslint');
  return gulp.src(["src/**/*.js"])
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('set-env', function () {
  return env({vars: {BABEL_ENV: "test"}})
});

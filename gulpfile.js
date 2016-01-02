var gulp = require('gulp');

gulp.task('default', ['mocha:env', 'mocha', 'mocha:watch']);

gulp.task('mocha', function() {
  var mocha = require('gulp-mocha');
  var gutil = require('gulp-util');
  return gulp.src(['test/*.js'], {read: false})
    .pipe(mocha({reporter: 'list', require: ["babel-core/register"]}))
    .on('error', gutil.log);
});

gulp.task('mocha:watch', function() {
  return gulp.watch(['src/**/*.js', 'test/**/*.js'], ['mocha']);
});

gulp.task('mocha:env', function () {
  var env = require('gulp-env');
  return env({vars: {BABEL_ENV: "test"}})
});

gulp.task('lint', function() {
  var eslint = require('gulp-eslint');
  return gulp.src(["src/**/*.js", "test/**/*.js"])
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:watch', function() {
  return gulp.watch(['src/**/*.js', "test/**/*.js"], ['lint']);
});

// NOTE: flow task doesn't work yet.
//gulp.task('flow', function() {
//  var react = require('gulp-react');
//  var flow = require('gulp-flowtype');
//  return gulp.src(['./src/**/*.js'])
//    .pipe(flow({
//        all: false,
//        weak: false,
//        declarations: './declarations',
//        killFlow: false,
//        beep: true,
//        abort: false
//    }))
//    .pipe(react({stripTypes: true}))
//    .pipe(gulp.dest('./dist'));
//});
//
//gulp.task('flow:watch', function() {
//  return gulp.watch(['src/**/*.js'], ['flow']);
//});
//
//gulp.task('flow:env', function () {
//  var env = require('gulp-env');
//  return env({vars: {FLOW_BIN: "node_modules/.bin/flow"}})
//});


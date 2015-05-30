//Here's where the magic happens
var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('injectIntoIndex', function() {
  return gulp.src('test/index.html')

      .pipe(inject(
        gulp.src(bowerFiles({includeDev: true}), {read: false}),
        {name: 'bower', relative: true}
      ))
      .pipe(inject(
        gulp.src(['src/js/**/*.js'], {read: false}),
        {name: 'all', relative: true}
      ))

      .pipe(inject(
        gulp.src(['test/suites/**/*.js'], {read: false}),
        {name: 'suites', relative: true}
      ))
      .pipe(gulp.dest('test'));

});

gulp.task('test', ['injectIntoIndex'], function () {
  return gulp.src('test/index.html', {read: false})
    .pipe(mochaPhantomJS());
});


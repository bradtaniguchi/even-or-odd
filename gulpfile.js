const gulp = require('gulp');
const paths = {
  src: './src',
  lib: './node_modules',
  dest: 'build'
};
gulp.task('build', () => {
  gulp.src([
    paths.lib + '/angular/angular.js'
  ]).pipe(gulp.dest(paths.dest + '/vendor'));

  gulp.src([
    paths.src + '/**/*.js'
  ]).pipe(gulp.dest(paths.dest));

  gulp.src([
    paths.src + '/index.html'
  ]).pipe(gulp.dest(paths.dest));
});

gulp.task('start', () => {
  gulp.watch([
    paths.src + '/**/*.js',
    paths.src + '/index.html'
  ], ['build']);
});
gulp.task('default', ['build', 'start']);


const gulp = require('gulp');
const server = require('live-server');
const paths = {
  src: './src',
  lib: './node_modules',
  dest: 'build'
};
const serverParams = {
  port: 8080,
  host: '0.0.0.0'
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

  console.log('Starting live-server');
  server.start(serverParams);
});
gulp.task('default', ['build', 'start']);


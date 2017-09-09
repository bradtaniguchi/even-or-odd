const gulp = require('gulp');
const rename = require('gulp-rename');
const server = require('live-server');
const paths = {
  src: './src',
  lib: './node_modules',
  dest: './build',
  env: './env'
};
const serverParams = {
  port: 8080,
  host: '0.0.0.0',
  root: './build',
//  proxy: [[
//    'http://localhost',
//    'http://localhost:8081' // redirect to back-end app in deve environment, may need to change to http.
//  ]],
//  middleware: [(req, res, next) => {
//    console.log(req);
//    next();
//  }]
};
gulp.task('build', () => {
  console.log('buildering for: ' + process.env.env);
  const env = process.env.env === 'prod' ? '/prod.js' : '/dev.js';
  gulp.src([
      paths.env + env
  ]).pipe(rename('env.js'))
  .pipe(gulp.dest(paths.dest + '/js'));

  gulp.src([
    paths.lib + '/angular/angular.js',
    paths.lib + '/socket.io-client/dist/socket.io.js',
    paths.lib + '/socket.io-client/dist/socket.io.js.map'
  ]).pipe(gulp.dest(paths.dest + '/vendor'));

  gulp.src([
    paths.src + '/**/*.js'
  ]).pipe(gulp.dest(paths.dest));

  gulp.src([
    paths.src + '/index.html'
  ]).pipe(gulp.dest(paths.dest));
});

gulp.task('start', ['build'], () => {
  gulp.watch([
    paths.src + '/**/*.js',
    paths.src + '/index.html'
  ], ['build']);

  console.log('Starting live-server');
  server.start(serverParams);
});
gulp.task('default', ['build', 'start']);


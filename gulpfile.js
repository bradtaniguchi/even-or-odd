const gulp = require('gulp');
const paths = {
  src: './src',
  lib: './node_modules',
  dest: 'public'
};
gulp.task('build', () => {
  gulp.src([
    paths.src + '/**/*.js',
    paths.lib + '/angular/angular.js'  
  ]).pipe(gulp.dest(paths.dest + '/js')); 
});
gulp.task('default', ['build']);


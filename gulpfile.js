/**
 * Created by buggy on 6/26/15.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function () {
   nodemon({
       script: 'app.js',
       ext: 'js',
       env: {
           PORT: 8000
       },
       ignore: ['./mode_modules/**']
   })
       .on('restart', function () {
           console.log('Restarting.....');
       });
});
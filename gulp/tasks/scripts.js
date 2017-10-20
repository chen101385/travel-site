var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats) {
      if (err) {
          console.log(err.toString());
      }
        
        console.log(stats.toString());
        callback();
    });
});

/* 
../ - up one level
** - any subdirectory
* any filename with specified file extension (i.e. *.exe)

within webpack, anonymous functions are given access to two parameters
[EXAMPLE]
-err
-stats
*/
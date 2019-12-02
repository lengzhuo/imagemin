var gulp = require('gulp');
var smushit = require('gulp-smushit');

gulp.task('smushit', function(){
    return gulp.src('src/*/*')
               .pipe(smushit({
                   verbose: true
               }))
               .pipe(gulp.dest('res'));
});

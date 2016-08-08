var gulp = require('gulp');
var uncss = require('gulp-uncss');
var nano = require('gulp-cssnano');
var gulpIf = require('gulp-if');

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('default', function () {
    return gulp.src('styles/*.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulpIf(!isDebug, nano({zindex: false})))
        .pipe(gulp.dest('./styles'));
});

var gulp = require('gulp');
var uncss = require('gulp-uncss');
var nano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var prettify = require('gulp-jsbeautifier');

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('default', function () {
    return gulp.src('styles/*.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(prettify({
            indent_with_tabs: true,
            selector_separator_newline: true,
            newline_between_rules: true
        }))
        .pipe(autoprefixer())
        .pipe(gulpIf(!isDebug, nano({zindex: false})))
        .pipe(gulp.dest('./styles'));
});

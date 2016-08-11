var runSequence = require('run-sequence');
var gulp = require('gulp');

gulp.task('default', () => (
    runSequence(
        'styles',
        'templates'
    )
));

var gulp = require('gulp');

var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

gulp.task('uglify', function () {
    gulp.src(['src/jouele.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});
gulp.task('concat', function () {
    gulp.src(['src/jouele.css', 'src/jouele.skin.css'])
        .pipe(concatCss('dist/jouele.css', {rebaseUrls: false}))
        .pipe(gulp.dest('./'))
        .pipe(cleanCSS({compatibility: 'ie6'}))
        .pipe(gulp.dest('./'))
});
gulp.task('copy', function () {
    gulp.src(['src/jouele.skin.css'])
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['uglify', 'concat', 'copy']);

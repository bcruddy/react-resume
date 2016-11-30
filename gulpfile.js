const gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps')
    _ = require('lodash');

gulp.task('build', () =>
    gulp.src(['src/app.js', 'src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel()) // settings in .babelrc
        .pipe(gulp.dest('dist'))
    );

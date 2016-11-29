const gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps')
    _ = require('lodash');

gulp.task('transform', () =>
    gulp.src(['src/app.js', 'src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['react', 'es2015']
        }))
        .pipe(gulp.dest('dist'))
    );

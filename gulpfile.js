var gulp = require('gulp');

var appDev = 'app_client/app/';
var appProd = 'app_client/public/js/app/';

var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-ts', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        // .pipe(jsuglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(appProd));
});
gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['build-ts']);
});

gulp.task('default', ['watch', 'build-ts']);
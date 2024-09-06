const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' //diminui os espacos no arquivo de saida
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/scripts/*.js',{ ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/styles/*.scss',{ ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/images/*',{ ignoreInitial: false}, gulp.series(comprimeImagens));
}
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var styledocco = require('gulp-styledocco');

var config = require('../config');

// styledoccoコンパイル
gulp.task('guide', function () {
  // スタイルガイド用
  gulp.src('./src/styleguide/styleguide.scss')
          .pipe(plumber())
          .pipe(sass())
          .pipe(autoprefixer())
          //コンパイル後のCSSファイル出力先
          .pipe(gulp.dest('./styleguide'))
          .pipe(styledocco({
            out: './styleguide',
            name: 'My Project',
            'no-minify': true
          }))
          .pipe(browserSync.reload({stream: true}))
});
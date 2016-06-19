var config = require('../config');

var gulp = require('gulp');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

var frontnote = require('frontnote');
var note = new frontnote({//FrontNoteの設定
  out: './guide/',
  title: config.siteName,
  css: config.guideCss
});

// browserSync
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: './',
      directory: true,
      index: 'index.html'
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

// sass
gulp.task('sass', function () {
  console.log('--------- sass task ----------');
  gulp.src(config.sass + '**/*.scss')
          .pipe(plumber({
            errorHandler: function (err) {
              console.log(err.messageFormatted);
              this.emit('end');
            }
          }))
          .pipe(sass())
          .pipe(pleeease({
            sass: true,
            autoprefixer: true,
            minifier: true,
            mqpacker: true
          }))
          .pipe(gulp.dest(config.css));
  console.log('--------- frontnote task ----------');
  return note.render('src/**/*.scss', function () { //<- output files.
    // callback
  });
});


gulp.task('frontnote', function () {
  console.log('--------- frontnote task ----------');
  note.render('src/**/*.scss', function () { //<- output files.
    // callback
  });
});

var guideTask = function (callback) {
  gulp.watch([config.sass + '**/*.scss'], ['sass'], ['bs-reload']);
  gulp.watch([config.sass + '**/*.css'], ['bs-reload']);
  callback();
};

gulp.task('guide', ['browser-sync'], guideTask);

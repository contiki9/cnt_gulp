var gulp = require('gulp');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var jade = require('gulp-jade');

var config = require('../config');

// browserSync
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: config.src,
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
  return gulp.src(config.sass + '**/*.scss')
          .pipe(plumber())
          .pipe(sass())
          .pipe(pleeease({
            sass: true,
            autoprefixer: false,
            minifier: true,
            mqpacker: true
          }))
          .pipe(gulp.dest(config.css));
});

//jade
gulp.task("jade", function () {
  gulp.src(["./jade/**/*.jade"])
          .pipe(plumber())
          .pipe(jade({
            compile: {
              options: {
                pretty: true,
                data: {
                  // コンパイル時に渡しておきたいオブジェクト
                },
                basedir: '<%= path.src %>/jade'
              },
              files: [{
                  expand: true,
                  cwd: '<%= path.src %>/jade',
                  src: '**/!(_)*.jade',
                  dest: '<%= path.dist %>',
                  ext: '.html'
                }]
            }
          }))
          .pipe(gulp.dest("./src/"));
});

var defaultTask = function (callback) {
  gulp.watch([config.sass + '**/*.scss'], ['sass'], ['bs-reload']);
  gulp.watch([config.src + '**/*.html'], ['bs-reload']);
  gulp.watch([config.css + '**/*.css'], ['bs-reload']);
  gulp.watch([config.js + '**/*.js'], ['bs-reload']);
  gulp.watch([config.img + '**/*.img'], ['bs-reload']);
  gulp.watch([config.jade + '**/*.jade'], ['jade'], ['bs-reload']);
  callback();
};

gulp.task('default', ['browser-sync'], defaultTask);

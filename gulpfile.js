var del = require('del');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-csso');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sync = require('browser-sync').create();

var isProd = process.env.NODE_ENV === 'production';

/**
 * PUG
 */

function templates() {
  return gulp
    .src('src/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(sync.stream());
}

/**
 * SCSS
 */

function scss() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpif(isProd, minifyCSS()))
    .pipe(gulpif(!isProd, sourcemaps.write('.')))
    .pipe(gulp.dest('dist/css'))
    .pipe(sync.stream());
}

/**
 * JS
 */

function js() {
  return gulp
    .src('src/js/*.js')
    .pipe(gulpif(!isProd, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(!isProd, sourcemaps.write('.')))
    .pipe(gulp.dest('dist/js'))
    .pipe(sync.stream());
}

function json() {
    return gulp
        .src('src/api.json')
        .pipe(gulp.dest('dist'));
}
/**
 * ASSETS
 */

function images() {
  return gulp
    .src('src/assets/**/*')
    .pipe(gulp.dest('dist/assets'));
}

/**
 * FONTS
 */

function fonts() {
  return gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts'));
}

/**
 * GLOBAL
 */

function clean() {
  return del(['dist']);
}

gulp.task(
  'build',
  gulp.series(clean, gulp.parallel(templates, scss, js, images, fonts, json))
);

gulp.task(
  'default',
  gulp.parallel(templates, gulp.series(scss, js, json), images, fonts, function(
    done
  ) {
    sync.init({
      server: {
        baseDir: './dist',
      },
    });

    gulp.watch('src/index.html', templates);
    gulp.watch('src/**/*.scss', gulp.series(scss, js));
    gulp.watch('src/**/*.js', js);

    done();
  })
);

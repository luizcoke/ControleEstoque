/**
 * Gulp build file
 */
var gulp = require('gulp');

/**
 * Load plugins
 */
var config = require('./gulpconfig.json');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var connect = require('gulp-connect');

var assets = {
  scripts: [
    'assets/jquery/dist/jquery.min.js',
    'assets/angular/angular.min.js',
    'assets/angular-route/angular-route.min.js',
    'assets/angular-resource/angular-resource.min.js',
    'assets/semantic/dist/semantic.min.js',
    'assets/lodash/dist/lodash.core.min.js',
    'assets/bootstrap/dist/js/bootstrap.min.js'
  ],
  styles: [
    'assets/semantic/dist/semantic.min.css',
    'assets/bootstrap/dist/css/bootstrap.min.css'
  ],
  fonts: [
    'assets/fontawesome/web-fonts-with-css/webfonts/*'
  ],
  scss: [
    'assets/fontawesome/web-fonts-with-css/scss/**/*.scss'
  ],
  copy: []
};

var app = {
  scripts: [
    'src/*.js',
    'src/@core/*.js',
    'src/@shared/*.js',
    'src/@shared/**/*.js',
    'src/produtos/*.js',
    'src/produtos/**/*.js'
  ],
  styles: [
    'src/styles/*.scss',
    'src/styles/**/*.scss',
  ],
  images: [
    'src/images/*'
  ],
  views: [
    'src/@shared/*.html',
    'src/@shared/**/*.html',
    'src/produtos/*.html',
    'src/produtos/**/*.html'
  ],
  index: 'src/index.html'
};

/*
 Build assets
*/
gulp.task('assets-scripts', () => {
  return gulp.src(assets.scripts)
    .pipe(concat('assets.min.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('assets-styles', () => {
  return gulp.src(assets.styles)
    .pipe(concat('assets.min.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('assets-copy', () => {
  return gulp.src(assets.copy)
    .pipe(gulp.dest('dist'))
});

gulp.task('assets-fonts', () => {
  return gulp.src(assets.fonts)
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('assets-scss', () => {
  return gulp.src(assets.scss)
    .pipe(gulp.dest('dist/scss'))
});

/*
 Build app
 */
gulp.task('app-scripts-prod', () => {
  return gulp.src(app.scripts)
    .pipe(sourcemaps.init())
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('app-scripts-dev', () => {
  return gulp.src(app.scripts)
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('app-styles-prod', () => {
  return gulp.src(app.styles)
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('app-styles-dev', () => {
  return gulp.src(app.styles)
    .pipe(concat('app.min.css'))
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('app-views', () => {

  gulp.src(app.views)
    .pipe(templateCache())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());

  gulp.src(app.index)
    .pipe(gulp.dest('dist'))

});

/*
 Lint JS files
*/
gulp.task('jshint', () => {
  gulp.src(app.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

/*
 Watch for changes
 */
gulp.task('watch-dev', () => {
  gulp.watch([app.scripts], ['app-scripts-dev', 'jshint']);
  gulp.watch([app.styles], ['app-styles-dev']);
  gulp.watch([app.views, app.index], ['app-views']);
});

/*
 Run a development http server
*/
gulp.task('serve', () => {
  connect.server({
    root: 'dist',
    livereload: config.enableLivereload
  });
});

gulp.task('assets', ['assets-scripts', 'assets-styles', 'assets-copy', 'assets-fonts', 'assets-scss']);
gulp.task('app-prod', ['app-scripts-prod', 'app-styles-prod', 'app-views']);
gulp.task('app-dev', ['app-scripts-dev', 'app-styles-dev', 'app-views']);

/** 
 * Build production app
 */
gulp.task('prod', ['assets', 'app-prod', 'jshint']);

var devTasks = ['assets', 'app-dev', 'jshint', 'watch-dev'];

if (config.enableServe) {
  devTasks.push('serve');
}

/** 
 * Run development tasks
 */
gulp.task('dev', devTasks);

/*
 Default task
*/
gulp.task('default', ['dev']);


/*
 Aliases
*/
gulp.task('production', ['prod']);
gulp.task('development', ['dev']);

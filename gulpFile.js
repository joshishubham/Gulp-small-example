var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify')
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
//Simple
gulp.task('Simple', function () {
	return console.log("Welcome gulp")
});

//Sass gulp
gulp.task('sass', function () {
	return gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream());
});

//concat gulp
gulp.task('concat', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/Javascript'))
    .pipe(browserSync.stream());
});

//htmlmin gulp
gulp.task('html', function() {
  return gulp.src('./src/html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(browserSync.stream())
    .pipe(gulp.dest('dist/html'))
    .pipe(browserSync.stream());
});

//browser
gulp.task('server', function () {

   browserSync.init({
        proxy: "http://localhost:7890"
    });
        gulp.watch('./src/sass/*.scss', ['sass']);
        gulp.watch('./src/html/*.html', ['html']);
        gulp.watch('./src/js/*.js', ['concat']);
});

//Default
gulp.task('default', ['server']);
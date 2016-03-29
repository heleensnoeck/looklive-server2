//Bronnen: https://css-tricks.com/gulp-for-beginners/
//	http://sixrevisions.com/tutorials/gulp/

var gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	browserSync = require('browser-sync');


// minify css
gulp.task('minifyCss', function(){
    return gulp.src('public/styles/style.css')
    .pipe(cssnano())
    .pipe(gulp.dest('public/dist'))
});

gulp.task('css-watch', ['minifyCss'], browserSync.reload); 

// minify js
gulp.task('minifyJs', function() {
    return gulp.src('public/js/app.js')
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'))
});

// minify images
gulp.task('images', function(){
  return gulp.src('public/images/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('public/dist/images'))
});

// copies fonts in disk directory
gulp.task('fonts', function() {
  return gulp.src('public/fonts/**/*')
  .pipe(gulp.dest('public/dist/fonts'))
});


// Watch Files For Changes
gulp.task('watch', function() {
	browserSync({
		server:{
			// proxy: "local.dev"
			proxy: 'http://localhost:3000'
			// baseDir:'public'
		}
	});
	gulp.watch('/public/styles/*.css', ['css-watch']);
	gulp.watch('/public/js/*.js', ['minifyJs']);
});

// als je gulp intoetst in de terminal gaat hij de default af op de volgorde die in de array staat
gulp.task('default', ['minifyCss', 'minifyJs', 'watch']);
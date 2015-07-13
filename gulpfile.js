// --------------------------------------------------------------------
// Plugins
// --------------------------------------------------------------------

var gulp        = require('gulp');
var compass     = require('gulp-compass');
var livereload  = require('gulp-livereload');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');
var path        = require('path');

//the title and icon that will be used for the Grunt notifications
var notifyInfo = {
	title: 'Gulp',
	icon: path.join(__dirname, 'gulp.png')
};

//error notification settings for plumber
var plumberErrorHandler = {
  errorHandler: notify.onError({
  		title: notifyInfo.title,
  		icon: notifyInfo.icon,
  		message: 'Error: <%= error.message %>'
  	})
  };

gulp.task('compass', function() {
  gulp.src('client/src/css/scss/*.scss')
    .pipe(plumber(plumberErrorHandler))
    .pipe(compass({
      css: 'client/src/css',
      sass: 'client/src/css/scss',
      image: 'client/src/images',
      sourcemap: true
    }))
    .pipe(gulp.dest('client/src/css'));
});

//watch
gulp.task('live', function() {
	livereload.listen();

	//watch .scss files
	gulp.watch('client/src/css/scss/*.scss', ['compass']);

});

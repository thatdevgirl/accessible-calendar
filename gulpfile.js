const gulp = require('gulp'),
      sass = require('gulp-sass'),
      clean = require('gulp-clean-css'),
      rename = require('gulp-rename');

// CSS build task.
gulp.task('css', function() {
	return gulp.src('assets/source/scss/styles.scss')
		.pipe(sass().on('error', sass.logError))
    .pipe(clean())
    .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/build/css'));
});

// Watcher task.
gulp.task('watch', function() {
	gulp.watch('assets/source/scss/**/*.scss', ['css']);
});

// Default task.
gulp.task('default', ['watch', 'css']);

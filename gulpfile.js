const gulp   = require('gulp'),
      sass   = require('gulp-dart-sass'),
      rename = require('gulp-rename');

// CSS build task.
function cssTask( done ) {
	return gulp.src('assets/source/scss/styles.scss')
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/build/css'));
};

// Default task.
gulp.task( 'css', cssTask );
gulp.task( 'default', cssTask );

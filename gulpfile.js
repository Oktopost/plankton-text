'use strict';


const gulp = require('gulp');
const minify = require('gulp-minify');


gulp.task('build', function () {
	return gulp.src('plankton-text.js')		
		.pipe(gulp.dest('./'))
		.pipe(minify())
		.pipe(gulp.dest('./'));
});
// =========================================================
// Project: AlanMcGinnis-Website
// NOTE: Using Gulp 4
// =========================================================
var gulp 		= require('gulp'),
	config		= require('./gulp/config'),
	plugins		= require('gulp-load-plugins')();

// --------------------function to get tasks from gulp/tasks
function getTask(task) {
	return require('./gulp/tasks/' + task)(gulp, plugins);
}

// ---------------------------------------------- Gulp Tasks
gulp.task('serve', getTask('serve'));
gulp.task('handlebars', getTask('handlebars'));
gulp.task('javascript', getTask('javascript'));
gulp.task('json', getTask('json'));
gulp.task('sprite', getTask('sprite'));
gulp.task('styles', getTask('styles'));

gulp.task('build', gulp.parallel('styles', gulp.series('handlebars', 'javascript'), 'json', 'sprite'));

// --------------------------------------- Default Gulp Task
gulp.task('default',gulp.series('build','serve'));
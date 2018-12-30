"use strict";

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

// Path Constants

const Paths = {
	SCSS_SRC: 'source/css/master.scss',
	JS_SRC: 'source/js/master.js',
	HBS_SRC: 'source/templates/*.hbs',
	SVG_SRC: 'source/media/*.svg',
	CSS_DEST: 'css',
	JS_DEST: 'js',
	SVG_DEST: 'media'
};

// Destination File names
const outFileNames = {
	CSS: 'master.min.css',
	JS: 'master.min.js'
};

// Watch paths
const watchPaths = {
	SCSS: 'source/css/**/*.scss',
	JS: 'source/js/**/*.js',
	SVG: 'source/media/**/*.svg',
};

// CSS/SCSS Scripts

gulp.task('build-scss', function () {
	return gulp.src(Paths.SCSS_SRC)
		.pipe(plugins.plumber({
			errorHandler: function (err) {
				plugins.notify.onError({
					title: 'SCSS Build Error',
					message: err.message
				})(err);
			}
		}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass())
		.on('error', plugins.sass.logError)
		.pipe(plugins.autoprefixer({
			browsers: ['last 2 versions', 'ie >= 11']
		}))
		.pipe(plugins.cleanCss({
			keepSpecialComments: 0
		}))
		.pipe(plugins.rename(outFileNames.CSS))
		.pipe(plugins.sourcemaps.write('.'))
		.pipe(gulp.dest(Paths.CSS_DEST))
		.on('error', plugins.notify.onError({
			message: '<%= error.message %>',
			title: 'SCSS Error'
		}));
});

// Handlebars templates

function hbsTemplates(){
	return gulp
	.src(Paths.HBS_SRC)
	.pipe(plugins.handlebars())
	.pipe(plugins.wrap('Handlebars.template(<%= contents %>)'))
	.pipe(plugins.concat('templates.js'))
	.pipe(gulp.dest(Paths.JS_DEST));
}
// JS Scripts

gulp.task('build-js', function () {
	return gulp.src([srcFiles.jquery, srcFiles.handlebars, srcFiles.js])
		.pipe(plugins.plumber({
			errorHandler: function (err) {
				plugins.notify.onError({
					title: 'JS Build Error',
					message: err.message
				})(err);
			}
		}))
		.pipe(plugins.notify({
			message: 'Starting JS build',
			title: 'JS Build'
		}))
		.pipe(plugins.uglify())
		.pipe(plugins.concat(outFileNames.JS))
		.pipe(gulp.dest(Paths.JS_DEST));
});

// Sprite Generation

var spritesConfig = {
	preview: false,
	svg: {
		sprite: "media/sprite.svg"
	},
	cssFile: "../source/css/sass-includes/_sprite.scss",
};

gulp.task('build-sprites', function () {
	return gulp.src(srcFiles.svgs)
		.pipe(plugins.svgSprites(spritesConfig))
		.pipe(gulp.dest('./'));
});

// Tasks

gulp.task("hbsTemplates", hbsTemplates);

gulp.task('build', gulp.parallel('build-scss', 'build-js', 'build-sprites'));

gulp.task('watch-sprites', function () {
	gulp.watch(watchPaths.SVG, gulp.parallel('build-sprites'));
});

gulp.task('watch-source-scss', function () {
	gulp.watch(watchPaths.SCSS, gulp.parallel('build-scss'));
});

gulp.task('watch-source-js', function () {
	gulp.watch(watchPaths.JS, gulp.parallel('build-js'));
});

gulp.task('watch', gulp.series(
	gulp.parallel('watch-source-scss', 'watch-source-js', 'watch-sprites')
));

gulp.task('default', gulp.series(
	gulp.parallel('build'),
	gulp.parallel('watch')
));
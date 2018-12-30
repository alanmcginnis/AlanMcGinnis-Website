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
	HBS: 'source/templates/**/*.hbs'
};

// CSS/SCSS

function buildSCSS(){
	return gulp
	.src(Paths.SCSS_SRC)
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
}

// Handlebars

function handlebars(){
	return gulp
	.src(Paths.HBS_SRC)
	.pipe(plugins.handlebars())
	.pipe(plugins.wrap('Handlebars.template(<%= contents %>)'))
	.pipe(plugins.declare({
		namespace: 'App.templates',
		noRedeclare: true, // Avoid duplicate declarations
	}))
	.pipe(plugins.concat('templates.js'))
	.pipe(gulp.dest(Paths.JS_DEST));
}

// JavaScript

function buildJS(){
	return gulp
	.src([srcFiles.jquery, srcFiles.handlebars, srcFiles.js])
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
}

// Sprites

function buildSprites(){
	return gulp
	.src(Paths.SVG_SRC)
	.pipe(plugins.svgSprites({
		preview: false,
		svg: {
			sprite: "media/sprite.svg"
		},
		cssFile: "../source/css/sass-includes/_sprite.scss"
	}))
	.pipe(gulp.dest('./'));
}

// Watch files

function watchFiles(){
	gulp.watch(watchPaths.SCSS, buildSCSS);
	gulp.watch(watchPaths.JS, buildJS);
	gulp.watch(watchPaths.HBS, buildJS);
	gulp.watch(watchPaths.SVG, buildSprites);
}

// Tasks

gulp.task("handlebars", handlebars);
gulp.task("build-scss", buildSCSS);
gulp.task("build-js", buildJS);
gulp.task("build-sprites", buildSprites);

// Build
gulp.task(
	"build",
	gulp.parallel("build-scss", "build-js", "build-sprites", "handlebars")
);

// Watch

gulp.task(
	"watch",
	gulp.parallel("watchFiles")
);

// Default

gulp.task(
	"default",
	gulp.series(gulp.parallel("build"),gulp.parallel("watch"))
);
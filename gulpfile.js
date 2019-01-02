(() => {

'use strict';

const 	gulp = require('gulp'),
		plugins = require('gulp-load-plugins')(),
		autoprefixer = require('autoprefixer'),
		browserSync = require('browser-sync').create();

// Path Constants

const paths = {
	styles:{
		src: 'source/css/master.scss',
		outFileName: 'master.min.css',
		dest: 'css'
	},
	javascript:{
		master: 'source/js/master.js',
		handlebars: 'source/js/handlebars.js',
		outFileName: 'master.min.js',
		dest: 'js'
	},
	handlebars:{
		src: 'source/templates/**/*.hbs',
		outFileName: 'handlebars.js',
		dest: './source/js'
	},
	svgSprite:{
		src: 'source/media/**/*.svg',
		dest: './'
	},
	watch:{
		scss: 'source/css/**/*.scss',
		javascript: 'source/js/**/*.js',
		handlebars: 'source/templates/**/*.hbs',
		svgSprite: 'source/templates/**/*.svg'
	}
};

// CSS/SCSS

function styles(){
	const processors = [
		autoprefixer({browsers: ['last 1 version']})
    ];
	return gulp.src(paths.styles.src)
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
		.on('error', plugins.notify.onError({
			message: '<%= error.message %>',
			title: 'SCSS Error'
		}))
		.pipe(plugins.postcss(processors))
		.pipe(plugins.cssnano())
		.pipe(plugins.rename(paths.styles.outFileName))
		.pipe(plugins.sourcemaps.write('.'))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(browserSync.stream());
}

// Handlebars

function handlebars(){
	return gulp.src(paths.handlebars.src)
		.pipe(plugins.handlebars())
		.pipe(plugins.wrap('Handlebars.template(<%= contents %>)'))
		.pipe(plugins.declare({
			namespace: 'App.templates',
			noRedeclare: true, // Avoid duplicate declarations
		}))
		.pipe(plugins.concat(paths.handlebars.outFileName))
		.pipe(gulp.dest(paths.handlebars.dest));
}

// JavaScript

function javascript(){
	return gulp.src([paths.javascript.handlebars, paths.javascript.master])
		.pipe(plugins.notify({
			message: 'Starting JS build',
			title: 'JS Build'
		}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.uglify())
		.pipe(plugins.plumber({
			errorHandler: function (err) {
				plugins.notify.onError({
					title: 'JS Build Error',
					message: err.message
				})(err);
			}
		}))
		.pipe(plugins.concat(paths.javascript.outFileName))
		.pipe(plugins.sourcemaps.write('.'))
		.pipe(gulp.dest(paths.javascript.dest))
		.pipe(browserSync.stream());
}

// Sprites

function svgSprite(){
	return gulp.src(paths.svgSprite.src)
		.pipe(plugins.svgSprites({
			preview: false,
			svg: {
				sprite: 'media/sprite.svg'
			},
			cssFile: './source/css/sass-includes/_sprite.scss'
		}))
		.pipe(gulp.dest(paths.svgSprite.dest));
}

// Watch files

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
		},
		browser: 'FirefoxDeveloperEdition'
    });
	gulp.watch(paths.watch.scss, styles);
	gulp.watch(paths.watch.handlebars, handlebars);
	gulp.watch(paths.watch.javascript, javascript);
	gulp.watch(paths.watch.svgSprite, svgSprite);
}

// Tasks

gulp.task('build-scss', styles);
gulp.task('build-hbs', handlebars);
gulp.task('build-js', javascript);
gulp.task('build-sprites', svgSprite);
gulp.task('watch', watch);

// Build
gulp.task(
	'build',
	gulp.parallel('build-scss', 'build-hbs', 'build-js', 'build-sprites')
);

// Default

gulp.task(
	'default',
	gulp.series('build','watch')
);

})();
const gulp			= require('gulp');
const plugins		= require('gulp-load-plugins')();

// Path Constants

// Source Files
const srcFiles = {
	scss: 'source/css/master.scss',
	js: 'source/js/master.js',
	jquery: 'source/js/vendor/jquery*.js',
	handlebars: 'source/js/vendor/handlebars*.js',
	svgs:'source/media/*.svg'
};

// Desination Folder names
const destFolderNames = {
	css: 'css',
	js: 'js',
	svgs: 'media'
};

// Destination File names
const destFileNames = {
	css: 'master.min.css',
	js: 'master.min.js'
};

// Watch paths
const watchPaths = {
	scss: 'source/css/**/*.scss',
	js: 'source/js/**/*.js',
	svgs: 'source/media/**/*.svg',
};

// CSS/SCSS Scripts

gulp.task('build-scss', function () {
	return gulp.src(srcFiles.scss)
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
		.pipe(plugins.rename(destFileNames.css))
		.pipe(plugins.sourcemaps.write('.'))
		.pipe(gulp.dest(destFolderNames.css))
		.on('error', plugins.notify.onError({
			message: '<%= error.message %>',
			title: 'SCSS Error'
		}));
});

// JS Scripts

gulp.task('build-js', function () {
	return gulp.src([srcFiles.jquery,srcFiles.handlebars,srcFiles.js])
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
		.pipe(plugins.concat(destFileNames.js))
		.pipe(gulp.dest(destFolderNames.js));
});

// Sprite Generation

var spritesConfig = {
	preview: false,
	svg: {sprite: "media/sprite.svg"},
	cssFile: "../source/css/sass-includes/_sprite.scss",
};

gulp.task('build-sprites', function () {
	return gulp.src(srcFiles.svgs)
        .pipe(plugins.svgSprites(spritesConfig))
        .pipe(gulp.dest('./'));
});

// Build Scripts and Defaults

gulp.task('build', gulp.parallel('build-scss','build-js','build-sprites'));

gulp.task('watch-sprites', function () {
	gulp.watch(watchPaths.svgs, gulp.parallel('build-sprites'));
});

gulp.task('watch-source-scss', function () {
	gulp.watch(watchPaths.scss, gulp.parallel('build-scss'));
});

gulp.task('watch-source-js', function () {
	gulp.watch(watchPaths.js, gulp.parallel('build-js'));
});

gulp.task('watch', gulp.series(
	gulp.parallel('watch-source-scss', 'watch-source-js', 'watch-sprites')
));

gulp.task('default', gulp.series(
	gulp.parallel('build'),
	gulp.parallel('watch')
));
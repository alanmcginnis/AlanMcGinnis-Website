// =========================================================
// Gulp Task: styles
// =========================================================
var config = require('../config.js');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

module.exports = function(gulp, plugins) {
    return function () {
    var processors = [
        autoprefixer,
        cssnano
    ];
    var stream =
// -------------------------------------------- Start Task
    gulp.src(config.styles.source)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    .pipe(plugins.rename(config.styles.masterFile))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(config.styles.destination))
// ---------------------------------------------- End Task
    return stream;
    };
};
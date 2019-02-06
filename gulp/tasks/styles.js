// =========================================================
// Gulp Task: styles
// =========================================================
var config = require('../config.js');

module.exports = function(gulp, plugins) {
    return function () {
    var stream =
// -------------------------------------------- Start Task
    gulp.src(config.styles.source)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(config.styles.options).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer(config.autoprefixer.options))
    .pipe(plugins.rename(config.styles.masterFile))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(config.styles.destination))
// ---------------------------------------------- End Task
    return stream;
    };
};
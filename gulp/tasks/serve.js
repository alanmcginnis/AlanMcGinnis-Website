// =========================================================
// Gulp Task: serve
// =========================================================
var config              = require('../config.js');
var browserSync         = require('browser-sync').create();

module.exports = function(gulp, plugins) {
    return function () {
    var stream =
// -------------------------------------------- Start Task
    browserSync.init(config.browsersync.options);

    gulp.watch(config.browsersync.reBuild.css, gulp.series('styles'));
    gulp.watch(config.browsersync.reBuild.handlebars, gulp.series('handlebars','javascript'));
    gulp.watch(config.browsersync.reBuild.javascript, gulp.series('javascript'));
    gulp.watch(config.browsersync.reBuild.sprite, gulp.series('sprite'));
    browserSync.watch(config.browsersync.watch).on('change', browserSync.reload);
// ---------------------------------------------- End Task
    return stream;
    };
};
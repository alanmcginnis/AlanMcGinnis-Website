// =========================================================
// Gulp Task: javascript
// =========================================================
var config = require('../config.js');

module.exports = function(gulp, plugins) {
    return function () {
    var stream =
// -------------------------------------------- Start Task
    gulp.src([config.javascript.master.buildFile, config.javascript.handlebars.buildFile])
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
    .pipe(plugins.concat(config.javascript.master.masterFile))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(config.javascript.master.destination))
// ---------------------------------------------- End Task
    return stream;
    };
};
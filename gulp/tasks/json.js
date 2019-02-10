// =========================================================
// Gulp Task: javascript
// =========================================================
var config = require('../config.js');

module.exports = function(gulp, plugins) {
    return function () {
    var stream =
// -------------------------------------------- Start Task
    gulp.src(config.javascript.json.buildFile)
    .pipe(plugins.jsonminify())
    .pipe(gulp.dest(config.javascript.json.destination));
// ---------------------------------------------- End Task
    return stream;
    };
};
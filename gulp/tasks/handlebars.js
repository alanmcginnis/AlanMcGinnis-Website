// =========================================================
// Gulp Task: handlebars
// =========================================================
var config = require('../config.js');

module.exports = function(gulp, plugins) {
    return function () {
    var stream =
// -------------------------------------------- Start Task
    gulp.src(config.javascript.handlebars.templates)
    .pipe(plugins.handlebars())
		.pipe(plugins.wrap('Handlebars.template(<%= contents %>)'))
		.pipe(plugins.declare({
			namespace: 'App.templates',
			noRedeclare: true, // Avoid duplicate declarations
		}))
		.pipe(plugins.concat(config.javascript.handlebars.masterFile))
		.pipe(gulp.dest(config.javascript.handlebars.destination));
// ---------------------------------------------- End Task
    return stream;
    };
};
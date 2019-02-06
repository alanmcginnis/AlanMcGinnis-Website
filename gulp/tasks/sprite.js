// =========================================================
// Gulp Task: sprites
// =========================================================
var config = require('../config.js');

module.exports = function(gulp, plugins) {
    return function () {
    var stream =
// -------------------------------------------- Start Task
    gulp.src(config.sprite.source)
    .pipe(plugins.svgSprites({
        preview: false,
        svg: {
            sprite: 'media/sprite.svg'
        },
        cssFile: './source/css/sass-includes/_sprite.scss'
    }))
    .pipe(gulp.dest(config.sprite.destination));
// ---------------------------------------------- End Task
    return stream;
    };
};
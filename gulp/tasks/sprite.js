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
            sprite: 'public_html/media/sprite.svg'
        },
        cssFile: '../source/css/sass-includes/_sprite.scss'
    }))
    .pipe(gulp.dest('.'));
// ---------------------------------------------- End Task
    return stream;
    };
};
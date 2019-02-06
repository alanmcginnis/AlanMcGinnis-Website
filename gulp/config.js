// =========================================================
// Project: AlanMcGinnis-Website
// =========================================================
// ------------------------------------------ Export Configs
module.exports = {
    // -------------------------------------------- postcss
    autoprefixer: {
        options: {
            browsers: ['last 2 versions', 'ie >= 11']
        }
    },
    // --------------------------------------------- browsersync
    browsersync: {
        options: {
            server: './'
        },
        watch: [
            './css/**/*.css',
            './**/*.html',
            './js/**/*.js',
            './data/**/*.json'
        ],
        reBuild: {
            css: 'source/css/**/*.scss',
            javascript: 'source/js/**/*.js',
            handlebars: 'source/templates/**/*.hbs',
            sprite: 'source/media/**/*.svg'
        }
    },
    // ------------------------------------------------- scripts
    javascript: {
        handlebars: {
            buildFile: './source/js/handlebars.js',
            destination: './source/js',
            templates: './source/templates/**/*.hbs',
            masterFile: 'handlebars.js'
        },
        master: {
            buildFile: './source/js/master.js',
            masterFile: 'master.min.js',
            destination: './js'
        },
    },
    // ------------------------------------------------- sprite
    sprite:{
		source: './source/media/**/*.svg',
		destination: './'
	},
    // -------------------------------------------------- styles
    styles: {
        source: './source/css/master.scss',
        masterFile: 'master.min.css',
        destination: './css',
        options: {
            outputStyle: 'compressed'
        }
    }
}
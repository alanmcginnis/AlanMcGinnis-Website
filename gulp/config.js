// =========================================================
// Project: AlanMcGinnis-Website
// =========================================================
// ------------------------------------------ Export Configs
module.exports = {
    // -------------------------------------------- autoprefixer
    autoprefixer: {
        options: {
            browsers: ['last 2 versions', 'ie >= 11']
        }
    },
    // --------------------------------------------- browsersync
    browsersync: {
        options: {
            server: './public_html'
        },
        watch: [
            './public_html/css/**/*.css',
            './public_html/**/*.html',
            './public_html/js/**/*.js',
            './public_html/data/**/*.json'
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
            destination: './public_html/js'
        },
        json:{
            buildFile: './source/data/resume.json',
            destination: './public_html/data'
        }
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
        destination: './public_html/css'
    }
}
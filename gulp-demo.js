(() => {

    'use strict';

    /**************** gulpfile.js configuration ****************/

    const

      // development or production
      devBuild  = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),

      // directory locations
      dir = {
        src         : 'src/',
        build       : 'build/'
      },

      // modules
      gulp          = require('gulp'),
      noop          = require('gulp-noop'),
      newer         = require('gulp-newer'),
      size          = require('gulp-size'),
      imagemin      = require('gulp-imagemin'),
      sass          = require('gulp-sass'),
      postcss       = require('gulp-postcss'),
      sourcemaps    = devBuild ? require('gulp-sourcemaps') : null,
      browsersync   = devBuild ? require('browser-sync').create() : null;

    console.log('Gulp', devBuild ? 'development' : 'production', 'build');

  })();
// Gruntfile.js
module.exports = function(grunt) {
  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    cssmin: {
      options: {
        keepSpecialComments: 0,
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/css/all.styles.min.css': [
            'public/css/bootstrap.min.css',
            'public/css/material.min.css',
            'public/css/ripples.min.css',
            'public/css/font-awesome.min.css',
            'public/css/style.css'
          ]
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      tgt: {
        files: {
          'public/js/all.js.min.js': [
          'public/js/jquery.min.js',
            'public/js/bootstrap.min.js',
            'public/js/material.min.js',
            'public/js/ripples.min.js',
            'public/js/main.min.js'
          ],
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      css: {
        src: ['public/css/bootstrap.min.css',
          'public/css/material.min.css',
          'public/css/ripples.min.css',
          'public/css/font-awesome.min.css',
          'public/css/style.min.css'
        ],
        dest: 'public/css/all.styles.min.css',
      },
      js: {
        src: ['public/js/jquery.min.js',
          'public/js/bootstrap.min.js',
          'public/js/material.min.js',
          'public/js/ripples.min.js',
          'public/js/main.min.js'
        ],
        dest: 'public/js/all.js.min.js',
      },
    },
  });
  grunt.registerTask('default', ['cssmin', 'uglify']);
};
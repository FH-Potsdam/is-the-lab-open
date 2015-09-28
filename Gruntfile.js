// Gruntfile.js
module.exports = function(grunt) {
  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');
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
      docs:{
      options: {
        separator: '  \n',
        process:function(src, filepath){
          return src.replace('<i class="fa fa-heart"></i>', '<3');
        }
      },
      src:[
      'docs/head.md',
      'docs/what.md',
      'docs/why.md',
      'docs/how.md',
      'docs/who.md',
      'docs/server.md',
      'docs/authentification.md',
      'docs/license.md'
      ],
      dest:'README.md'
      },
      css: {
      options: {
        separator: ';',
      },
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
  grunt.registerTask('docs',['create-md','concat:docs']);
  grunt.registerTask('default', ['cssmin', 'uglify']);
};
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    sass: {
      options: {
        noCache: true,
        sourcemap: "none"
      },
      dist: {
        files: {
          "css/style.css": "sources/scss/base.scss"
        }
      }
    },

    watch: {
      concat: {
        files: ['sources/scss/*.scss', 'sources/jscript/*.js'],
        tasks: ['sass', 'cmq', 'postcss', 'csscomb', 'cssmin', 'concat', 'uglify']
      }
    },

    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'css/style.css': ['css/style.css']
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "css/style.css"
      }
    },

    csscomb: {
        dist: {
            options: {
                config: '.csscomb.json'
            },
            files: {
                'css/style.css': ['css/style.css']
            }
        }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: 'sources/jscript/*.js',
        dest: 'js/common.js'
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/common.min.js': ['js/common.js']
        }
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'sources/css/',
        src: '**',
        dest: 'css/',
        flatten: true,
        filter: 'isFile',
      }
    }
  });
  grunt.registerTask('build', ['sass', 'cmq', 'postcss', 'csscomb', 'cssmin', 'concat', 'uglify', 'copy']);
};

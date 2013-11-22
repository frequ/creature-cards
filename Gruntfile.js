module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['app/build'],
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'app/js',
                    name: 'main',
                    mainConfigFile: 'app/js/main.js',
                    out: 'app/build/js/main.js',
                    optimize: 'uglify'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand:true, flatten:true, src: ['app/index.html'], dest: 'app/build', filter: 'isFile'},
                    //{expand:true, flatten:true, src: ['app/js/lib/requirejs/require.js'], dest: 'app/build/js/lib/requirejs', filter: 'isFile'}
                ]
            }
        },
        uglify: {
            options: {

            },
            my_target: {
                files: {
                    'app/build/js/lib/requirejs/require.js': ['app/js/lib/requirejs/require.js']
                }
            }
        },
        less: {
            production: {
                options: {
                    paths: ['app/css/less'],
                    cleancss: true
                },
                files: {
                    'app/build/css/main.css': 'app/css/less/main.less'
                }
            },
            development: {
                options: {
                    paths: ['app/css/less']
                },
                files: {
                    'app/css/main.css': 'app/css/less/main.less'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'app/build/css/main.css': ['app/build/css/main.css','app/css/less/lib/bootstrap.css'],
                    'app/css/main.css': ['app/css/main.css','app/css/less/lib/bootstrap.css']
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Default task(s).
    grunt.registerTask('default', ['clean','less','cssmin','requirejs','copy', 'uglify']);

};
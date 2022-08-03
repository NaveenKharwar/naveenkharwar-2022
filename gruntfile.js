module.exports = function (grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        processors: [require("tailwindcss")(), require("autoprefixer")],
      },
      dist: {
        src: "src/css/tailwind.css",
        dest: "public/css/style.css",
      },
    },
    uglify: {
      scripts: {
        files: {
          "public/js/script.min.js": ["src/js/script.js"],
        },
      },
    },
    cwebp: {
      dynamic: {
        options: {
          q: 50,
        },
        files: [
          {
            expand: true,
            cwd: "files/",
            src: ["**/*.{png,jpg,jpeg,gif}"],
            dest: "public/images",
          },
        ],
      },
    },
    watch: {
      monitor: {
        files: ["public/**/*.html", "src/css/tailwind.css", "src/js/script.js", "files/**.**"],
        tasks: ["postcss", "uglify", "cwebp"],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Plugins
  grunt.loadNpmTasks("@lodder/grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-cwebp');
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch", "uglify", "cwebp"]);
};

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
    watch: {
      monitor: {
        files: ["public/**/*.html", "src/css/tailwind.css", "src/js/script.js"],
        tasks: ["postcss", "uglify"],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Plugins
  grunt.loadNpmTasks("@lodder/grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch", "uglify"]);
};

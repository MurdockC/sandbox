module.exports = function(grunt) {
 grunt.initConig({
   pkg: grunt.file.readJSON('package.JSON'),

   // name of plug in (plugin name without the "grunt-contrib-")
   cssmin: {
     combine: {
       files: {
         '../../main.css': ['style.css', 'other.css']
       }
     }
   }
 });

 //load the plugin
 grunt.loadNpmTasks('grunt-contrib-cssmin');

 // Do the Task

grunt.registerTask('default', ['cssmin']);

};

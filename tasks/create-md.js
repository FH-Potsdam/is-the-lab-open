var fs = require('fs');
var txt = require('../app/texts');
module.exports = function(grunt) {
  grunt.registerTask('create-md', function() {
    var done = this.async();
    var texts = txt.get();
    for(var key in texts){
      if(texts.hasOwnProperty(key)){
        var content = '## ' + key + '  \n' + texts[key] + '  \n';
        fs.writeFileSync('docs/' + key + '.md', content, 'utf8');
      }
    }
    done();
  });

};
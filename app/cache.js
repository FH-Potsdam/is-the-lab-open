// var sheet = require('../app/getter');
var badge = require('./badge');
var fs = require('fs');

exports.read = function() {
  var res = fs.readFileSync('public/cache/data.json', 'utf8');
  var data = JSON.parse(res);
  return data;
};
exports.apiWrite =function(value, dt){
        var data = {
        'val': value,
        'time': dt,
      };
    console.log("logging: ", data);

   fs.writeFile('public/cache/data.json', JSON.stringify(data), function(err) {
        if (err) {
          return console.error(err);
        }
        badge.create();
      });
};
var fs = require('fs');


exports.get = function() {
  var res = fs.readFileSync('public/cache/data.json', 'utf8');
  var data = JSON.parse(res);
  return data;
};
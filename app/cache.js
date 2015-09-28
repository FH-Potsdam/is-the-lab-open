var sheet = require('../app/getter');
var badge = require('./badge');
var fs = require('fs');
// console.log(sheet.get(id));
// if(res !== null){
//   var val = parseInt(res, 10);
//   console.log(res);
// }
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

exports.write = function() {
  // https://docs.google.com/spreadsheets/d/1j4lhA_I2iv6wWvsgvU9SjZxQCaSIWNNdBZZPMhDf7_4/edit?usp=sharing
  var settings = JSON.parse(fs.readFileSync('settings.json', 'utf8'));
  var id = settings.spreadID; //'1j4lhA_I2iv6wWvsgvU9SjZxQCaSIWNNdBZZPMhDf7_4';
  sheet.get(id, function(err, val) {
    if (!err) {
      var now = new Date();
      var tmstmp = now.getFullYear().toString() +
        '-' + (now.getMonth() + 1).toString() +
        '-' + now.getDate().toString() +
        ' ' + now.getHours().toString() +
        ':' + now.getMinutes().toString() +
        ':' + now.getSeconds().toString();
      console.log(val);
      var data = {
        'val': val,
        'time': tmstmp,
      };
      fs.writeFile('public/cache/data.json', JSON.stringify(data), function(err) {
        if (err) {
          return console.error(err);
        }
      });
    } else {
      return console.error('Error %s', err);
    }
  });
};
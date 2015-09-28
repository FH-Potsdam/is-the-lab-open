var fs = require('fs');
var reader = function(pt) {
  var contents = fs.readFileSync(pt, 'utf8');
  return JSON.parse(contents);
};

exports.findByUsername = function(username, cb) {
  var records = reader('private/data.json');
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};

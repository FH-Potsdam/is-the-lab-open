var cache = require('./cache');


exports.set = function(req, res) {
  var now = new Date();
  var tmstmp = now.getFullYear().toString() +
    '-' + (now.getMonth() + 1).toString() +
    '-' + now.getDate().toString() +
    ' ' + now.getHours().toString() +
    ':' + now.getMinutes().toString() +
    ':' + now.getSeconds().toString();
  console.log(req.params);
  cache.apiWrite(parseInt(req.params.value), tmstmp);
  res.send('Message received from ' + req.user.username + ': ' + req.params.value);
};
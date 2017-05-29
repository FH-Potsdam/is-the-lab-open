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
  // this should not be like this
  // it is not safe to parse user input
  if(req.params.value === '1') {
    cache.apiWrite(1, tmstmp);
  }else if(req.params.value === '0') {
    cache.apiWrite(0, tmstmp);
  }
  // cache.apiWrite(parseInt(req.params.value), tmstmp);
  res.send('Message received from ' + req.user.username + ': ' + req.params.value);
};

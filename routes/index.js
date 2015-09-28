// var sheet = require("../app/getter");
var fs = require('fs');
var path = require('path');
var cache = require('../app/cache');

exports.index = function(req, res) {
  var data = cache.read();
  res.render('index', {
    env: req.app.get('dev'),
    title: 'Is the lab open?',
    val: (data.val === 1 ? 'yes!' : 'no!')
  });
  console.log(data);
};
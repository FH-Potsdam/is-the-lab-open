// var sheet = require("../app/getter");
var fs = require('fs');
var path = require('path');
var cache = require('../app/cache');

exports.index = function(req, res) {
  // https://docs.google.com/spreadsheets/d/1j4lhA_I2iv6wWvsgvU9SjZxQCaSIWNNdBZZPMhDf7_4/edit?usp=sharing
  // var settings = JSON.parse(fs.readFileSync('settings.json', 'utf8'));
  // var id = settings.spreadID; //;"1j4lhA_I2iv6wWvsgvU9SjZxQCaSIWNNdBZZPMhDf7_4";
  // if (settings.cache !== true) {
  //   sheet.get(id, function(err, val) {
  //     if (!err) {
  //       console.log("Value is %d result should be %s",val,(data.val === 1 ? 'yes!' : 'no!'));

  //       res.render('index', {
  //         env: req.app.get('dev'),
  //         title: 'Is the lab open?',
  //         val: (data.val === 1 ? 'yes!' : 'no!')
  //       });

  //     } else {
  //       res.render('index', {
  //         env: req.app.get('dev'),
  //         title: 'Error retrieving data. Please come back later'
  //       });
  //       console.error("Error %s", err);
  //     }
  //   });
  // }
   // else
    // if (settings.cache === true) {
    var data = cache.read();
    res.render('index', {
      env: req.app.get('dev'),
      title: 'Is the lab open?',
      val: (data.val === 1 ? 'yes!' : 'no!')
    });
    console.log(data);
  // }
};
var sheet = require("../app/getter");
// console.log(sheet.get(id));
// if(res !== null){
//   var val = parseInt(res, 10);
//   console.log(res);
// }

exports.index = function(req, res) {


  var id = "1DhfnhUP5qoL7LU5P5P7ZKOMavFHdVKeNW9w3AmKfhCA";
  sheet.get(id, function(err, val) {
    if (!err) {
      console.log(val);
      if (val === 1) {
        res.render('index', {
          title: 'Is the lab open?',
          val: 'Yes'
        });
        console.log("Yes");
      } else {
        res.render('index', {
          title: 'Is the lab open?',
          val: 'No'
        });
        console.log("No");
      }
    } else {
      res.render('index', {
        title: 'Error retrieving data. Please come back later'
      });

      console.error("Error %s", err);
    }
  });
};
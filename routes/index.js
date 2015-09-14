var sheet = require("../app/getter");
// console.log(sheet.get(id));
// if(res !== null){
//   var val = parseInt(res, 10);
//   console.log(res);
// }

exports.index = function(req, res) {

  var id = "1WjjpEEysIBlOKez-SqQqVI5f0mUZbMzwBhnRgXk_7Dg";
  sheet.get(id, function(err, val) {
    if (!err) {
      console.log(val);
      if (val === 1) {
        res.render('index', {
          env:req.app.get('dev'),
          title: 'Is the lab open?',
          val: 'yes!'
        });
        console.log("yes!");
      } else {
        res.render('index', {
          env:req.app.get('dev'),
          title: 'Is the lab open?',
          val: 'no!'
        });
        console.log("no!");
      }
    } else {
      res.render('index', {
        env:req.app.get('dev'),
        title: 'Error retrieving data. Please come back later'
      });

      console.error("Error %s", err);
    }
  });
};
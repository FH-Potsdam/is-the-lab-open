var  exports = module.exports = {};
exports.get = function(id, next){
var request = require("request");
var gsheet = require("google-spreadsheet");

// https://docs.google.com/spreadsheets/d/1WjjpEEysIBlOKez-SqQqVI5f0mUZbMzwBhnRgXk_7Dg/edit?usp=sharing
// var id =  "1WjjpEEysIBlOKez-SqQqVI5f0mUZbMzwBhnRgXk_7Dg";
var sheet = new gsheet(id);
sheet.getInfo(function(err, sheet_info) {
  if (!err) {
    console.log(sheet_info);
    sheet1 = sheet_info.worksheets[0];
    sheet1.getRows(function(err, rows) {
      if (!err) {
        console.log(rows[rows.length-1]);
        var res = rows[rows.length-1]['is-the-lab-open'];
        console.log(val);
        // return val;
          var val = parseInt(res, 10);
        next(null, val);
      }else{
        return next(new Error("Could not get rows of sheet"));
      }
    });
  }else{
    return next(new Error("Could not getInfo of sheet " + id));
  }
});
};
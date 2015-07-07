var  exports = module.exports = {};
exports.get = function(id, next){
var request = require("request");
var gsheet = require("google-spreadsheet");
//https://docs.google.com/spreadsheets/d/1DhfnhUP5qoL7LU5P5P7ZKOMavFHdVKeNW9w3AmKfhCA/pubhtml?gid=0&single=true
// var id =  "1DhfnhUP5qoL7LU5P5P7ZKOMavFHdVKeNW9w3AmKfhCA";
var sheet = new gsheet(id);
sheet.getInfo(function(err, sheet_info) {
  if (!err) {
    // console.log(sheet_info);
    sheet1 = sheet_info.worksheets[0];
    sheet1.getRows(function(err, rows) {
      if (!err) {
        // console.log(rows[rows.length-1]);
        var res = rows[rows.length-1].isthelabopen;
        // console.log(val);
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
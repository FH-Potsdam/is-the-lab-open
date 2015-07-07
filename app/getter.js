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
// sheet.getRows( function(err, rows){
//   if(!err){
//     console.error("Error reading rows: %s ", rows);
//   }
// });
// sheet.getRows( 1, function(err, row_data){
//   if(err !== null){
//     console.error("Error while reading sheet: %s", err);
//   }else{
//     console.log( 'pulled in '+row_data.length + ' rows ');
//     // console.log(row_data[0]);
//   }
//   });
// sheet.getInfo(function(err, info){
//   if(err !== null){

//   }else{
//     console.log(info);
//   }
// });

// console.log("getter");
// module.exports = exports  = {};
// // exports.read = function(){
//   request.get(url, function(error, response, body){
//     if(error !== null){
//       console.error(error);
//     }
//     if(response.statusCode != 200){
//       console.log(response.statusCode);
//     }
//     if(!error && response,statusCode == 200){
//       var content = body;
//       console.log(content);
//       return true;
//     }
//     // else{
//     //   return error;
//     // }
//   });

// };
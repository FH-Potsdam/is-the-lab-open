var request = require("request");
var gsheet = require("google-spreadsheet");
//https://docs.google.com/spreadsheets/d/1DhfnhUP5qoL7LU5P5P7ZKOMavFHdVKeNW9w3AmKfhCA/pubhtml?gid=0&single=true
var sheet = new gsheet("1DhfnhUP5qoL7LU5P5P7ZKOMavFHdVKeNW9w3AmKfhCA");
sheet.getRows(1, {
}, function(err, rows){
  if(!err){
    console.log(rows);
  }
});
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

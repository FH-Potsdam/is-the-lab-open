var sheet = require("./getter");
var id =  "1DhfnhUP5qoL7LU5P5P7ZKOMavFHdVKeNW9w3AmKfhCA";
sheet.get(id, function(err, val){
  if(!err){
  console.log(val);
  if(val === 1){
    console.log("Yes");
  }else{
    console.log("No");
  }
  }else{
    console.error("Error %s", err);
  }
});
// console.log(sheet.get(id));
// if(res !== null){
//   var val = parseInt(res, 10);
//   console.log(res);
// }


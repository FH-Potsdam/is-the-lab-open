require("mocha");
var assert = require("chai").assert;
var getter = require("../app/getter");


describe("Is the lab open",function(){
  describe(".",function(){
    it("reads a file from dropbox and returns either 1 or 0",function(){
      var result = getter.read();
      assert.isBoolean(result);

    });
  });
});
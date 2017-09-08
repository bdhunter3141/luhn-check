var assert = require("chai").assert
var check = require("../index.js")


describe("Luhn Check", function() {
  it("Should return a 'true' value if number is valid", function() {
    var number = 79927398713
    assert.isTrue(check(number))
  })
  it("Should return a 'false' value if number is invalid", function() {
    var number = 79927398711
    assert.isFalse(check(number))
  })
  it("Should return a 'false' value if input is NaN", function() {
    var string = "I'm NaN!"
    assert.isFalse(check(string))
  })
})
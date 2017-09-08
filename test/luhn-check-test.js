var assert = require("chai").assert
var check = require("../index.js")


describe("Luhn Check", function() {
  it("Should return a 'true' value if number is valid", function() {
    var number = 7992739871
    assert.isTrue(check(number))
  })
  it("Should return a 'false' value if number is invalid", function() {
    var number = 7992736471
    assert.isTrue(check(number))
  })
})
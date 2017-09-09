const check = function(number) {
//From the right, moving left, double every other digit
  if (isNaN(number)) {
    return false
  }
  let evenNumArr = []
  let oddStringArr = []
  let oddNumArr = []
  let stringNumArr = []
  let numArr = number.toString().split("").reverse()
  for (let num in numArr) {
    if (num % 2 === 0) {
      stringNumArr.push(numArr[num])
    } else {
      oddStringArr.push(numArr[num])
    }
  }
  stringNumArr.forEach(function(element) {
    var newNum = Number(element);
    evenNumArr.push(newNum)
  })
  oddStringArr.forEach(function(element) {
    var newNum = Number(element);
    oddNumArr.push(newNum)
  })
  var doubleArr = evenNumArr.map(function(x) {
    return x * 2
  })
  for (var i = 0; i < doubleArr.length; i++) {
    if (doubleArr[i].toString().length > 1) {
      var splitString = doubleArr[i].toString().split("")
      doubleArr[i] = addNumbers(splitString[0], splitString[1])
    } console.log(doubleArr)
  }

function addNumbers(x, y) {
  return Number(x) + Number(y)
}



  // If doubled number greater than 9, add the two numbers to itself
//Sum all digits
  //If modulo 10 = 0
  //Then it is valid
  //else, false
}
check(239057240184903)

module.exports = check
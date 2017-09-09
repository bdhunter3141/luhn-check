const check = function(number) {
  if (isNaN(number)) {
    return false
  }
  let evenNumArr = []
  let oddStringArr = []
  let oddNumArr = []
  let stringNumArr = []
  let numArr = number.toString().split("").reverse()
  for (let num in numArr) {
    if (num % 2 !== 0) {
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
    }
  }
  var finishedArr = doubleArr.concat(oddNumArr)
  var finalSum = null
  for (var i = 0; i < finishedArr.length; i++) {
    finalSum += finishedArr[i]
  }
  if (finalSum % 10 === 0) {
    return true
  } else {
    return false
  }
}

function addNumbers(x, y) {
  return Number(x) + Number(y)
}

module.exports = check
const check = function(number) {
//From the right, moving left, double every other digit
  if (isNaN(number)) {
    return false
  }
  let evenNumArr = []
  let stringNumArr = []
  let numArr = number.toString().split("").reverse()
  for (let num in numArr) {
    if (num % 2 === 0) {
      stringNumArr.push(numArr[num])
    }
  }
  stringNumArr.forEach(function(element) {
    var newNum = Number(element);
    evenNumArr.push(newNum)
  });
  console.log(evenNumArr)
  // If doubled number greater than 9, add the two numbers to itself
//Sum all digits
  //If modulo 10 = 0
  //Then it is valid
  //else, false
}
check(239057240184903)

module.exports = check
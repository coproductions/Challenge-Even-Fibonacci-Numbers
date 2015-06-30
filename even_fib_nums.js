/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
var sumFibs = function( maxFibValue ) {
  var sum = 0;
  var current = 1;
  var last = 0;
  fibonacci(1);
  function fibonacci(number){
    var temp = current;
    current += last;
    last = temp;
    if(current <= maxFibValue){
      if(current%2 === 0){
        sum += current;
      }
      fibonacci(current)
    }
  }
  return sum;
};

var highestFibonacciNumber = function(maxFibValue){
  var highest = 0;
  var current = 1;
  var last = 0;
  fibonacci(1);
  function fibonacci(number){
    var temp = current;
    current += last;
    last = temp;
    if(current <= maxFibValue){
      highest = current;
      fibonacci(current)
    }
  }

  return highest;
};

module.exports = {
  sumFibs : sumFibs,
  highestFibonacciNumber : highestFibonacciNumber
}
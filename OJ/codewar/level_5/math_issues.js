//  https://www.codewars.com/kata/5267faf57526ea542e0007fb/solutions/javascript
Math.round = function(number) {
  number = ''.split.call(number, '.');
  if (number.length == 2 && number[1].substr(0, 1) >= 5) {
    return parseInt(1 + + number[0]);
  } else {
    return parseInt(number[0]);
  }
};

Math.ceil = function(number) {
  number = ''.split.call(number, '.');
  if (number.length == 1) {
    return parseInt(number[0]);
  } else {
    return parseInt(+ number[0] + 1);
  }
};

Math.floor = function(number) {
  number = ''.split.call(number, '.');
  return parseInt(number[0]);
};

//  Better one nice solution in a binary way
Math.floor = function(n) {
  return ~~ n;
};

//  Best practice
Math.floor = function(number) {
  return number | 0;
};

Math.ceil = function(number) {
  return (number | 0) + (number % 1 !== 0
    ? 1
    : 0);// mantissa
};

Math.round = function(number) {
  return Math.floor(number + 0.5);
};

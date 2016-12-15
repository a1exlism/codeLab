let createPhoneNumber = (numbers) => {
  let phoneNo = '';
  let newNum = [];
  numbers = numbers.join('');
  newNum.push(numbers.substr(0, 3));
  newNum.push(numbers.substr(3, 3));
  newNum.push(numbers.substr(4));
  phoneNo = '(' + newNum[0] + ') ' + newNum[1] + '-' + newNum[2];

  return phoneNo;
};

//  a better one
let createPhoneNumber = (numbers) => {
  let format = '(xxx) xxx-xxxx';
  let numLen = numbers.length;
  for (let i = 0; i < numLen; i++) {
    format = format.replace(/x/, numbers[i]);
  }
  return format;
};

//  solution 2 正则大法
let createPhoneNumber = (numbers) => {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

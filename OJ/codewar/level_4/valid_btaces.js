//  input: string of braces => order of the braces
//  input: () [] {}
//  output: true || false

let braces = '(){}[]';
function validBraces(braces) {
  let pattern = /\[\]|\(\)|\{\}/;
  while(pattern.test(braces)) {
    braces = braces.replace(pattern, '');
  }
  if (braces === '') {
    return true;
  } else {
    return false;
  }
}

console.log(validBraces(braces));


//  This kata solution refers a kata named 'Directions Reduction'!

let dict = {
  A: 'awesome',
  B: 'beautiful',
  C: 'confident',
  D: 'disturbing',
  E: 'eager',
  F: 'fantastic',
  G: 'gregarious',
  H: 'hippy',
  I: 'ingestable',
  J: 'joke',
  K: 'klingon',
  L: 'literal',
  M: 'mustache',
  N: 'newtonian',
  O: 'oscillating',
  P: 'perfect',
  Q: 'queen',
  R: 'rant',
  S: 'stylish',
  T: 'turn',
  U: 'underlying',
  V: 'volcano',
  W: 'weird',
  X: 'xylophone',
  Y: 'yogic',
  Z: 'zero',
};
/*
 *  "dgm" -> "disturbing gregarious mustache"
 *  "lkj" -> "literal klingon joke"
 */
let makeBackronym = function(string) {
  //	your code here
  return string
    .toUpperCase()
    .split('')
    .map((cur, index, arr) => {
      return dict[cur];
    }).join(' ');
};

console.log(makeBackronym('interesting'));

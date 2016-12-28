/* eslint no-var: "off" */
/* obj || arr || function */
var helloWorld = function() {
  //  Err... This function I used JSFUCK, cheated in another way.
};
helloWorld();

/*  Refer:
[js - 等价比较](http://thomas-yang.me/projects/oh-my-dear-js/)
[jsfuck - typecast(类型转换)](https://github.com/aemkei/jsfuck/blob/master/jsfuck.js)
*/

//  I thought String.fromChatCode(), but always get 'String not allow'...
let helloWorld = function() {
  let one = +true;
  let two = one + one;
  let four = two + two;
  let eight = four + four;
  let sixteen = eight + eight;
  let thirtytwo = sixteen + sixteen;
  let sixtyfour = thirtytwo + thirtytwo;
  let sp = thirtytwo;
  let excl = thirtytwo + one;
  let H = sixtyfour + eight;
  let e = sixtyfour + thirtytwo + four + one;
  let l = sixtyfour + thirtytwo + eight + four;
  let o = sixtyfour + thirtytwo + sixteen - one;
  let W = sixtyfour + sixteen + eight - one;
  let r = sixtyfour + thirtytwo + sixteen + two;
  let d = sixtyfour + thirtytwo + four;
  return [H, e, l, l, o, sp, W, o, r, l, d, excl].map(function(c) {
    return String.fromCharCode(c);
  }).join([]);
};

//  2nd function
var _ = +true;
var $ = String.fromCharCode;
var H = $((_+_+_)*(_+_+_)*(_+_)*(_+_)*(_+_));
var e = $((_+_+_+_+_)*(_+_+_+_+_)*(_+_)*(_+_)+_);
var l = $((_+_+_)*(_+_+_)*(_+_+_)*(_+_)*(_+_));
var o = $((_+_+_+_+_+_+_+_+_+_+_)*(_+_+_+_+_)*(_+_)+_);
var space = $((_+_)*(_+_)*(_+_)*(_+_)*(_+_));
var W = $((_+_+_+_+_+_+_)*(_+_+_)*(_+_)*(_+_)+_+_+_);
var r = $((_+_+_+_+_+_+_)*(_+_)*(_+_)*(_+_)*(_+_)+_+_);
var d = $((_+_+_+_+_)*(_+_+_+_+_)*(_+_)*(_+_));
var h = $((_+_+_+_+_+_+_)*(_+_+_+_+_)*(_+_+_)-_);
var exclamation = $((_+_+_+_+_+_+_+_+_+_+_)*(_+_+_));
this[h+e+l+l+o+W+o+r+l+d] = function() {
  return H+e+l+l+o+space+W+o+r+l+d+exclamation;
};

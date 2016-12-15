/* Input & Output
 * Examples:
 * "din" => "((("
 * "recede" => "()()()"
 * "Success" => ")())())"
 * "(( @" => "))(("
 */
/* eslint no-extend-native: ["error", { "exceptions": ["RegExp"] }] */
RegExp.prototype.escape = (text) => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

function duplicateEncode(word) {
  word = word.toLocaleLowerCase();
  let tmp = '';
  let dic = ''; //  repeat dic
  let result = '';
  for (i in word) {
    if (new RegExp(RegExp().escape(word[i]), 'i').test(tmp) == false) {
      tmp += word[i];
      console.log(word[i]);
      continue;
    } else {
      dic += word[i];
    }
  }
  console.log(dic);
  for (i in word) {
    if (new RegExp(RegExp().escape(word[i]), 'i').test(dic)) {
      result += ')';
    } else {
      result += '(';
    }
  }
  return result;
}

//  better one
//  indexOf 和 lastIndexOf  结合的很棒
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function(a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}


duplicateEncode('Success');
duplicateEncode(')))())');

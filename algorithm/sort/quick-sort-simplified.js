//  core: recursion
//  simplified
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let left = [];
  let right = [];
  let len = arr.length;
  let mid = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid).concat(quickSort(right));
}

let ori = [];
for (let i = 0; i < 20; ++i) {
  ori.push(parseInt(Math.random() * 100 % 20));
}
console.log(ori);
console.log(quickSort(ori));

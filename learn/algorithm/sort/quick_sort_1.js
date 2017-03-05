function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  start = start || 0;
  end = end || arr.length - 1;
  let pivot = arr[end];
  let left = start;
  let right = end - 1;
  while (left < right) { // results: left >= right
    while (arr[left] < pivot && left < right) {
      left++;
    }
    while (arr[right] >= pivot && left < right) {
      right--;
    }
    swap(arr, left, right);
    // make arr[left] < pivot < arr[right]
  }
  let pivotIndex = 0;
  if (arr[left] >= arr[end]) {
    swap(arr, left, end);
    pivotIndex = left;
  } else {
    // all value are less than arr[end]
    pivotIndex = end;
  }
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

let ori = [];
for (let i = 0; i < 20; ++i) {
  ori.push(parseInt(Math.random() * 100 % 20));
}
console.log('ori: ');
console.log(ori);
quickSort(ori);
console.log('res: ');
console.log(ori);

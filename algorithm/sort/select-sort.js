//  core: selct the min/max
function selectSort(arr) {
	let len = arr.length;
	for (let i = 0; i < len; ++i) {
		let min = i;
		for (let j = (i + 1); j < len; ++j) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		swap(arr, min, i);
	}
  return arr;
}

function swap(arr, i, j) {
	let tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

let input = [];
let output;
for (let i = 0; i < 20; ++i) {
	input.push(parseInt(Math.random() * 100 % 20));
}

console.log(input);
output = selectSort(input);
console.log(output);

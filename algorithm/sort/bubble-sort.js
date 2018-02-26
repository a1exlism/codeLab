//  core: select all the time
function bubbleSort(arr) {
	let len = arr.length;
	//  take the min
	for (let i = 0; i < len - 1; ++i) {
		for (let j = len - 1; j > i; --j) {
			if (arr[j - 1] > arr[j]) {
				swap(arr, (j - 1), j);
			}
		}
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
output = bubbleSort(input);
console.log(output);

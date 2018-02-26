//  harder understand than quicksort
//  Core: 1. Divide 2. merge (order the arr)
function mergeSort(arr) {
	let len = arr.length;
	if (len < 2) {
		return arr;
	}
	let midIndex = Math.ceil(len / 2);
	let left = arr.slice(0, midIndex);
	let right = arr.slice(midIndex);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let orderedPart = [];
	let leftLen = left.length;
	let rightLen = right.length;
	let indexLeft = 0;
	let indexRight = 0;
	//  extra2: left [0, 3] right [1, 2, 4, 5] => [5]
	//  ↓↓  this will not happen, check line 8  ↓↓
	//  extra2: left [0, 3] right [1, 2, 4, 6, 5] => [6, 5]
	while (indexLeft < leftLen && indexRight < rightLen) {
		if (left[indexLeft] < right[indexRight]) {
			orderedPart.push(left[indexLeft++]);
		} else {
			orderedPart.push(right[indexRight++]);
		}
	}
	//  attention the return value
	return orderedPart.concat(left.slice(indexLeft), right.slice(indexRight));
}

let input = [];
let output;
for (let i = 0; i < 20; ++i) {
	input.push(parseInt(Math.random() * 100 % 20));
}

console.log(input);
output = mergeSort(input);
console.log(output);

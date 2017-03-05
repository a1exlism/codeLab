//  get all permutations of input and remove dumplicates
//	1. get all permutations
//	2. get remove the dumplicates

function permutations(string) {
  let arr = string.split('');
  // console.log(arr);
  let prefix = '';
  let results = [];
  op(arr);

  function op(arr) {
    // console.log(arr);
    for(let i = 0; i < arr.length; i++) {
      prefix += arr[i];
      arr.splice(i, 1);
      if(arr.length < 2) { //  why arr.length == 1 will out of stacks?
        results.push(prefix + arr.toString());
        prefix = '';
        return;
      } else {
        op(arr);
      }
    }
  }
  console.log(results);
}


permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

//  broken edition

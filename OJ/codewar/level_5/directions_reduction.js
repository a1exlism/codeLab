/*eslint-disable*/
dirReduc([
  'NORTH',
  'SOUTH',
  'SOUTH',
  'EAST',
  'WEST',
  'NORTH',
  'WEST'
]);
dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']);

function dirReduc(arr) {
  let result = [];
  result = arr.reduce(function(cur, next) {
    let t = '';
    if (cur.length == 0) {
      //  first time
      console.log('next: ' + next);
      return cur.concat(next);
    } else {
      t = cur.slice(-1).toString(); //  get last one
    }
    /* eslint indent: ["error", 2, { "SwitchCase": 1 }] */
    console.log(t);
    switch (t) {
      case 'NORTH':
        if (next == 'SOUTH') {
          cur.pop();
          return cur;
        } else {
          return cur.concat(next);
        }
      case 'SOUTH':
        if (next == 'NORTH') {
          cur.pop();
          return cur;
        } else {
          return cur.concat(next);
        }
      case 'WEST':
        if (next == 'EAST') {
          cur.pop();
          return cur;
        } else {
          return cur.concat(next);
        }
      case 'EAST':
        if (next == 'WEST') {
          cur.pop();
          return cur;
        } else {
          return cur.concat(next);
        }
    }
  }, []);
  console.log(result);
  return result;
}

//  Long way to go...

function dirReduc(arr) {
  let str = arr.join('');
  let pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) {
    str = str.replace(pattern, '');
  }
  return str.match(/(NORTH|SOUTH|WEST|EAST)/g) || [];
}

//  another
//  my method are same as his~
function dirReduce(arr) {
  var opposite = {
    'NORTH': 'SOUTH',
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  };
  return plan.reduce(function(dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) {
      dirs.pop();
    } else {
      dirs.push(dir);
    }
    return dirs;
  }, []);
}

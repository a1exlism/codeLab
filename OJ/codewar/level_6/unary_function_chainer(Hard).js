// chained([a,b,c,d])(input)
// Should yield the same result as
// d(c(b(a(input))))
function f1(x) {
  return x + 1;
}
function f2(x) {
  return x + 2;
}
function f3(x) {
  return Math.pow(x, 2);
}
let funcs = [f1, f2, f3];
function chained(funcs) {
  return function(x) {
    let parse = function(func, x) {
      return func(x);
    };
    for (let i in funcs) {
      if ({}.hasOwnProperty.call(funcs, i)) {
        //	important
        x = parse(funcs[i], x);
      }
    }
    return x;
  };
}

console.log(chained(funcs)(0));

// Better one
function chained(functions) {
  return function(input) {
    return functions.reduce((pre, cur) => {
      //  input is a pre
      return cur(pre);
    }, input);
  };
}

//  alternative of mine solution
function chained(functions) {
  return function(x) {
    for (let i in functions) {
      if ([].hasOwnProperty.call(functions, i)) {
        x = functions[i](x);
      }
    }
    return x;
  };
}

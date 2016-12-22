//  simplify solution
let isPP = function(n) {
  let log2n = Math.log2(n);
  if (n < 4) {
    return null;
  }
  for (let m = 2; m <= n / 2; ++m) {
    for (let k = 2; k <= log2n; ++k) {
      if (Math.pow(m, k) == n) {
        return [m, k];
      }
    }
  }
  return null;
};

//  complexity solution
let isPP = function(n) {
  function getPrime(n) {
    let log2n = Math.log2(n);
    let primes = '2';
    for (let i = 3; i <= log2n; i += 2) {
      let flag = 0;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        primes = primes + ',' + i;
      }
    }
    return primes.split(',');
  }
  let primeArr = getPrime(n);
  let primeLen = primeArr.length;
  let sqrtN = Math.sqrt(n);
  for (let m = 2; m <= sqrtN; ++m) {
    for (let i = 0; i < primeLen; ++i) {
      if (Math.pow(m, primeArr[i]) == n) {
        return [m, + primeArr[i]];
      }
    }
  }
  return null;
};

//  maybe a better one?
function isPP(n) {
  for (let m = 2; m < Math.sqrt(n); ++m) {
    if (Math.pow(m, k) == n) {
      return [m, k];
    }
  }
  return null;
}

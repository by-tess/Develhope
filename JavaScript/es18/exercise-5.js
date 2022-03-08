function memoize(fn) {
  let cache = {};
  let fact = 1;

  function facto(number) {
    fact = 1;
    for(let i = 1; i <= number; i++) {
      fact = fact * i;
    }
    return fact;
  }

  if(Object.values(cache).indexOf(fact) > -1) {
    return Object.values(cache)[Object.values(cache).indexOf(fact)];
  } else {
    Object.assign(cache, fact);
    return facto;
  }

}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));

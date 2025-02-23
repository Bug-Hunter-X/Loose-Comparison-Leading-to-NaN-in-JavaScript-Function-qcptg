function foo(x) {
  if (x === null || x === undefined) {
    return 0;
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
"use strict";

// Fibanacci numbers n = n(-1) + n(-2)
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
// 1  2. 3. 4. 5. 6.  7.  8.  9. 10

// Fib Iteration
function fib(n) {
  let fib1 = 1;
  let fib2 = 1;
  for (let i = 3; i <= n; i++) {
    const fibNext = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibNext;
  }
  return fib2;
}
console.log(fib(38));

// Fib Recursion

function fibRec(positoion) {
  if (positoion < 3) return 1;
  return fibRec(positoion - 1) + fibRec(positoion - 2);
}
console.log(fibRec(10));


const fibonacciTail = (n, current = 0, next = 1) => {
  debugger
  if (n === 0) return current;
  if (n === 1) return next;
  
  // Хвостовой вызов: рекурсия идет самым последним действием
  return fibonacciTail(n - 1, next, current + next);
};

console.log(fibonacciTail(500));
// Send email

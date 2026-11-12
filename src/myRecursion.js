"use strict";

// f(5) = 1*2*3*4*5
function factorial(num) {
  if (num < 1) return 1;
  return num * factorial(num - 1);
}

console.log("factorial(8) :>> ", factorial(8));

// f(7) = 1 + 1 + 2 + 3 + 5 + 8 + 13 + (n[-1]+ n[-2])
function fibonacci(num) {
  if (num < 3) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("fibonacci(20) :>> ", fibonacci(20));

// Дан массив, который может содержать числа и другие вложенные массивы любой глубины. Напишите функцию deepArraySum(arr), которая посчитает сумму всех чисел.
// • Пример: deepArraySum([1, [2, [3, 4]], 5]) вернет 15.

function deepArraySum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    Array.isArray(arr[i]) ? (res += deepArraySum(arr[i])) : (res += arr[i]);
  }
  return res;
}

const arrayForSum = [1, [2, [3, 4]], 5, [44, 34, [[2, 6], 7, 90]]];
console.log("deepArraySum(arrayForSum) :>> ", deepArraySum(arrayForSum));

// Глубокая заморозка объекта (Deep Freeze)
// Напишите рекурсивную функцию deepFreeze(obj), которая
// заморозит сам объект и абсолютно все вложенные в него объекты и массивы.

function deepFreeze(obj) {
  if (typeof obj !== "object" || obj === null) return;
  Object.freeze(obj);
  for (const value of Object.values(obj)) deepFreeze(value);
}

const user = {
  name: "Vasyl",
  lastName: "Popov",
  age: 44,
  books: ["Rozy", "Skazki", "Litveche"],
  eny: {
    wei: 88,
    height: 148,
  },
  aducation: {
    higer: { zap: ["ZNU", "ZKPU"], kyiv: ["KPU", "KKTU"] },
    secondary: { scool: 44 },
  },
};
deepFreeze(user);
// user.aducation.higer.kyiv = '' // Cannot assign to read only property 'kyiv'

const bracketSeq = (n, inn = n) => n <= 1 ? `(${inn})` : `(${bracketSeq(n - 1, inn)})`;

console.log(bracketSeq(8));
console.log(bracketSeq(8, "Hi!"));

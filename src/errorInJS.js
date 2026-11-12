"use strict";

const a = 19;
console.log("a :>> ", a);
try {
  const c = a + b;
} catch (error) {
  console.error(`Произошла ошибка:
    name; ${error.name},
    message: ${error.message},
    stack: ${error.stack}.`);
} finally {
  console.log("Hello!");
}

function factorial(num) {
  switch (true) {
    case num === 0:
      return 1;
    case typeof num !== "number":
      throw new TypeError("num must be a number");
    case !Number.isInteger(num):
      throw new RangeError(`num must be integer`);
    case !Number.isSafeInteger(num):
      throw new RangeError(`num must be a ...`);
    case num < 0:
      throw new TypeError("num must be a positive");
    default:
      return num * factorial(num - 1);
  }
}
console.log("factorial(5) :>> ", factorial(5));

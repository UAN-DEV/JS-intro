"use strict";

// Operators
let a = 20,
  b = 30;

// a = a + 2;
// a += 2;

// a /= 2;
// a -= 5;
// a %= 3;

// console.log("a :>> ", a);

// // b = b + 1

// b += 1;

// b++;
// b--;

// ++b;
// --b;

// console.log("b :>> ", b);
// console.log("50- --b :>> ", 50 - --b);
// console.log("b :>> ", b);

// Op && and ||

let ms = 60,
  kms = 50;
let myRate = 55;

// if (myRate >= kms && myRate < ms) {
//   console.log("I am a kms");
// } else if (myRate >= ms) {
//   console.log("I am a ms");
// } else {
//   console.log("I am a just sportsman" );
// }

let result = myRate <= kms || myRate >= ms || "I am a just sportsman";
result = null && "I am a just sportsman";

console.log('"Op && and ||":=>>  result : ', result);

// Op ?? нулевого слияния

let c = NaN;

console.log('"Op ??":=>> c || 10 : ', c || 10);
console.log('"Op ??":=>> c ?? 10 : ', c ?? 10);

// Op ? : тернарный

a > b ? console.log("a>b") : console.log("a<=b");

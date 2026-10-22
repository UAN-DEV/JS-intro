"use strict";

// // Operators
// let a = 20,
//   b = 30;

// // a = a + 2;
// // a += 2;

// // a /= 2;
// // a -= 5;
// // a %= 3;

// // console.log("a :>> ", a);

// // // b = b + 1

// // b += 1;

// // b++;
// // b--;

// // ++b;
// // --b;

// // console.log("b :>> ", b);
// // console.log("50- --b :>> ", 50 - --b);
// // console.log("b :>> ", b);

// // Op && and ||

// let ms = 60,
//   kms = 50;
// let myRate = 55;

// // if (myRate >= kms && myRate < ms) {
// //   console.log("I am a kms");
// // } else if (myRate >= ms) {
// //   console.log("I am a ms");
// // } else {
// //   console.log("I am a just sportsman" );
// // }

// let result = myRate <= kms || myRate >= ms || "I am a just sportsman";
// result = null && "I am a just sportsman";

// console.log('"Op && and ||":=>>  result : ', result);

// // Op ?? нулевого слияния

// let c = NaN;

// console.log('"Op ??":=>> c || 10 : ', c || 10);
// console.log('"Op ??":=>> c ?? 10 : ', c ?? 10);

// // Op ? : тернарный

// a > b ? console.log("a>b") : console.log("a<=b");

// // Loops: while, do-while, for

// //while
// let count = 0;

// while (count < 10) {
//   console.log("while-- :>> ", count++);
// }

// // do-while
// count = 12;
// do {
//   console.log("do-while-- :>> ", count++);
// } while (count < 10);

// // for
// for (let i = 1; i++ < 10; ) {
//   console.log("for :>> ", i * 2);
// }

// let j = 1
// for (;j++<10;){
//   console.log("for :>> ", j * 2);

// }

//  j = 1
// for (;;){
//   j++<10?console.log("for :>> ", j * 2) : console.log("for :>> ", j * 2)
//   break
// }

//  Multiply table с меткой

outer: for (let i = 1; i++ < 10; ) {
  innter: for (let j = 1; j++ < 10; ) {
    if (i === 5) continue outer;
    if (j === 5) continue innter;
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

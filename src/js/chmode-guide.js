"use strict";

// 1 variant (with switch)
// let numRole = Number(prompt("Input number from 0 to 7"));

// switch (numRole) {
//   case 0:
//     console.log("Your does not have read or write, or execute");
//     break;
//   case 1:
//     console.log("You have rights to: execute");
//     break;
//   case 2:
//     console.log("You have rights to: write");
//     break;
//   case 3:
//     console.log("You have rights to: write and execute");
//     break;
//   case 4:
//     console.log("You have rights to: read");
//     break;
//   case 5:
//     console.log("You have rights to: read and execute");
//     break;
//   case 6:
//     console.log("You have rights to: read and write");
//     break;
//   case 7:
//     console.log("You have rights to: read, write and execute");
//     break;

//   default:
//     console.log("You entered an invalid value");
// }
// ****************************************************************

// 2 variant (without switch)
// let numRole = Number(prompt("Input number from 0 to 7"));

// if (numRole > 0 && numRole <= 7) {
//   const arrInRole = numRole.toString(2).split("").toReversed();

//   const arrRole = ["execute", "write", "read"]
//     .filter((item, index) => arrInRole[index] === "1")
//     .toReversed();

//   console.log(
//     `You have rights to: ${arrRole[0]} ${arrRole.length == 3 ? `, ${arrRole[1]} and ${arrRole[2]}` : arrRole.length == 2 ? ` and ${arrRole[1]}` : ``}`,
//   );
// } else {
//   console.log(
//     `${numRole === 0 ? `Your does not have read or write, or execute` : `You entered an invalid value`}`,
//   );
// }
// ****************************************************************

// 3 variant
// let numRole = Number(prompt("Input number from 0 to 7"));

// const arrInRole = numRole.toString(2).split("").toReversed();
// const arrRole = ["execute", "write", "read"]
//   .filter((item, index) => arrInRole[index] === "1")
//   .toReversed();
// switch (arrRole.length) {
//   case 1:
//     console.log(`You have rights to: ${arrRole[0]}`);
//     break;
//   case 2:
//     console.log(`You have rights to: ${arrRole[0]} and ${arrRole[1]}`);
//     break;
//   case 3:
//     console.log(
//       `You have rights to: ${arrRole[0]} , ${arrRole[1]} and ${arrRole[2]}`,
//     );
//     break;
//   default:
//     console.log("Yadsfasdfasdfasdfte");
// }
// ****************************************************************

// 4 variant (without switch)
// let numRole = Number(prompt("Input number from 0 to 7"));
// let message
// if (numRole > 0 && numRole <= 7) {
//   message = ["execute", "write", "read"].filter(
//     (item, index) => (numRole >> index) & 1,
//   ).join(' ');

// } else {
//      message = numRole === 0 ? `Your does not have read or write, or execute` : `You entered an invalid value`}
// console.log(`You have rights to: ${message}`)

// 5 variant (without switch)
// let numRole = Number(prompt("Input number from 0 to 7"));

// if (numRole > 0 && numRole <= 7) {
//   let arrRole = ["execute", "write", "read"]
//     .filter((item, index) => (numRole >> index) & 1)
//     .toReversed();

//   let lastRole = arrRole.pop();
//   let restRole = arrRole.join(", ");

//   console.log(
//     `You have rights to: ${restRole ? `${restRole} and ${lastRole}` : lastRole}`,
//   );
// } else {
//   console.log(
//     `${numRole === 0 ? `Your does not have read or write, or execute` : `You entered an invalid value`}`,
//   );
// }

// 6 variant (with switch)
// let numRole = Number(prompt("Input number from 0 to 7"));

// switch (true) {
//   case numRole > 0 && numRole <= 7:
//     console.log(
//       `You have rights to: ${(numRole >> 2) & 1 ? "read" : ""} ${(numRole >> 1) & 1 ? "write" : ""} ${(numRole >> 0) & 1 ? "execute" : ""}`,
//     );
//     break;
//   case numRole === 0:
//     console.log("Your does not have read or write, or execute");
//     break;
//   default:
//     console.log("You entered an invalid value");
// }

// 7 variant (with if-else)
// if (numRole > 0 && numRole <= 7) {
//   console.log(
//     `You have rights to: ${(numRole >> 2) & 1 ? "read" : ""} ${(numRole >> 1) & 1 ? "write" : ""} ${(numRole >> 0) & 1 ? "execute" : ""}`,
//   );
// } else {
//   console.log(
//     numRole === 0
//       ? "Your does not have read or write, or execute"
//       : "You entered an invalid value",
//   );
// }

// 8 variant (with switch)
let numRole = Number(prompt("Input number from 0 to 7"));
let message;
switch (true) {
  case numRole > 0 && numRole <= 7:
   let arrRole = ["execute", "write", "read"]
    .filter((item, index) => (numRole >> index) & 1)
    .toReversed();

    let lastRole = arrRole.pop();
    let restRole = arrRole.join(", ");

    console.log(
      `You have rights to: ${restRole ? `${restRole} and ${lastRole}` : lastRole}`,
    );
    break;
  case numRole === 0:
    console.log("Your does not have read or write, or execute");
    break;
  default:
    console.log("You entered an invalid value");
}

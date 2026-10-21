"use strict";

let numRole = Number(prompt("Input number from 0 to 7"));

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

const arrInRole = numRole.toString(2).split("").toReversed();
if (numRole >= 0 && numRole <= 7) {
  const arrRole = ["execute", "write", "read"]
    .filter((item, index) => arrInRole[index] === "1")
    .toReversed();

  switch (arrRole.length) {
    case 1:
      console.log(`You have rights to: ${arrRole[0]}`);
      break;
    case 2:
      console.log(`You have rights to: ${arrRole[0]} and ${arrRole[1]}`);
      break;
    case 3:
      console.log(
        `You have rights to: ${arrRole[0]} , ${arrRole[1]} and ${arrRole[2]}`,
      );
      break;
    default:
      console.log("Your does not have read or write, or execute");
  }
} else {
  console.log("You entered an invalid value");
}

"use strict";

function logger({
  name: firstName = "Ivan",
  lastName = "Ivanov",
  age = 34,
  books: [firstBook, , lastBook] = ["JavaScript", "C++", "Java"],
  eny: { wei: weight = 95, height = 188 } = {},
  aducation: {
    higer: {
      zap: [firstHiger, lastHiger] = ["ZITRE", "ZMOTR"],
      kyiv: [, firstKyiv] = ["KyIVE", "KLOP"],
    } = {},
    secondary: { scool = "454" } = {},
  } = {},
} = {}) {
  [
    firstName,
    lastName,
    age,
    firstBook,
    lastBook,
    weight,
    height,
    firstHiger,
    lastHiger,
    firstKyiv,
    scool,
  ].forEach((prop) => console.log(prop));
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

logger(user);
console.log("=====================");
logger();

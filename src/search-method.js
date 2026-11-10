"use strict";

// function Player(firstName, lastName, foreHand, backHand, age, rate, city) {
//   ((this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.foreHand = foreHand),
//     (this.backHand = backHand),
//     (this.age = age),
//     (this.rate = rate),
//     (this.city = city));
// }
// const maLong = new Player(
//   "Ma",
//   "Long",
//   "Butterfly Tenergy 19",
//   "Donic Acuda S1",
//   45,
//   40,
//   "Dnipro",
// );
// const xuXin = new Player(
//   "Xu",
//   "Xin",
//   "Butterfly Tenergy 05",
//   "Stiga Calibra",
//   30,
//   38,
//   "Kiev",
// );
// const kokiNiva = new Player(
//   "Koki",
//   "Niva",
//   "DHS Huricane",
//   "TSP",
//   25,
//   35,
//   "Odessa",
// );
// const players = [maLong, xuXin, kokiNiva];

// function getProps(limAge) {
//   if (this.age > limAge) {
//     return console.log("This player if too old");
//   }
//   for (const key in this) {
//     console.log(`${key} = ${this[key]}`);
//   }
// }

// const getPropsWithThis = getProps.bind(maLong, 35);
// const limAge = 40;

// for (const player of players) {
//   getProps.call(player, limAge);
//   console.log("====================");
// }

// getPropsWithThis()
let a = 3;
const arr1 = [1, 2, , a, 4, 12];
// arr1.forEach((el,i)=>console.log(el, i))
arr1.forEach((el, i, arr1) => (arr1[i] = el * 5));
// arr1.forEach((el,i)=>console.log(el, i))

// Own implementation of forEach

function myForEach(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== undefined) callback.call(thisArg, arr[i], i, arr);
}

myForEach(arr1, (el, i) => console.log(el, i));

// find, findIndex

const arr2 = ["Donic", "Stiga", "DHS", "Xiom", "TSP"];

console.log(arr2.find((el) => el === "DHS"));

console.log(arr2.find((el, i, arr2) => arr2[i + 1] === "DHS"));

console.log(arr2.findIndex((el) => el === "DHS"));
console.log(arr2.findIndex((el) => el === "DHs"));
console.log(arr1.findIndex((el) => el % 2 === 0));
console.log(arr1.findLastIndex((el) => el % 2 === 1));

// map

const strIntArr = ["1", "5", "10", "adfs"];
const parseToInt = (item) => parseInt(item) * 10;
const intArr = strIntArr.map(parseToInt);
console.log(intArr);

// Own implementation map

function myMap(arr, callback, thisArg) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback.call(thisArg, arr[i], i, arr));
  }
  return result;
}

console.log(myMap(strIntArr, parseToInt));

// Own implementation some and every
const arr3 = [2, 5, 9, 12, 18];
const arr4 = [2, 6, 8, 12, 18];

console.log(arr3.some((el) => el % 2 !== 0));
console.log([].some((el) => el % 2 !== 0));

console.log(arr3.every((el) => el % 2 === 0));
console.log(arr4.every((el) => el % 2 === 0));
console.log([].every((el) => el % 2 === 0));

function mySome(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++)
    if (callback.call(thisArg, arr[i], i, arr)) return true;
  return false;
}

console.log(mySome(arr3, (el) => el % 2 !== 0));
console.log(mySome([], (el) => el % 2 !== 0));

function myEvery(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++)
    if (!callback.call(thisArg, arr[i], i, arr)) return false;
  return true;
}
console.log(myEvery(arr3, (el) => el % 2 === 0));
console.log(myEvery(arr4, (el) => el % 2 === 0));
console.log(myEvery([], (el) => el % 2 === 0));

// reduce() and reduceRight

const emptyArr = [];

console.log(emptyArr.reduce((a, b) => a + b, 100));

const friends = [
  { name: "Ann", books: ["HP", "Phyton"], age: 20 },
  { name: "Jhon", books: ["JS", "Hibernate"], age: 25 },
  { name: "Bill", books: ["Java", "SQL"], age: 30 },
];

const allBooks = friends.reduce((prev, curr) => [...prev, ...curr.books], []);
console.log(allBooks);

// Own realisation reduce

const myReduce = (arr, callback, startValue) => {
  let result;
  if (startValue) {
    result = startValue;
    for (let i = 0; i < arr.length; i++) {
      result = callback(result, arr[i], i, arr);
    }
  } else {
    result = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      result = callback(result, arr[i+1], i, arr);
    }
  }
  return result
};

const arrArrs = [
  [1,2],
  [3,4],
  [5,6],
]
console.log(myReduce(arrArrs, (a,b)=>a.concat(b)))
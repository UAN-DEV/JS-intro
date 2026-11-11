"use strict";

// __proto__ , prototype

// const animal = {
//   type: "common",
//   limbAmount: 4,
//   move() {
//     console.log("I can some way");
//   },
//   eat() {
//     console.log("I can eat anythng");
//   },
// };

// const mammal = {
//   type: "mammal",
//   eat() {
//     console.log("I eate milk My chilhood");
//   },
// };

// const cat = {
//   name: "cat",
//   maxWeight: 30,
//   maxAge: 20,
//   move() {
//     console.log("I can run");
//   },
// };

// mammal.__proto__ = animal;
// cat.__proto__ = mammal;

// console.log(mammal.limbAmount);
// cat.eat();
// cat.move();
// console.log(cat.type);

// const sonya = Object.create(cat, {
//   name: {
//     value: "Sonya",
//     enumerable: true,
//   },
// });

// console.log(sonya)

// function Country(title = "Ukrain", capital = "Kiev") {
//   this.title = title;
//   this.capital = capital;
//   // this.getInfo = function () {
//   //   return `Capital is ${this.capital}`;
//   // };
// }

// Country.prototype.getInfo = function () {
//     return `Capital is ${this.capital}`;
//   };
// const ukreine = new Country();
// const usa = new Country("USA", "Washington");

// console.log(ukreine.getInfo());
// console.log(usa.getInfo());

// console.log(ukreine.getInfo === usa.getInfo)

// console.log(ukreine)

// console.log(usa instanceof Array)
// console.log(usa instanceof Country)
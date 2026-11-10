"use strict";

function Player(firstName, lastName, foreHand, backHand, age, rate, city) {
  ((this.firstName = firstName),
    (this.lastName = lastName),
    (this.foreHand = foreHand),
    (this.backHand = backHand),
    (this.age = age),
    (this.rate = rate),
    (this.city = city));
}
const maLong = new Player(
  "Ma",
  "Long",
  "Butterfly Tenergy 19",
  "Donic Acuda S1",
  45,
  40,
  "Dnipro",
);
const xuXin = new Player(
  "Xu",
  "Xin",
  "Butterfly Tenergy 05",
  "Stiga Calibra",
  30,
  38,
  "Kiev",
);
const kokiNiva = new Player(
  "Koki",
  "Niva",
  "DHS Huricane",
  "TSP",
  25,
  35,
  "Odessa",
);
const players = [maLong, xuXin, kokiNiva];

function getProps(limAge) {
  if (this.age > limAge) {
    return console.log("This player if too old");
  }
  for (const key in this) {
    console.log(`${key} = ${this[key]}`);
  }
}

const getPropsWithThis = getProps.bind(maLong, 35);
const limAge = 40;

for (const player of players) {
  getProps.call(player, limAge);
  console.log("====================");
}

getPropsWithThis()
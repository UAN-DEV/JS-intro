"use strict";

const key = Symbol("key");
console.log(key.description);
console.log(key.toString());
const option = {
  url: "http://some.address.com",
  [key]: "paoieugj;zlkcjv0pa9eirhnyaj;zldkcj",
};

for (const key in option) {
  console.log(key);
}

// symbol для генерации уникальных значений

const THEMES = {
  LIGHT: Symbol("light"),
  DARK: Symbol("dark"),
};

const theme = THEMES.DARK;

switch (theme) {
  case THEMES.DARK:
    console.log("THEMES.DARK :>> ", THEMES.DARK);
    break;
  case THEMES.LIGHT:
    console.log("THEMES.LIGHT :>> ", THEMES.LIGHT);
    break;
  default:
    console.log("unexpected value");
}

// Применение Symbol.iterator

// 1 for...of

// 2 Деструктуризация коллекций
const [first, second] = [1, 2];
// добавлено для объектов (нет итератора), как исключение!
const book = {
  autor: { firstName: "Test", lastName: "Testovich" },
  price: 128,
};
const {
  autor: { firstName: name, lastName },
  price,
} = book;

// 3 spred + rest операторы ...
const arr = [1, 2, 3];
const arrCopy = [...arr];
  // 3.1 добавлено для объектов (нет итератора), как исключение!
const bookCopy = { ...book };

  // 3.2 Передача элементов массива в функцию
function sum() {
  return [...arguments].reduce((accum, item) => accum + item);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));

const arr1 = [1, 2, 3, 4, 5, 6];
console.log(sum(...arr1));

  // 3.3 Слияние объектов в один
const data1 = { firstName: "Ivo", lastName: "Ivovych" };
const data2 = { isMale: true, age: 20 };
let user1 = { ...data1, ...data2 };
console.log(user1);

user1 = { ...user1, firstName: "Ivonga" };
console.log(user1);

  // 3.4 Задание дефолтных значений
function sendData({ data, options: { host:lHost = "localhost", port = 5000 }={} } = {}) {
  console.log(data, lHost, port);
}
sendData({
  data: "user information",
  // options: { host: "127.0.0.1", port: 3000 },
});

// 4. Array.from() - создание массива из псевдомассива или итерируемой коллекции
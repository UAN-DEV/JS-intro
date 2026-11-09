"use strict";

// Методы объекта

const user = {
  firstName: "Test",
  lastName: "Testovech",
  ahe: 25,
  password: "qwerty",
  // Методы
  //   getFullname: function () {
  //     // контекст - ссылка на объект, для которого вызван метод
  //     console.log(this === user);
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  getFullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  changePassword: (newPass) => (user.password = newPass),
};

const userFullname = user.getFullname();
console.log(userFullname);
console.log(user.changePassword("Qoo-Qoo"));

// Перебор объекта

for (let key in user) {
  console.log(`${key} :>> ${user[key]}`);
}

const ptoperty = "lastName";
console.log(user[ptoperty]); // вычисляемое значение

// просмотп объектов - console.dir()
typeof function () {}; // --> fucntion
console.log({});
console.dir(function () {});

// Вложенные объекты

const human = {
  name: "Iavan",
  physParam: {
    heigth: 1.95,
    weight: 110,
  },
};
console.log("human :>> ", human);
console.dir(human);
console.log(human.physParam.heigth);

// Функция-конструктор
console.log("Функция-конструктор");

// class User {
//     constructor(firstName, lastName, age, password) {
//         // this = {}; - создаётся под капотом
//         this.name = firstName;
//         this.surname = lastName;
//         this.age = age;
//         this.password = password;
//         //   return this - вызывается под капотом
//     }
// }

function User(firstName, lastName, age, password) {
  // this = {}; - создаётся под капотом
  this.name = firstName;
  this.surname = lastName;
  this.age = age;
  this.password = password;
  //   this.makeOlder = function (){this.age++}
  //   return this - вызывается под капотом
}

// Статические свойства и методы:
User.AVG = 85;

// Методы прототипа instance:
User.prototype.makeOlder = function () {
  this.age++;
};

const user1 = new User("Test", "Testovich", 20, "qwerty");
console.log(user1.age);

const user2 = new User("Test2", "Testovich2", 30, "131456");
console.log(user2);

user1.makeOlder();
console.log(user1.age);
console.log(user2);
console.log(user1.age);
user1.makeOlder();
console.log(user1.age);
user1.makeOlder();
console.log(user1.age);
user1.makeOlder();
console.log(user1.age);
console.log(user2.age);

// function User(name) {
//   this.name = name;
// }

// Записываем метод в прототип ОДИН раз
User.prototype.sayHi = function () {
  console.log(`Привет, я ${this.name}`);
};

const userA = new User("Алексей");
const userB = new User("Мария");

userA.sayHi(); // "Привет, я Алексей"
// userA и userB используют ОДНУ И ТУ ЖЕ функцию из прототипа!

// Проверка типа объекта
console.log(user1.name);
console.log(Object.getOwnPropertyDescriptor(user1, "name"));
console.log(Object.getOwnPropertyDescriptors(user1));

// Добавление свойства с дискрирторами
Object.defineProperty(user1, "weight", { value: 120, configurable: true });

for (const key in user1) {
  console.log(key);
}
console.log(user1.weight);
delete user1.weight;
console.log(user1.weight);

// Добавление нескольких свойств с дискрирторами
Object.defineProperties(user1, {
  weight: {
    value: 120,
    configurable: true,
    writable: true,
    enumerable: true,
  },
  size: {
    value: 50,
    configurable: true,
    writable: false, //по умолчанию
    enumerable: true,
  },
});

// Глобальное запечатывание объекта
Object.preventExtensions(user1) // запрет добавления свойств



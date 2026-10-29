"use strict";

// Методы объекта

const user = {
  firstName: "Test",
  lastName: "Testovech",
  ahe: 25,
  password: "qwerty",
  // Методы
  getFullname: function () {
    // контекст - ссылка на объект, для которого вызван метод
    console.log(this === user);
    return `${this.firstName} ${this.lastName}`;
  },
};

const userFullname = user.getFullname();
console.log(userFullname);

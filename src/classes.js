"use strict";

function User1(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}
// в прототипе - для экземпляров
User1.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

// статический метод - для функции котструктора
User1.isUser = function (obj) {
  return obj instanceof User;
};

const user1 = new User1("Jack", "Wilsher", 23, true, "test@test.com", true);
console.log(user1);

// классовий подход

class User {
  #age;
  constructor(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.#age = age;
    this._isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
  }
  set age(value) {
    if (typeof value !== "number" || value < 0 || value > 130) {
      throw new RangeError("Указан некорректный возраст");
    }
    this.#age = value;
  }
  get age() {
    return this.#age;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set isMale(value) {
    if (typeof value !== "boolean") {
      throw new RangeError("Значение isMale должно быть true или false");
    }
    this._isMale = value;
  }
  get isMale() {
    return this._isMale;
  }

  static isUser(obj) {
    return obj instanceof User;
  }
}

const user2 = new User("Jack", "Wilsher", -23, true, "test@test.com", true);

console.log((user2.email));
console.log((user2.age));
try {
  user2.age = 45;
  console.log((user2.age = 45));
  console.log((user2.age = 145));
} catch (error) {
  console.log(error)
}

class Telephone {
  constructor(brand, model, color, price, yearOfManufacture){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.yearOfManufacture = yearOfManufacture;
  }
  calcPhoneAge(){
    return new Date().getFullYear() - this.yearOfManufacture
  }
}

const telephone1 = new Telephone('Samsung', 'A-55', 'blue', 18670, 2023)
console.log(telephone1.calcPhoneAge())
Object.keys(telephone1).forEach(key=>console.log(`key{${key}}: ${telephone1[key]}`))
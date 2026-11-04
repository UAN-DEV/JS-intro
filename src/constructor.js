// "use strict";

function Car(brand, model, transmision = "auto", color = "black") {
  this.brand = brand;
  this.model = model;
  this.transmision = transmision;
  this.color = color;
  this.run = function () {
    return `Run and drive on ${this.brand} ${this.model}`;
  };
}

const bmw = new Car("BMW", "X5", "auto", "black");
const toyota = new Car("Toyota", "Camry");

console.log("bmw :>> ", bmw);
console.log("toyota :>> ", toyota);

console.log(Car.toString(0))
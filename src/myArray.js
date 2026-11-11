"use strict";

function MyArray(...args) {
  this.length = 0;
  for (let i = 0; i < args.length; i++) this.push(args[i]);
}

MyArray.prototype = new MyArrayProto();

function MyArrayProto() {
  this.isMyArray = function (obg) {
    return obg instanceof MyArray;
  };
  this.push = function () {
    if (arguments) {
      for (let i = 0; i < arguments.length; i++)
        this[this.length++] = arguments[i];
    }
    return this.length;
  };
  this.pop = function () {
    if (!this.length) return;
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) callback(this[i], i, this);
  };
  this.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) return true;
    }
    return false;
  };
  this.every = function (callback) {
    for (let i = 0; i < this.length; i++)
      if (!callback(this[i], i, this)) return false;
    return true;
  };
  this.map = function (callback) {
    const res = new MyArray();
    for (let i = 0; i < this.length; i++) {
      this.push(callback(this[i], i, this));
    }
    return res;
  };
  this.concat = function (...args) {
    const res = new MyArray();
    for (let i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
        res.push(...args[i]);
      } else if (this.isMyArray(args[i])) {
        for (let j = 0; j < args[i].length; j++) res.push(args[i][j]);
      } else {
        res.push(args[i]);
      }
    }
    return res;
  };
  this.reverse = function () {
    for (let i = 0; i < this.length / 2; i++) {
      [this[i], this[this.length - 1 - i]] = [
        this[this.length - 1 - i],
        this[i],
      ];
    }
    return this;
  };
}
const myArray = new MyArray(10);
const myArray1 = new MyArray(100, 500, 900, 1000);
const myArr1 = [2, 7, 90];
const myArray2 = myArray.concat(1, 3, true, myArr1, myArray1);
console.log(myArray2);
console.log(myArray2.reverse());
// console.log(myArray.reverse());

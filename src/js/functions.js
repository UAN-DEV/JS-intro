"use strict";

// 1. Function Declaration
function sum(a, b) {
  // console.log(a + b);
  return a + b;
}

console.log(sum(5, 7));

// 2. Function Expression

const showDivide = function (a, b) {
  return a / b;
};

console.log(showDivide(48, 8));

// 3. Arrow function

const function3 = (par) => {
  console.log(par);
  return par * 2;
};

const function4 = (par1, par2) => par1 ** par2;

// Change global var as param - побочный эффект!!!

let brand = "Stiga";
let ttBlade = "Donic";

function changeArg(brand = "TSP", ttBlade = "Xiom") {
  brand = "Butterfly";
  ttBlade = "DNS";
  console.log("brand :>> ", brand);
  console.log("ttBlade :>> ", ttBlade);
  return `${brand} + ${ttBlade}`;
}
console.log("brand :>> ", brand);
console.log("ttBlade :>> ", ttBlade);

changeArg();
console.log("brand :>> ", brand);
console.log("ttBlade :>> ", ttBlade);

// Calculator
console.log("// Calculator");

const num1 = Number(prompt('Enter first nomber:'))
const num2 = Number(prompt('Enter second nomber:'))
const mathOperation = prompt('Enter mathimatic operation:')

const summ = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mul = (a, b) => a * b;

const calculator = (num1, num2, mathOperation) => {
  if (Number.isNaN(num1 - num2)) {
    return "Enter number, please!";
  }
  let operation;
  switch (mathOperation) {
    case "+": {
      operation = sum;
      break;
    }
    case "-": {
      operation = sub;
      break;
    }
    case "/": {
      operation = div;
      break;
    }
    case "*": {
      operation = mul;
      break;
    }
    default:
      return "Unknow math operation";
  }

  return operation(num1, num2);
};

const result = calculator(num1, num2, mathOperation)
alert(result)
// console.log(calculator(num1, num2, mathOperation));

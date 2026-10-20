// alert("Hello, JS");

console.log("Hi from console.log!!!");
console.log("Snippet");

/* 
Многорядочный
 комментарий
*/

// Переменные

let userName = "Test";
console.log("UserName :>> ", userName);

userName = 1;
console.log("userName :>> ", userName);

const constValue = "Constant value";
console.log("constValue :>> ", constValue);

/*
var anotherValue = 'string' // старый стиль
*/

//  Типы данных
const stringVar1 = "string1";
const stringVar2 = `string2`;
console.log("string :>> ", stringVar1, stringVar2);
console.log("unicode :>> \u{1F60D} "); // uniCode

const number1 = 1;
const number2 = 0.5;
const number3 = 4e15;
console.log("nomber :>> ", number1, number2, number3);

const nan1 = NaN;
console.log("nan :>> ", nan1);

const infin = 5 / 0;
console.log("infinity :>> ", infin);

const bigint = 22222323232n;
console.log("bigint :>> ", bigint);

const bool1 = false;
const bool2 = true;
console.log("boolean :>> ", bool1, bool2);

const null1 = null;
console.log("null :>> ", null1);

// const a1 = Number(prompt("Введите первое число:"));
// const a2 = Number(prompt("Введите второе число:"));

// const sum1 = String(a1 + a2);

// console.log("sum :>> ", sum1);
const op1 = Number(prompt("Введите первое число:"));
const op2 = +prompt("Введите второе число:");
const sum2 = op1 + op2;

console.log("sum2 :>> ", sum2.toFixed(4));


prompt("Введите первое число:") // запрос на ввод данных
alert('Hello!!!') // вывод сообщения
confirm('Ok or Cancel')  // запрос подтверждения
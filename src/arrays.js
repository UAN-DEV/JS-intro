"use strict";

const months = ["Jun", "July", "August"];

const ul = document.createElement("ul");

months.forEach((month) => {
  const li = document.createElement("li");
  li.textContent = month;
  ul.append(li);
});

document.body.append(ul);

for (const key in months){
  console.log(months[key])
}

for (const value of months){
  console.log(value)
}

console.log('...months :>> ', ...months);

// 
const arrMulty = [1,'two',3,[4,5,6],[7,[8,9,[10,'11',[12,13]]]]]
console.log(arrMulty.join())
console.log(arrMulty.join().split(','))
console.log(arrMulty.join().split(',').join(''))

const arrNums = [10,5,12,100,24,1000]
console.log(arrNums.sort((a,b)=>a-b))
console.log(arrNums.with(2,'two'))

for (const num of arrNums) console.log(num)
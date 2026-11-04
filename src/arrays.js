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
"use strict";
//1.
let array2 = [14, 150, "css", null, "javascript", 25];

let nums = array2.map((item) => {
  if (typeof item === "number") {
    return item ** 2;
  } else if (typeof item === "string") {
    return item.toUpperCase();
  }
  return item;
});

console.log(nums);

//2.
let info = "good day";

let result1 = info.slice(5, 9);
console.log(result1);
//3.

function printstring(str) {
  return str.length;
}
let resultstr = printstring("hello");
console.log(resultstr);

//4.

let userAnswer = prompt("საქართველოს დედაქალაქი");
let correctAnswer = "tbilisi";
let lowAnswer = userAnswer.toLowerCase();

if (lowAnswer == correctAnswer) {
  alert("სწორია");
} else {
  alert("არასწორია");
}

//5.

let fruits = ["apple", "mango", "avocado", "kiwi"];

fruits.splice(-2, 1, "strawberry");
console.log(fruits);

//6.
let numbers = [5, 25, 89, 120, 36];

numbers.push("javascript", "python");
numbers.unshift("html", "css");
numbers.pop();
numbers.shift();
console.log(numbers);

//7.

let fruitsarray = ["orange", "banana", "kiwi"];

console.log(fruitsarray);
let fruitslength = fruitsarray.length;
console.log(fruitslength);

fruitsarray.push("apple", "pineapple");
fruitsarray.unshift("watermelon");
console.log(fruitsarray);
let fruitslength2 = fruitsarray.length;
console.log(fruitslength2);

fruitsarray.splice(3, 0, "mango");
fruitsarray.pop();
fruitsarray.shift();
console.log(fruitsarray);

//8.
let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, "a", "b", "c");
console.log(array3);

//9.
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let resultarray5 = array5.map((el) => el / 3);
console.log(resultarray5);

//10.
let array7 = [15, 100, 25, 10, 36];

array7.splice(-2, 1);
console.log(array7);

//11.

//12.

let array1 = ["hello1", 14, 24, "hello2"];

let result = array1.filter((x) => typeof x == "number");
console.log(result);

//13.
let array4 = [1, 2, 3, 4, 5];
let sum = 0;
array4.forEach((item) => {
  sum += item;
});

console.log(sum);

//14.

let languages = ["html", "css", "javascript", "python", "php"];

let resultlanguages = languages.filter((x) => x.length > 3);
console.log(resultlanguages);

//15.

let words = ["Madrid", "rome", "Milan", "berlin"];

let resultwords = words.filter((x) => x.includes("M") || x.includes("m"));
console.log(resultwords);

//16.
let link = "https://google.com";

function checklink(link) {
  if (link.indexOf("https://") === -1) {
    console.log("არ მოიცავს");
  } else {
    console.log("მოიცავს");
  }
}

checklink(link);

//17.

let array6 = [-1, -2, -3, 4].some(function (item) {
  return item > 0;
});

console.log(array6);

//18.

let numStr = "12345";
let result01 = numStr.split("");
let sum01 = 0;
for (let i of numStr) {
  sum01 += Number(i);
}
console.log(sum01);

//19.

let reduceNum = [1, 4, 5, 7, 3];
let reduceSum = reduceNum.reduce((accumlator, currentvalue) => {
  return accumlator + currentvalue;
}, 0);

console.log(reduceSum);
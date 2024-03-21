"use strict";

//2.
let info = "good day";

let result1 = info.slice(5, 9);
console.log(result1);

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
//12.

let array1 = ["hello1", 14, 24, "hello2"];

let result = array1.filter((x) => typeof x == "number");
console.log(result);

//14.

let languages = ["html", "css", "javascript", "python", "php"];

let resultlanguages = languages.filter((x) => x.length > 3);
console.log(resultlanguages);

//15.

let words = ["Madrid", "rome", "Milan", "berlin"];

let resultwords = words.filter((x) => x.includes("M") || x.includes("m"));
console.log(resultwords);

//17.

let array6 = [-1, -2, -3, 4].some(function (item) {
  return item > 0;
});

console.log(array6);

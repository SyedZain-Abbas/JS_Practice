const prompt = require("prompt-sync")();
const baseValue = parseInt(prompt('Enter the base of a triangle: '));
const heightValue = parseInt(prompt('Enter the height of a triangle: '));


console.log(typeof(baseValue));
console.log(typeof(heightValue));
// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);
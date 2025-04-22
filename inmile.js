const prompt = require("prompt-sync")();
let kilometers = prompt('enter the value to change in kilometers to miles: ');
let factor = 0.621371;

let miles = kilometers*factor;

console.log('kilometers is equal to miles:' +miles);
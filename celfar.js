const prompt = require("prompt-sync")();
let celsius = prompt('enter the celsius degree to change in fahrenhiet: ');
let fahrenheit = (celsius*1.8)+32;
console.log("the change in celsius to fahrenheit:" +fahrenheit);
const prompt =  require("prompt-sync")();
const num1 = parseInt(prompt("Enter the value One :"));
const num2 = parseInt(prompt("Enter the value Two :"));


console.log(typeof(num1));
console.log(typeof(num2));

let x = parseFloat(num1 * num2);
console.log(typeof(x));
console.log(`the sum of float no is ${x}`);
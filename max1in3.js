const prompt = require("prompt-sync")()
let num1, num2, num3;
console.log('enter the number to compare max among given three')
num1 = prompt ('enter the first number: ')
num2 = prompt ('enter the second number: ')
num3 = prompt ('enter the third number: ')
console.log('the numbers are :' +num1,+num2,+num3)
let largest;
if(num1>=num2 && num1>=num3){
    largest = num1;
}
else if(num2>=num1 && num2>=num3){
    largest = num2;
}
else{
    largest = num3;
}

console.log('the largest among entered three no. is: ' +largest);
let num1 = 8;
let num2 = 3;

let x = num1;
    num1 = num2;
    num2 = x;
    x = null;
    console.log(typeof(null))
    console.log(`after ${num1} and ${num2}`);
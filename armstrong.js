const prompt = require("prompt-sync")();


let x = prompt();

let len = x.length;
console.log(len);

let y = x.toString()
console.log(y);
let num = y.split("")
console.log(num);
let sum = null;
for (const element of num) {
   
  sum += Math.pow(element,len)
  
}
  console.log(sum);
  if(sum == x){
   console.log("Armstrong");
  }
  else{
   console.log("Not a Armstrong");
  }

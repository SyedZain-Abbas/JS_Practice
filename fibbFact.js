

function fibbFact(num){
   if(num <= 1) return num;
  return fibbFact(num-2) + fibbFact(num-1);
    
}

let x = fibbFact(7);
console.log(x);
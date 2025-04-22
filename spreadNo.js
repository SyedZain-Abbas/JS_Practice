let x = "1205";

let y = x.toString();
console.log(typeof x);

//let val = y.split("");
//console.log(val);

let res = [...val];
console.log(res);

let newArr = res.map(myFunction)

function myFunction(value){
    return value;
}

console.log(newArr);
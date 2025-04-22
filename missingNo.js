let arr = [1, 4, 3, 2, 6, 5, 7, 10, 9]

let newArr = arr.sort((a,b) => a-b);
console.log(newArr);
let x = myFunction(newArr); 

function myFunction(arr){
    for( let i = 0; i <= arr.length; i++){
    if(arr[i] != [i+1]){
       return i+1;
    }
}}

console.log("The no is :", x);
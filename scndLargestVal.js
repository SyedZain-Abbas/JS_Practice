const arr = [2,6,43,67,5,9,7,98,67,72,98,56]

function secondLargest(arr){
  let x = arr.sort(function(a,b){
    return b-a;
  })

for(let i=0; i<x.length; i++){
    if(x[i]==x[i+1]){
    i+1;
}
else{
    return x[i+1];
}}
}

const largestNo = secondLargest(arr);
console.log(largestNo);
const arr = [a,e,r,e,q,e,t,a,t,u];
console.log(typeof(arr[0]));
function countElement(arr){

    const output = {};

    arr.map(d=>{
        output[d] = (output[d] || 0) +1;
    })
    return output;
}

console.log(countElement(arr));
const arr = [1,2,5,7,8,9,10];

for(let i=0; i<arr.length; i++){
    if(arr.indexOf(i) === -1){
        console.log(i);
    }
}
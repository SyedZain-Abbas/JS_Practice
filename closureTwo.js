
function createBase (x){
    return function addSix(y){
        console.log(x+y);
    }
}





let addSix = createBase(10);
addSix(12);
addSix(34);
function checkPrime(num){

    if(num < 1){
        console.log("no is prime") ;
    }
    else{
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                console.log("no is not a prime");
            }
            else{
                console.log("no is prime");
            }
        }
    }
}

checkPrime(8)
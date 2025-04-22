// Block Scope And setTimeout 

   
    for(var i=0; i<3; i++) {
    function xyz (i){
      setTimeout( () => {
      console.log(i);
    } , i*1000)}    
    xyz(i)  
}





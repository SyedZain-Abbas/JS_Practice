
var outerVar = "RoadsiderCoder";

function close () {
  var  variable = "zainAbbas";
  function xyz (xy) {
    console.log("The value inside is accessible to inner because of lexical scope", variable,xy,outerVar);
  }
  return xyz;
} 

var x = close();
x(67)

//console.log(typeof x());

// close()(); And pass the args to it also if needed
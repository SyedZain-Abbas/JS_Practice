// How to make a private Counter in Closure 

function counter() {
    var _counter = 0;

    function add (y){
        return _counter += y;
    }

    function retrieve () {
        return _counter;
    }

    return{
        add,
        retrieve,
    }
}

let x = counter()
x.add(8)
x.add(9)
console.log(x.retrieve());
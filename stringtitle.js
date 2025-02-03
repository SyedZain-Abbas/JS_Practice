let str = "syed zain abbas zaidi"

console.log(str.split(" "));

const strTitle = (data) => {

    const arr = data.split(" ")
    
    const x = arr.map((x,i)=>{
            console.log(x.charAt(0).toUpperCase() + x.slice(1));
    })

}

strTitle(str)
let multiply = (x,y)=>{
    console.log(x+y);
}


let print  = multiply.bind(this,2)
print(3)



let multiply1 = function(x){

    return function (y) {
     console.log(x*y);   
    }
}


let multiply2 = multiply1(2)
multiply2(6) 
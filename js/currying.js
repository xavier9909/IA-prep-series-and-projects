3.









let multiply = (x,y)=>{
    console.log(x+y);
}


let print  = multiply.bind(this,2)
console.log(print);
print(3)



let multiply1 = function(x){

    return function (y) {
     console.log(x*y);   
    }
}


let multiply2 = multiply1(2)
multiply2(6) 




function sum(a) {
    return function (b) {
       if(b) return sum(a+b)
        else return a
    }
    
}
console.log(sum(3)(4)());

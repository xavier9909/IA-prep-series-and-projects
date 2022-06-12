function sum(a) {
    return function (b) {
        if(b){
            return sum(a+b)
        }
        else {return a}
    }
    
}
console.log(sum(1)(2)(3)(4)());


let sum1 = a=>b=> b?sum(a+b):a

console.log(sum1(2)(3)(4)(5)());
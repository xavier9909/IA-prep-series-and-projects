function x(n){
    let y = 10
    return function(){
        return n+y
    }

}
let z = x(6)
console.log(z());
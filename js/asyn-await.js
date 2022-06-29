// let pp = ()=>{return new Promise(resolve=>{
//     setTimeout(()=>{
//         console.log("exec");
//     },3000)
// })}


// async function pp3 (){
//     let mm = "gfgfg"
//   let dd = await pp()
//        //  console.log(pp());
//  console.log(mm);
// }
// pp3()


function memoisedFibonacci(n, cache) {
    cache = cache || [1, 1]
    if (cache[n])
        return cache[n]
    return cache[n] = memoisedFibonacci(n - 1, cache) + 
    memoisedFibonacci(n - 2, cache);
}
console.log( memoisedFibonacci(50, ""));
function runProgram(input){
input=input.trim().split("\n")
let tc=+input[0]
let l=1
for(let i=0 ; i<tc ; i++){
    let n  = +input[l++]
    let arr2 = []
    for(let j=0 ; j<n ;  j++){
let arr=input[l++].trim()
arr2.push(arr)
    }
find(arr2,n);



}}
function find(arr2,n) {
     let obj = {}
   for(let k =0 ; k<n; k++){
    let key = arr2[k].split("").sort().join("")
    if(obj[key]== undefined){
        obj[key] = [arr2[k]]
    }
    else{
    obj[key].push(arr2[k])
    }
   }

   for(kk in obj){
    console.log(obj[kk].length);
    for(let tt = 0 ; tt<obj[kk].length; tt++){
        console.log(obj[kk][tt]);
    }
   }





    
}
if (process.env.USER === "sm798") {
  runProgram(`2
  6
  eat
  tea
  tan
  ate
  nat
  bat
  3
  abc
  abc
  def`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
function runProgram(input){
input=input.trim().split("\n")
let n=+input[0]
//let arr=input[1].trim().split(" ").map(Number)
const find=(n)=>{
    if( n==0){return 0}
if( n==1){return 1}

 let b = find(n-1) + find(n-2)
 return b
}
console.log(find(n));
    
}

if (process.env.USER === 'shubham') {
  runProgram(`4`);
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
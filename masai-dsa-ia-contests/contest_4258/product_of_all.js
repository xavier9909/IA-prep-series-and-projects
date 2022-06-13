function runProgram(input){
input=input.trim().split("\n")
let n=+input[0]
let arr=input[1].trim().split(" ").map(Number)

console.log(find(arr,n));
function find(arr,n) {
    return arr.reduce((a ,b)=> a*b)
    
}
    
}

if (process.env.USER === "shubham") {
  runProgram(`5
  3 5 2 9 4`);
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
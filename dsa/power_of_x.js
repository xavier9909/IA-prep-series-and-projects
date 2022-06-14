function runProgram(input){
input=input.trim().split("\n")
//let n=+input[0]
let [n,p]=input[0].trim().split(" ").map(Number)

console.log((find(n,p)));
    
}
function find(n,p) {
    if( p == 0){ 
        return 1}
   
   
    return (n*find(n, p-1)) 
    
}

if (process.env.USER === "shubham") {
  runProgram(`2 4`);
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
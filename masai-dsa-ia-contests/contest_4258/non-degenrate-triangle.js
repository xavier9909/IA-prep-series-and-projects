function runProgram(input){
input=input.trim().split("\n")
let n=+input[0]
for(let i = 1; i<=n ; i++){
let arr=input[i].trim().split(" ").map(Number)
console.log(find(arr));
function find(arr) {
    arr.sort((a,b)=> a-b)
    if(arr[0]+arr[1]>arr[2])
        return "Yes"
    return "No"
}
}
}

if (process.env.USER === "shubham") {
  runProgram(`4
  4 5 13
  7 1 8
  2 5 4
  2 2 2
  `);
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
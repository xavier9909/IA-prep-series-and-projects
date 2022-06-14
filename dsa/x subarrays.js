function runProgram(input){
input=input.trim().split("\n")
let tc=+input[0]
let l = 1
for(let i= 0 ; i<tc ; i++){
   let [n,k,x] = input[l++].trim().split(" ").map(Number)
   let arr=input[l++].trim().split(" ").map(Number)
   console.log(
    find(arr,n,k,x)
   );
}



    
}
function find(arr,n,k,x) {
    for(let j = 0 ; j<n ; j++){
        
    }
}

if (process.env.USER === "shubham") {
  runProgram(`1
  5 3 2
  1 3 2 5 1`);
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
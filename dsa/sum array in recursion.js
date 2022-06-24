function runProgram(input){
input=input.trim().split("\n")
let tc=+input[0]
let l =1;
for(let i  = 0 ; i<tc ; i++){
   let n= +input[l++]
   let arr = input[l++].trim().split(" ").map(Number)
   console.log(find(arr,n,0));
}
//let arr=input[1].trim().split(" ").map(Number)

function find(arr,n,i) {

    if(n== 0){
        return 0}

     return find(arr,n-1) + arr[n-1]   
    
}

    
}

if (process.env.USER === 'shubham') {
  runProgram(`3
  5
  6 3 8 2 -4
  5
  -10 -7 10 2 -2
  5
  -4 -5 6 -3 9`);
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
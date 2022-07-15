const find = (arr,n)=>{

}
function runProgram(input){
input=input.trim().split("\n")
let n=+input[0]
let arr2 = []
for(let k=1 ; k<=n;k++){
    let arr=input[k].trim().split(" ").map(Number)
        arr2.push(arr)
}
//
console.log(find(arr2,n));


    
}


if (process.env.USER === 'shubham') {
  runProgram(`4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16`);
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
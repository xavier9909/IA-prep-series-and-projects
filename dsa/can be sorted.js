function runProgram(input){
input=input.trim().split("\n")
let n=+input[0]
let arr=input[1].trim().split(" ").map(Number)
//let arr2  = arr

console.log(find(arr,n));
    
}
function find(arr,n) {
let i =0
    while(i<n){
          if(arr[i]>arr[i+1]){
            var a1 = arr.slice(i,n).reverse()
            var a2 = arr.slice(0,i)
            let  children = a2.concat(a1);
           // console.log(children);
         if(arr.sort((a,b)=>a-b).join("")==children.join("")){
            return "YES"
         }
            return "NO" //console.log(a1);
          }i++
    } return "YES"
}
if (process.env.USER === "shubham") {
  runProgram(`6
  1 4 3 2 7 9`);
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
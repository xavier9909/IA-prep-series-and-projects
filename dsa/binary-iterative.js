function runProgram(input){
input=input.trim().split("\n")
//let n=+input[0]
let [n,k]=input[0].trim().split(" ").map(Number)

let arr = input[1].trim().split(" ").map(Number)  
console.log(arr,k,n);
console.log(find(arr,n,k)); 

function find(arr,n,k) {
    let s = 0
    let end  = n-1

for(let i =0;s<=end;i++){
    let mid  = Math.floor(s+end/2)
console.log(mid);
    if(arr[mid]==k){
        return 1
    }
     else if(k<arr[mid]){
           s = 0
           end  = mid-1 
    }
    else {
        s = mid+1
        end = n
    }

}
return -1
}
}

if (process.env.USER === "shubham") {
  runProgram(`6 5
  11 34 5 4 21 0`);
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

function runProgram(input){
input=input.trim().split("\n")
//let n=+input[0]
let n=+input[0]

let arr = input[1].trim().split(" ").map(Number)

console.log(find(arr,n));
  function  find(arr,n){
   let l = 0
   let r = n-1
  // max = 10000000
   while(l<=r){
       let mid  = Math.floor(l+((r-l)/2))
       if(arr[mid]<arr[mid-1]){
        return arr[mid]
       }
       if(arr[l]<= arr[mid] && arr[mid]>arr[r]){
          l = mid+1
       }
       else{
         r = mid-1
       }

   }
return arr[l]
  }
    
    
}

if (process.env.USER === "shubham") {
  runProgram(`10
  4 6 7 9 10 -1 0 1 2 3`);
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
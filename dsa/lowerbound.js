function runProgram(input){
input=input.trim().split("\n")
//let n=+input[0]
let [n,k]=input[0].trim().split(" ").map(Number)
let arr = input[1].trim().split(" ").map(Number)
console.log(find(arr,n,k));

  function  find(arr,n,k){
      let l = 0
      let r = n-1
      let ans  = -1
      while(l<=r){
        let mid  = Math.floor((l+r)/2)

        if(arr[mid]==k){
            ans  = mid
            r = mid-1
        }
        else if(arr[mid]>k){
            r = mid -1
        }
        else {
            l = mid +1
        }
        
          }return ans
         
  }  ;
}

if (process.env.USER === "shubham") {
  runProgram(`10 7
  0 2 4 4 5 5 7 7 9 10`);
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
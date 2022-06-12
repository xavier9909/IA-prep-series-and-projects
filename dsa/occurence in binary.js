function runProgram(input){
input=input.trim().split("\n")
//let n=+input[0]
let [n,k]=input[0].trim().split(" ").map(Number)


let arr=input[1].trim().split(" ").map(Number)
let upper = find1(arr,n,k)
let lower  = find(arr,n,k)
console.log(upper,lower);
function find1(arr,n,k){
    let r = n-1
    let l = 0
    let ans  = -1
    while (l<=r) {
        let mid  = Math.floor((l+r)/2)
    
        if(arr[mid]>k){
            r = mid -1
            ans  = mid
        }
        else{
            l = mid+1
        }
        
    }
    return ans
    
    }
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
  runProgram(`10 22
  2 2 2 2 2 11 15 18 20 22`);
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
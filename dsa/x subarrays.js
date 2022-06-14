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
    let c= 0 
    for(let j = 0 ; j<n ; j++){
        let arr2 = arr.slice(j,(j+(x)))
        console.log(arr2);
        let arr3 = arr2.filter((a)=>a<=k)
        //console.log(arr3);
        if(arr3.length==x){
               c++
        }
    } return c
}

if (process.env.USER === "shubham") {
  runProgram(`1
  7 2 1
6 1 5 3 2 2 1`);
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
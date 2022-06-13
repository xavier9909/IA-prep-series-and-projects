function runProgram(input){
input=input.trim().split("\n")
let n=+input[0]
let arr=input[1].trim().split(" ").map(Number)

console.log(find(arr,n));
function find(array,n) { 
    let sum = 0
     for (let index = 0; index < array.length-1; index++) {
   

       let ad = (array[index]+array[index+1]);
       //console.log(ad);
        if(ad%2==0){
            sum++
        }
        
     }
    return sum
}
    
}

if (process.env.USER === "shubham") {
  runProgram(`10
  4 8 6 10 6 7 3 3 8 6`);
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
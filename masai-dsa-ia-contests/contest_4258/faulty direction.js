
function find(n,dir) {
    let x= 0
    let y = 0
    for(let i =0 ; i<n ; i++){
        if(dir[i]=="R"){
            x++
        } else if(dir[i]=="L"){
            x--
        } else if(dir[i]=="U"){
            y++
        } else {
            y--
        }
    }
    if(x==0&&y==0){
        return "Yes"
    }
    return "No"
    
}
function runProgram(input){
input=input.trim().split("\n")
let tc=+input[0];let l = 1
for(let i =0 ; i<tc ; i++){
    let n=+input[l++]  

let dir = input[l++].trim().split("")
console.log(find(n,dir));


}

    
}

if (process.env.USER === "shubham") {
  runProgram(`2
  5
  RLRUD
  4
  LRUD`);
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
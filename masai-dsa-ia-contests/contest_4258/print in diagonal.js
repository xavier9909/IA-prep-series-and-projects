function find(arr,n){
   let row  =0
   let col = 0
   let ans = []
   let up = true
  // console.log(arr);
   while(row<n && col <n){

       if(up){
        while(row>0 && col<n-1){
         ans.push(arr[row][col])
         row--
         col++
        }
       ans.push(arr[row][col])
        if(col==n-1){
            row++
        }
        else {
            col++
        }

   } else {
          while (row<n-1 && col>0) {
              ans.push(arr[row][col])
              row++
              col--
          }
         ans.push(arr[row][col])
          if(row==n-1){
            col++
        
          }
          else{
            row++
          }

   } 
   up=!up


}
return ans.join(" ")
}
function runProgram(input){
input=input.trim().split("\n")
let tc=+input[0]
let l = 1
let array= []
for(let i =0 ;  i<tc ; i++){
    let n=+input[l++] 
    for(let j=0 ; j<n ; j++){
        let arr=input[l++].trim().split(" ").map(Number)
        array.push(arr)
    }  
console.log(find(array,n));
array= []
}


    
}

if (process.env.USER === "shubham") {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9`);
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

function runProgram(input){
    input=input.trim().split("\n")
    //let n=+input[0]
    let [n,k]=input[0].trim().split(" ").map(Number)
    
    let arr = input[1].trim().split(" ").map(Number)  
    //console.log(arr,k,n);
    console.log(find(arr,n,k,0,n-1)); 
    
    function find(arr,n,k,l,r) {
        let mid  = Math.floor(l+r/2)
       if(arr[mid]==k){
        return 1
       } 
       else if(k<arr[mid]){
       return   find(arr,n,k,l,mid-1)}
    else if(k>arr[mid]){
      return   find(arr,n,k,mid+1,n-1)}

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
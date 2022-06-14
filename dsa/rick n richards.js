function runProgram(input) {
    input = input.trim().split("\n")
    let tc = +input[0]
    let l = 1
    for (let i = 0; i < tc; i++) {
        let n = +input[l++]
        let arr = input[l++].trim().split(" ").map(Number)
        console.log(find(arr, n));
    }
    function find(arr, n) {

        let i = 0
        let j = n - 1

        let bn1 = arr[i]

        let bn2 = arr[j]
        let rick = 0; let rich = 0
        while (i <= j) {
            if (i == j) {
                rick++
                break
            }
            if (bn1 != 0) {
                bn1--; 
                if(bn1==0){
                    i++
                    rick++
                    bn1 = arr[i]
                }
                bn1--
            }
            else if(bn1==0) {
                i++
                rick++
                bn1 = arr[i]
               // console.log(bn1);
            }
            if (bn2 != 0) {
                bn2--
            }
            else if(bn2==0) {
                j--
                rich++
                bn2 = arr[j]
            }

        }

        return [rick, rich].join(" ")






    }

}

if (process.env.USER === "shubham") {
    runProgram(`1
  5
  2 9 8 2 7`);
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
function runProgram(input) {
    input = input.trim().split("\n")
    //let n=+input[0]
    let [n, k] = input[0].trim().split(" ").map(Number)

    let arr = input[1].trim().split(" ").map(Number)
    //find(arr,n,k)
    //console.log(arr,n,k);
    console.log(find(arr, n, k));
    function find(arr, n, k) {
        let left = 0
        let right = n - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
//console.log(mid);
            if (arr[mid] == k) {
                return mid
            }
            if (arr[left] < arr[mid]) {
                if (k >= arr[left] && k < arr[mid]) {
                    right = mid - 1
                }
                else {
                    left = mid + 1
                }


            } else {
                if (k > arr[mid] && k <= arr[right]) {
                    left = mid + 1
                }
                else {
                    right = mid - 1
                }


            }

        } return -1

    }
}

if (process.env.USER === "shubham") {
    runProgram(`5 1
  3 4 5 1 2`);
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
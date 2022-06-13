let hashTable = [ "","", "abc", "def", "ghi", "jkl",
                  "mno", "pqrs", "tuv", "wxyz" ];
                   
// A recursive function to print all possible
// words that can be obtained by input number[]
// of size n. The output words are one by one
// stored in output[]
function printWordsUtil(number, curr, output, n)
{
     
    // Base case, if current output
    // word is prepared
    if (curr == n)
      {
        console.log(output.join(""))
        return;
      }
       
      // Try all 3 possible characters for current
      // digit in number[] and recur for remaining digits
    for(let i = 0;
            i < hashTable[number[curr]].length;
            i++)
    {
        output.push(hashTable[number[curr]][i]);
        printWordsUtil(number, curr + 1, output, n);
         
        output.pop();
         
        if(number[curr] == 0 || number[curr] == 1)
            return
    }
}
 



let number = [ 2, 2 ];
let n = number.length;
printWordsUtil(number, 0, [], n);

 
function LexicographicalMaxString(str)
    {
        // loop to find the max lexicographic
    // substring in the substring array
    var mx = "";
    for (var i = 0; i < str.length; ++i) {
        if (mx.localeCompare(str.substring(i)) <= 0) {
            mx = str.substring(i);
        }
    }
 
    return mx;
}
 
// Driver code
console.log(LexicographicalMaxString("cdbaaaddcd"));
   
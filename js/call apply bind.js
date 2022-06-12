let name  = {
     firstName : "sachin",
     lastname : "tendulkar"
}

let find = function (home,dob) {
    console.log(this.firstName +" "+home+" "+dob);
}

find.call(name,"mumbai",27)
find.apply(name,["mumbai",27])

// bind method does not get invoked it create a copy that later can be invoked
let print = find.bind(name,"mumbai",27)
print()
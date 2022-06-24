use test // create db if not there and go inside it

db.users.insert({firstname:"shubham"})// create collction of users and put first entry

db.users.insertMany([{lastname : "meena",firs_name:"shuham"},{age :3,last:"meena"}])
// so insert more than one entry


db.dropDatabase()// to dlete databse db point to crrnt database which is we in

db.users.find().pretty()// find will give cmplete data and pretty shows in pretty way

db.users.find({gender : "male"}) // will give those entry who cary this key vlaue pair

db.users.find({gender : "male"}).count // will give total number of data


db.users.findOne()// give only one data but a random data

db.users.findOne({"_id" : ObjectId("gegehefgergegergeth")}) // give that data who carry this specific id


db.users.update({"_id" : ObjectId("fgegdfgdfgdfgdfgdfgdfg")},{$set {first_name :"peter"}  }) //it will chnge particular entry for this onject if you dont use $set it will replace cmplete object with this key value pair also this can put value which is not present in the object


db.users.updateMany({gender :  "male"},{$set :{gender:"female"}})// it will check all the object who carry gender : male as key:value pair it will chnage it with female


db.users.remove({"_id" : ObjectId("fgegdfgdfgdfgdfgdfgdfg")}) // this will remove this specific id object

db.users.remove({gender:"male"})// this remove all the entris who carry this key:value pair

db.users.deleteOne({gender:"male"}) // only remove one entry

db.users.deleteMany({gender :"male"}) // delete all data like remove

mongoimport --db test --collection users --file db.json --jsonArray // to json data db.json


db.users.find({$eq : "dwgfgfsg@g.com"})// give data that email equal to smae you use $ne 


db.users.find({age : {$gt : 9}})  //return all data tht has age greater than 9 same you can ue $lt

db.users.find({$and : [{age : {$gt : 9}},{gender : "Male"}]}) // this data on multiple conditon like age and gender we have passed

db.users.find({$or : [{age : {$gt : 9}},{gender : "Male"}]}) // this data on multiple conditon like age and gender if one of them true it will return that object
same $nor you can use but in this both condition shoud need to be false


db.users.find({age : {$in : [5,4,4]}}) // return all the data who one one of these age

db.users.find({age : {$in : [5,4,4]}}).sort({first_name : 1}) // sort the data in ascending order if use put -1 it will sort in decending order 

  




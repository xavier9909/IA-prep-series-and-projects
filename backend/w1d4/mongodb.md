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


b


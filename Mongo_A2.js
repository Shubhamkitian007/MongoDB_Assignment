const MongoClient = require("mongodb").MongoClient;

const employeeData = require('./employee.json');

const connectionUrl = "mongodb://localhost:27017/mongo";

MongoClient.connect(connectionUrl, async(err, db) =>{
    if(err) {
        console.log(err);
        return;
    }

    const database = db.db("Human_Resources");
    const dbCollection = database.collection("employee");

    console.log("Connected To Mongo DB.....");

    const inserting = await dbCollection.insertMany(employeeData);
    console.log(inserting);

    const finding = await dbCollection.find().toArray();
    console.log(finding);
    console.log("Showing all data");

    const findExp = await dbCollection.find({"overallExp": {$gt: "2"}}).toArray();
    console.log(findExp);
    console.log("Showing Data greater than 2 Years");

    const findSalary = await dbCollection.find({"salary": {$gt: "30000"}}).toArray()
    console.log(findSalary);
    console.log("Showing Data Salary greater than 30000");

    const gradExp = await dbCollection.find({$and:[{"yearGrad":{$gt:"2015"}},{"overallExp":{$gt:"1"}}]}).toArray()
    console.log(gradExp)
    console.log("showing all data those graduated after 2015 and having exp greater than 1 ")

    const updating = await dbCollection.updateMany({salary: {$gt:70000}},{$set: {salary: 65000}})
    console.log(updating)

    const deleting = await dbCollection.deleteMany({lastCompany: "Y" })
    console.log(deleting)

}) 
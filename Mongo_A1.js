> show dbs

admin   0.000GB
config  0.000GB
local   0.000GB
mydb    0.000GB
test    0.000GB

> use Human_Resourse

switched to db Human_Resourse

> db.employee.insertMany([{
... "firstName" : "Shubham",
... "lastName": "Kumar",
... "Salary": 35500,
... "department": "HR",
... "overallExp": 2,
... "contactInfo": 5533226614,
... "yearGrade": 2022,
... "Address": "Jamui"
... },{
... "firstName": "Milan",
... "lastName" : "Kumar",
... "Salary": 150000,
... "department": "Sell",
... "overallExp": 5,
... "contactInfo": 3221515667,
... "yearGrade": 2018,
... "Address": "Patna"
... },{
... "firstName": "Prachi",
... "lastName" : "Singh",
... "department": "Class XI",
... "contactInfo": 8866224455,
... "Address" : "Laxmipur"
... },{
... "firstName" : "Surbhi",
... "lastName" : "Kumari",
... "Salary": 500000,
... "Department" : "B.A Hons",
... "contactInfo": 2022,
... "yearGrade": 2022,
... "Address" : "Deoghar"
... },{
... "firstName" : "Sharad",
... "lastName" : "Kumar",
... "salary" : "65000",
... "department" : "Teacher",
... "overallExp": 5,
... "contactInfo": 4563214789,
... "yearGrade": 2017,
... "Address": "Dhanbad"
... },{
... "firstName": "Rohit",
... "lastName": "Gupta",
... "salary": 450000,
... "department": "Mining",
... "contactInfo": 5588226644,
... "yearGrade": 2014,
... "overallExp": 8,
... "Address": "Ranchi"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62e7c41d363005bc114376d5"),
                ObjectId("62e7c41d363005bc114376d6"),
                ObjectId("62e7c41d363005bc114376d7"),
                ObjectId("62e7c41d363005bc114376d8"),
                ObjectId("62e7c41d363005bc114376d9"),
                ObjectId("62e7c41d363005bc114376da")
        ]
}

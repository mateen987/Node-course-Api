var {MongoClient , ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,client)=>{
if(err){
    console.log(err);
}
console.log("db connected")
var db = client.db('Todoapp');
 db.collection('TODOS').findOneAndUpdate({
    _id:new ObjectID('5bcf7595fb0e8fcff8c47694')
},
 {
     $set : {
     completed: true
     }
 },
 

).then((result)=>{
console.log("ho gya ",result);
})


})

// const MongoClient = require('mongodb').MongoClient;
 var {MongoClient, ObjectID}=require('mongodb');
//  var obj=new ObjectID;
 
//  console.log(obj);



// var user={name:'mateen', age:25};
// var {name}=user;
// console.log("name is ",name);


MongoClient.connect('mongodb://localhost:27017/Userone',(err,client)=>{
    if(err){
       return  console.log('unable to connect');
    }
    console.log('connected to mogodb ');
    // const db= client.db('userone');
    // db.collection('Userone').insertOne({
    //     _id:'123',
    //     name:'Abdul Mateen',
    //     age:'24',
    //     location:'lahore',
    // },(err,result)=>{
    //     if(err){
    //    return  Console.log('unable to insert in todo ', err);
    //     }
    //     console.log(JSON.stringify(result.ops));
        
    // }) 

    client.close();
});
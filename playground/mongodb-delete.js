
var {MongoClient}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,client)=>{

    if(err){
        return console.log("database not connected")
    }
    console.log('mongodb is connected');
     var db=client.db('Todoapp');
    //  deleteMany()
//      db.collection('TODOS').deleteMany({text:'eat lunch'}).then((result)=>{
//     // console.log(JSON.stringify(docs,undefined,2));
//  console.log(result);
//      });
//deleteOne
// db.collection('TODOS').deleteOne({text:'eat lunch'}).then((result)=>{
//     console.log(result);
// })
// findoneanddelete
db.collection('TODOS').findOneAndDelete({completed:'false'}).then((result)=>{
    console.log(result);
})

//     },(err)=>{
//     console.log("error occure",err);

//     })
    // db.close();
})
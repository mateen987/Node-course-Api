
 var {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/useone',(err,client)=>{
    if(err){
       return  console.log('unable to connect');
    }
    console.log('connected to mogodb ');
    const db = client.db('userone');

// db.collection('TODOS').find(
//     {
//         Completed : new ObjectID('5bc9a75babfb8a7aaa245718')
//     }).toArray().then((docs)=>{
//  console.log(JSON.stringify(docs, undefined ,2));
//     },(err)=>{
//      console.log('unable to fetch');
//     });


db.collection('Userone').find({name: 'Abdul Mateen'}).toArray().then((docs)=>{
    // console.log(`todos ${count}`);
  console.log(JSON.stringify(docs, undefined ,2));
    },(err)=>{
     console.log('unable to fetch');
    });
     client.close();
}); 
const {ObjectID} = require('mongodb');
 
const {Todo}=require('./../Server/Model/todo');

const {mongoose}=require('./../Server/db/mongoose');


// Todo.remove({}).then((result)=>{
//     console.log(result);
// })

Todo.findByIdAndRemove('5be58e76e06ddc1128bc10ae').then((result)=>{
    console.log('id is this');
   
})
var {ObjectID}=require('mongoodb');
const {mongoose} =require('../Server/db/mongoose');
const {user}= require('./../Server/Model/user');
const {Todo}=require('../Server/Model/todo');

var id='5bd6b49dc743c201e8383d39';

var uid='5bd6e75cc9c7ee1944b0fac1'

user.findById(uid).then((user)=>{
    if(!user){
        return console.log('user not found');

    }
    console.log(JSON.stringify(user,undefined,2));
})
// Todo.find({
//     _id:id
// }).then((todos)=>{
// console.log('todos',todos);
// })

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('todo',todo);
// })

// Todo.findById(id).then((todo)=>{
//     console.log('find by id is',todo);
// })
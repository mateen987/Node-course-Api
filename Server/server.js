const _ = require('lodash');
var express=require('express');
const bodyParser=require('body-parser');
const {ObjectID}= require('mongodb');
var {mongoose} =require('./db/mongoose');
var {user}=require('./Model/user');
var {Todo}= require('./Model/todo');

var app=express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post('/todo',(req, res)=>{

    var todo = new Todo({
        text:req.body.text
    });
    
    todo.save().then((doc)=>{
    res.send(doc);
    },(e)=>{
     res.status(400).send(e);
    })

});
app.get('/todo',(req,res)=>{
    Todo.find().then((todo)=>{
    res.send({todo});

    },(e)=>{
      res.status(400).send(e);
    })
})
app.get('/todo/:id',(req,res)=>{
  var id= req.params.id;
  if(!ObjectID.isValid(id)) {
    return  res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
      if(!todo){
         return res.status(404).send();
      }
      res.send({todo});
  }). catch((e)=>{
    
     res.status(400).send();
  })

})

app.delete('/todo/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(400).send();
    }
Todo.findByIdAndRemove({id}).then((todo)=>{
if(!todo){
    return res.status(400).send();
}
res.send(todo);
}).catch((e)=>{

    res.status(400).send();
})

})

app.patch('/todo/:id',(req,res)=>{
    var id = req.params.id;
    var body =_.pick(req.body,['text','completed']);
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    if( _.isBoolean(body.completed) && body.completed){
        body.completedAt=new Date().getTime();
    }else {
      body.completed=false;
      body.completedAt=null;   
    }
    Todo.findByIdAndUpdate(id ,{$set:body}, {new :true}).then((todo)=>{
    if(!todo){
        return res.status(404).send();
    }

    res.send({todo});
    }).catch((e)=>{
     res.status(400).send();
    });

})

app.listen(port, ()=>{
console.log(`starting on port ${port}`);
});

module.exports={app};
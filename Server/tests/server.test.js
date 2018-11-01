// const expect =require('expect');
// const request =require('supertest');

// const {app}=require('../../Server');

// const {Todo}=require('../Model/todo');

// beforeEach((done)=>{
//     Todo.remove({}).then(()=>done());
// })

// describe('POST /todo', ()=>{
//     it('should create a new todo',(done)=>{
//         var text='text todo test'; 

//         request(app).post('/todo').send({text}).expect(200).expect((res)=>{
//             expect(res.body.text).toBe(text);

//         }).end((err,res)=>{
//             if(err){
//                 return done(err);
//             }
//             Todo.find().then((todos)=>{
//                 expect(todos.length).toBe(1);
//                 expect(todos[0].text).toBe(text);
//                 done();
//             }).catch((e)=>done(e));
//         })
//     });
// })
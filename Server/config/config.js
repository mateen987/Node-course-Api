
var env= process.env.NODE_ENV || 'development';
if(env==="development"|| env==="test"){
var config = require('./config.json');
 console.log(config);

 var envconfig= config[env];
 Object.keys(envconfig).forEach((key)=>{
     process.env[key]=envconfig[key];
 });
 
}

// if(env==='development'){
// process.env.PORT=3000;
// process.env.MONGODB_URI = 'mongodb://localhost:27017/Todoapp';

// }else if(env==='test'){
//     process.env.PORT=3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoappTest';

// }


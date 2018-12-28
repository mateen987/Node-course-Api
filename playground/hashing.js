const {SHA256} = require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt =require('bcryptjs');

var password= "mateen123!"

bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash);
    })
})

// var hashpassword="$2a$10$O3HWgon2rQJa62FtsuEAi.Ed92Xps0duw8EpTJD3EZ4yxTzNButa2"
// bcrypt.compare(password,hashpassword,(err,res)=>{
//     console.log(res);
// })


// jsonwebtokenhere
// var data ={
//     id:4
// }
//  var token= jwt.sign(data,'123abc');

// console.log(`${token}`);

// var decoded= jwt.verify(token,'123abc');
// console.log("decoded",decoded);


// hashing here 
// var message="i am user no 3";
// var hash= SHA256(message).toString();

// console.log(` orignal message ${message}`);
// console.log(`after hashing ${hash}`);

// var data={
//     id:4
// } 
// var token={
//     data ,
//     hash:SHA256(JSON.stringify(data)+"mateen").toString(),
// }

// // token.data.id=5;

// var resulthash = SHA256(JSON.stringify(token.data)+"mateen").toString();
// if(resulthash===token.hash){
//     console.log('user is trusted');
// }
// else{
//   console.log("user is not trusted");
// }
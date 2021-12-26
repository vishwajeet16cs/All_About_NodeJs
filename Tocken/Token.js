  const jwt =require('jsonwebtoken');
  let user ={
      email:'vishwajeet@gmail.com',
      password:"12345"
  }
  let payload={
      id:user.email,
  }
  let secretkey = "helloSecretkey";
  let token = jwt.sign(payload,secretkey,{expiresIn:60*60})
  console.log(token)
  //expiresIn-->expire time of generated tocken(it is optional parameter)
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  //eyJpZCI6InZpc2h3YWplZXRAZ21haWwuY29tIiwiaWF0IjoxNjQwNDk0ODQwLCJleHAiOjE2NDA0OTg0NDB9.
  //fNMyXb7Qvm_LT9Ro5mSITXTNqgUwsCqUr8WQfFdyg7U

  //https://jwt.io/--> sit to check or decode your tocken


  // how to verify the tocken
 /*  jwt.verify(token,secretkey,(err,newPayload)=>{
       if(err) throw err;
       console.log(newPayload)
  })  */
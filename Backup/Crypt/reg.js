// const { getMaxListeners } = require("process")
const bcrypt = require("bcryptjs")
//in bycriptjs we cant pass number it take only string c 
let userDetails={
    name:"vishwajeet",
    email:"vishwajeet@getMaxListeners.com",
    password:"psa@9191",
}
// let salt=bcrypt.genSalt(10);
// we can now pass selt over 10 in below line 
let newPassword = bcrypt.hashSync(userDetails.password,10);
console.log(newPassword)//$2a$10$b4HdXuH7lu31c8rdSAqgIOabAsQG8phQpKpNmnf8UbBfndxtkDL1q
// it will give incrypted password

userDetails={...userDetails,password:newPassword}
console.log(userDetails);
let x=bcrypt.compareSync("psa@9191",userDetails.password);
console.log(x); 
//compareSync will return true and false

if(bcrypt.compareSync("psa@9191",userDetails.password)){
    console.log("password matched");
}
else{
    console.log("password doesn't match");
}
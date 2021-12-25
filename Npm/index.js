// npm init -to initialize npm 
//chalk we use color the o/p at console
// const chalk = require("chalk");
// console.log(chalk.red("hello world"));
console.log("its working")
// const res = validator.isEmail('foo@bar.com');
const validator = require("validator")
const res = validator.isEmail('vishwajeet@gmail.com');
console.log(res);
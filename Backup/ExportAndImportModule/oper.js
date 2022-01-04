const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const mul=(a,b)=>{
    return a*b;
}
// module.exports= sub;// it will over write previous one

//-----------------------------------------
// module.exports.add= add;
// module.exports.sub= sub;// to over come over write problem
// module.exports.mul= mul;// to over come over write problem

// aove code export - we are repeating same code 
 module.exports={add,sub,mul}// exporting position doesn't matter 
 // code reusability

 // we can export and import variable, function
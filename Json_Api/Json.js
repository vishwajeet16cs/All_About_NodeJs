const emp={
    Firstname:"vishwajeet",
    LastName:"Singh",
    roll:129,
    location:"Bangalore"
}



// obj to JSON
const jsondata=JSON.stringify(emp);//convert obj in to json
console.log(jsondata)
//{"Firstname":"vishwajeet","LastName":"Singh","roll":129,"location":"Bangalore"}
console.log(jsondata.roll)// undefine
// can't get same as object


//-------------------------------------
//JSON to object
const objData=JSON.parse(jsondata);
console.log(objData)



// const objobj=JSON.parse(emp);
// console.log(objobj)



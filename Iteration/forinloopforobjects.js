//In case of objects forOf Loop does not work so for objects we will
//use forIn loop.

let stdObj = {
    stdName: "Mohsin",
    stdId: 123,
    stdProgram: "Masters"
}

//first check with forOf loop
// for (const [key, values] of stdObj) {
    // console.log(key, " : ", values); //in this way it will not work we have to
    //use forIn loop
// }
//Lets try ForIn loop here
for (const keys in stdObj){
    // console.log(keys); //now here it will only print key not values 
    //we have to use this syntax
    console.log(`key is ${keys} and its value is ${stdObj[keys]}`); //same for arrays
}

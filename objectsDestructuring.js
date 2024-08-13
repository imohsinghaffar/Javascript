//Normally we write objects like this
// let obj = 
// {
//     name:"Mohsin",
//     id: 123
// }

//get it like this
// console.log(obj.name);


//Now we will learn about object destructuring which are most important because in react
//we always code with destructuring. This way to write object, it is same as normal object
//but we while getting it we will use little different way.
const deStrucObject = {
    name: "Mohsin Ghaffar"
}

//Now we will get it like this.
const {name: myName} = deStrucObject; //This is syntactical sugar, it means it on us if we want
//to use it we can otherwise we can use simple method. But it is used by professionals but not
//necessary.
//we will declare it like new object and write the key in brackets
// and then write object name 2- We can also make short or give alternative name to key by 
//using : and then write name of the key and just console that name to see output.
//It is also used to fetch APIs data.

// console.log(myName);

//APIs Data shown in JSON format, in past was shown in xml but it was complex. it is same
//as object like {} but key and value both required "" double qoutes.

//this is singleton object
let createNewObject = new Object();

//this is object literal way
let userObject = {};
userObject.name = "Mohsin";
userObject.id = 1234;
userObject.location = "Wurzburg";

// let createAnotherObject = 
// {
//     fullname: "Mohsin Ghaffar",
//     email: "mohsinghaffar@gmail.com",
//     createAddressObject:
//     {
//         address: "Germany",
//         postalCode: 97074
//     }
// }


// let objA = {1:"A"};
// let objB = {2:"B"};
// let objC = {objA, objB};
// let objC = Object.assign(objA,objB); //Assign method make two objects one, it creates new object
//it is a best approach to use this block {}
// let ObjD = Object.assign({}, objA, objB);
// let objE = {...objA, ...objB, ...ObjD} //90% used this syntax professionally said by Sir Hitesh
//it is called spread operator, denoted with (....)
// console.log(ObjD);
// console.log(objA);
// console.log(objE);

//there is another way to define object which is array object
//This is mostly used in APIs to access data
// let newObj = 
// [
//     {
//         obj1: "Array Object 1",
//         id: 1
//     },
//     {
//         obj2: "Array Object 2",
//         id:2
//     },
//     {
//         obj3: "Array Object 3",
//         id:3
//     }
// ]

// console.log(newObj[1].id);
console.log(userObject);
console.log(Object.keys(userObject)); //this method is mostly used in databases to access keys
//it is very important method.
console.log(Object.values(userObject));
console.log(userObject.hasOwnProperty("id"));







// // console.log(userObject);
// console.log(createAnotherObject.createAddressObject.address);


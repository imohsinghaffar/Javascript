//There are two types of datatypes 
//1. Primitives: There are 7. String, Number, Null, Undefined, Bol, Symbol, BigInt
//2. Non Primitives(Referenec): Array, Objects, Functions
//1. Primitives: All these datatypes are callback values it means
//whenever we use it we get the copy of them from the memory not original/refernce.

let checkString = 6873468376438n
// console.log(checkString + " Data Type is " + typeof(checkString)); Don't use this way
//this is  old way to console instead use backticks ``
console.log(`Data is ${checkString} and type is ${typeof(checkString)}`)
// let createObject =
// {
//     name: 'Mohsin',
//     age: 25,
// }
// console.log(createObject);


// let see = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(see);

let myObj = 
{
    name: "Mohsin",
    age: 24,
    gender: "male"
}
// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

Object.defineProperty(myObj, "name", 
    {
        writable: false,
        enumerable: false
    }
)
// console.log(myObj.name = "ALi");

// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

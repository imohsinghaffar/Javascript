// There are two types of objects
// 1. Singleton
// Object.create();
let symb = Symbol["Key1"]
//2. Object Literals
let learnObj = 
{
    name: "Mohsin Ghaffar",
    age: 25,
    [symb]: "Key2", //not working yet this syntax dont know why
    "profession": "Student",
    isLoggedIn: false
}

//Yad rkhna ha k jb hm symbol lety han value ki datatype agr hm [] lgay 
//bagair us ko access krain gy to ho jay ga but us ki type string hogi
//so is lia hmmy [] brackets k ander us ko likhna ta k as a symbol console
//pa log ho
// console.log(learnObj.name);
// console.log(learnObj["profession"]);
// let checktype = learnObj[symb];
// console.log(typeof checktype);
// Object.freeze(learnObj)
learnObj.class = "Master Student";
learnObj.greet = ()=>{console.log("Hello this is anonymous arrow function");
}
//Diff between arrow and normal function, in arrow we cannot use this operator
//while in normal function we can use this. You can see below.
// learnObj.greetTwo = function(){console.log(`Hello Js User! Your age is ${this.age}`);
// }
// console.log(learnObj.greet())
// console.log(learnObj.greetTwo());
// console.log(learnObj);
let mySymbol = Symbol['mySymb'] //this is correct example we have
let myObj = {
    [mySymbol]: "Let's Greet" // <--- if we have to access and use symbol correctly
    //then we have to must use brackets while assigning new value
}

// console.log(myObj[mySymbol]); //Like this we will access it, with dot notation
//we cannot access it.

let myObject = {
    std_name: "Ahmad",
    std_age: 26,
    std_gender: "Male",
    newObj:{
        address: "Wurzburg",
        houseNum: "1410",
        building: "16A"
    }
}

let getAllKeys = Object.entries(myObject).forEach(([key, value])=>{
    // console.log(`Key is ${key} and value is ${value}`);
    
})
// console.log(getAllKeys);

//Task: Add a new property genre to the book object. 
//Then, modify the year property to a different value.
myObject.isLoggedIn = true;
// console.log(myObject);

//Task: Delete the any property from the book object and log the object to see the changes.
delete myObject.std_age
// console.log(myObject);

//Task: Use Object.keys() to iterate over the properties of the 
//book object and log each key and its corresponding value.
// Object.keys(myObject).forEach(keys=>console.log(keys))

//Task: Create an object representing a person with nested objects 
//for address and contacts. Log the entire object and specific nested properties.
// console.log(myObject.newObj.address)

//Task: Create two objects and merge them into a new object 
//using Object.assign(). Log the merged object.
let infObj = {
    qual:"Master",
    uni:"Wzg",
    dept: "CS"
}

let combineObj = Object.assign({}, myObject, infObj)
// console.log(combineObj);

                        //object destructuring
//Task: Use object destructuring to extract properties name and age from the person 
//object created earlier and log them.
let {uni:University, qual:Qualification} = infObj
// console.log(University, Qualification);

//Task: Create a base object and use Object.create() to inherit its properties
//in a new object. Log the inherited properties.
let getStdInfo = Object.create(infObj) //this way create new object using previous obj but
//don't merge new object in old object
getStdInfo.location = "Am Hubland near Mensa"
// console.log(getStdInfo);
// console.log(infObj);

//Task: Use Object.assign() and the spread operator (...) to copy an object. 
//Modify the copy without affecting the original object.

let getObj = {...infObj}
// console.log(getObj);

let numbers = [1, 2, 3,6,7];

function sum(x, y, z,a) {
    return x + y + z + a;
}

// Spreading the array as individual arguments
// console.log(sum(...numbers)); // Output: 12

//Object.assign() and spread both combines two or more objects and give combine result

//Task: Use hasOwnProperty() to check if an object contains a 
//specific property. Log the result.
let seeResult = getStdInfo.hasOwnProperty("location")
// console.log(seeResult);

//Task: Create an object with multiple properties and use Object.getOwnPropertyDescriptors() to retrieve 
//detailed information about the properties. 
//Log the descriptors.
let seeHiddenValues = Object.getOwnPropertyDescriptors(infObj)
// console.log(seeHiddenValues);

//Task: Create an object that represents a calculator with methods 
//to perform basic arithmetic operations like add, subtract, multiply, and divide.
let Calculate = {
    add(a,b)
    {
        // return a + b
        console.log(a + b);
        
    },
    sub(a,b)
    {
        // return a - b
        console.log(a - b);
    },
    mult(a,b)
    {
        // return a * b
        console.log(a * b);
    },
    divide(a,b)
    {
        // return a / b
        console.log(a / b);
    }
}

// console.log(Calculate.add(1,2));
// console.log(Calculate.sub(5,2));
// console.log(Calculate.mult(10,2));
// console.log(Calculate.divide(22, 11));
// Calculate.add(5, 9)
// Calculate.sub(5, 9)
// Calculate.mult(5, 9)
// Calculate.divide(5, 9)


//Object literals 1st way
// let name = "Student";
// let obj = {
//     name,
//     age:25
// }

//Object literals : 2nd way
// let name = "Student";
// let obj = {
//     [name + "Name"]:"Mohsin Ghaffar", //in this way we can combine two variable as one
//     age:25
// }
// console.log(obj.StudentName);

//Object literals 3rd way: In this way we will see how to use function accor to ES6
let name = "Student";
let obj = {
    [name + "Name"]:"Mohsin Ghaffar", //in this way we can combine two variable as one
    age:25,
    details()
    {
        // console.log(this.StudentName); //ES6 allows us to create function like this
        //before ES6 we have to write function like this
        //details: function(){}
        return `Your name is ${this.StudentName}`
    }
}
// console.log(obj.details());

//this is how a function return object
let fname = "Mohsin";
let lname = "Ghaffar";
function student(firstname, surname)
{
    return {firstname, surname};
}

// console.log(student(fname, lname))
let show = student(fname, lname);
// console.log(show);

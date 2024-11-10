// Arrays Destructuring
let arr = ["Ali","Mohsin","Umer","Ahmad"]
let [firstStdName,scStdName] = arr //for arrays we will use arr syntax like [] to destructure
// console.log(scStdName);
//we can also destructure array like obj
// let{1:secondElement} = arr

// Object Destructuring
let obj = {
    name:"Ikram",
    age:23,
    gender:"male",
    info:{
        status:"single",
        color:"Brown",
    }
}

// let{name: stdName, age} = obj //for object we will use object syntax {} to destructure
// console.log(stdName);

let { info :{status, color} } = obj //if we have to access property of obj within obj
// console.log(info);

//Destructuring in function 
function studentInfo({name,age})  //for obj in functions
{
    // console.log(`Name: ${name} - Age: ${age}`);
}
studentInfo(obj)

function arrDesFunc([name1,name2])  //for arrays in functions
//for specific element in array we will use this syntax //3:name3//
{
    // console.log(`Name 1: ${name1} - Name 2: ${name2}`);
}
arrDesFunc(arr)
////////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////////
///////////Objects Destructuring

const objDes = { name: 'Alice', userage: 25 };

// Destructuring with renaming
// const {name, userage} = objDes;

// console.log(name);  // "Alice"
// console.log(userage);  // 25




///////////Arrays Destructuring

// const array = ['Alice', "Jhon", "Ali" ];

// // Destructuring with renaming
// const [a,,c] = array;
// console.log(z);  // "Alice"
// // console.log(userage);  // 25


const arrobj = {
   user: { username : "Public", id : 1},
   arr : [1,2,3,4]
}
  
  // Destructuring objects and arrays together
//   const [{ name:fnanme, age:yearold }, [x, y]] = arrobj;
// let {user : {username,id}, arr:[a,b,c,d]} = arrobj
  
// console.log(c);


////////////////////////
///////////////////////Practice///////////////////

// const arr1 = [
//     { name: 'Tom', age: 22 },
//     { name: 'Jerry', age: 24 }
//   ];
//   let[firstobj,secondobj] = arr1
//  let{name:name1, age:age1} = firstobj;
//  let{name:name2, age:age2} = secondobj;
// //  console.log(age1);
 
  
 //function destrcutring
//  function de_structure({name,age})
//  {
//     let obj = 
//     {
//         name,
//         age
//     }
//     // console.log(`Name: ${name} Age: ${age} `);
//     return obj
    
//  }
// let b = de_structure({name:"Mohsin", age:25})
//   console.log(b);
  
let person = { name: "John", age: 25, job: "developer" };
// Task1: Your task: Destructure the object to extract `name` and `age` and log them.
// let{name,age} = person;
// console.log(name);
// console.log(age);

// let person2 = { job: "developer" };
// // Task2: Your task: Destructure the object and assign default values to `name` ("Guest") and `age` (30).
// let{name="Guest", age = 30} = person2;
// console.log(age);


// // Your task: Destructure the `name`, `city` (from the nested `address` object), and `department` properties.
// let employee = {
//     name: "Sarah",
//     address: { city: "New York", country: "USA" },
//     department: "HR"
// };
// let{name,address:{city},department} = employee;
// console.log(city);
// console.log(name);
// console.log(department);


// Your task: Destructure the array to extract `first` and `second` elements, then log them.
// let numbers = [10, 20, 30, 40];
// let[firstNo, secNo] = numbers;
// console.log(firstNo);
// console.log(secNo);

// Your task: Destructure the array to extract the `first` and `third` elements, skipping the second.
// let colors = ["red", "green", "blue", "yellow"];
// let[color1,,color3] = colors;
// console.log(color1);
// console.log(color3);

// Your task: Destructure the object to extract `id` and `name` separately, and gather the rest into a new object.
// let student = { id: 1, name: "Alice", age: 20, grade: "A" };
// let{id,name,...rest} = student;
// console.log(rest);


// Your task: Log the `name`, `age`, and `city` inside the function using destructuring.
// function printDetails({ name, age, city }) {
//     console.log(`Name: ${name} Age: ${age} City: ${city}`);
    
// }

// let user = { name: "Bob", age: 30, city: "Los Angeles" };
// printDetails(user);

// Your task: Destructure `coordinates` to extract `x` and `y`, and assign default values (`0` for `y`).
// let coordinates = [10];
// let[x,y=0] = coordinates
// console.log(y);

// Your task: Destructure `data` to extract `name` from the first inner array and `age` from the second inner array.
// let data = [["John", 30], ["Sarah", 25]];
// let[firstArray, secondArray] = data;
// let[a,b] = firstArray;
// let[c,d] = secondArray;
// console.log(firstArray);
// console.log(a);
// console.log(d);


// Your task: Destructure the returned object to extract `name` and `age`.
// function getPersonData() {
//     return { name: "Tom", age: 40, city: "Chicago" };
// }

// let see = getPersonData()
// console.log(see.name);
// console.log(see.age);


// Your task: Destructure `user` to get `name` and the first `phone number` from the `contacts` array.
// let user = {
//     name: "Emma",
//     contacts: ["123-456-7890", "987-654-3210"]
// };

// let{name, contacts:[a]} = user;
// console.log(name);
// console.log(a);



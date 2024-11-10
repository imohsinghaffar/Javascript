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

let{name: stdName, age} = obj //for object we will use object syntax {} to destructure
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
const {name, userage} = objDes;

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

const arr1 = [
    { name: 'Tom', age: 22 },
    { name: 'Jerry', age: 24 }
  ];
  let[firstobj,secondobj] = arr1
 let{name:name1, age:age1} = firstobj;
 let{name:name2, age:age2} = secondobj;
 console.log(age1);
 
  
  
  
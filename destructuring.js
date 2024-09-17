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



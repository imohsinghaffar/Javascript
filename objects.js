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
learnObj.greet = function(){console.log("Hello this is anonymous arrow function");
}
learnObj.greetTwo = function(){console.log(`Hello Js User! Your age is ${this.age}`);
}
console.log(learnObj.greet())
console.log(learnObj.greetTwo());
console.log(learnObj);






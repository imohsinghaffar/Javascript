// JavaScript and Class 
// OOP


// Objects
// Collection of properties and methods like toLowerCase

// Parts of OOP
//1. Object literals
  // - constructor function
  // - prototypes
  // - classes
  // - Instances(new, this)

 // 4 pillars
 // - Abstraction - Hide Details
 // - Encapsulation
 // - Inheritance
 // - PolyMorphism

 //Object Literals
 const user  = {
    user_name : "Ali",
    user_DOB : "25/04/1998",
 }
 //console.log(user.user_age);
 function userDetails(username, isUserLoggedIn, userAge)
 {
    this.username = username;
    this.isUserLoggedIn = isUserLoggedIn;
    this.userAge = userAge;

      return this; //If we don't use return keyword then also we can get same results 
 }
//  const userOne = userDetails()
//  console.log(userOne);

//Constructor Function
// let userOne = new userDetails("Ahmad", true, 35);
// let userTwo = new userDetails("Rizwan", false, 32);
// console.log(userOne.username);
// console.log(userTwo);

class greet{
   constructor(user)
   {
      this.newuser = user;
      // console.log("This is constructor method");
      
   }
   sp_greet(say) //we can say it method or prototype method
   {
      this.sayGreet = say;
      console.log(`Hi ${this.newuser}`);
   }
  normal_greet()
   {
      console.log(`${this.sayGreet}`);
   } 
   static staticMethod()
   {
      console.log("Hi this is static method");
      
   }
}

let happy = new greet("Ali");
// happy.user = "mohsin";
// happy.sp_greet("Hallo")
// happy.normal_greet();

//To call static method we don't have a need to make object we can call it with classname
// greet.staticMethod() //like this




///lets learn Inheritance
// class employee
// {
//    constructor(name)
//    {
//       this.emp_name = name;
//    }
//    info()
//    {
//       console.log(`Employee Name: ${this.emp_name}`);
      
//    }
// }
// class manager extends employee
// {
//    // constructor(name)
//    // {
//    //    this.man_name = name;
//    // }
//    info()
//    {
//       super.info();
//       console.log(`Manager Name: ${this.emp_name}`);
//    }
// } 

// let a = new manager("Ahmad")
// a.info()

 
//THERE ARE FOUR PILLARS OF OOP
// 1 - Encapsulation
// 2 - Abstraction
// 3 - Inheritance
// 4 - Polymorphism

function dob(age)
{
   return new Date().getFullYear() - age
}

let seeAge = dob(25)
console.log(seeAge);


//here how we will destructure in function
function createUser({fname,lname,age})
{
   let new_user = {
      fname,
      lname,
      age
   }
   return new_user
}

// createUser("m", "g", 25)
// let user1 = createUser("hhjhs","hjdsh",34)
// console.log(user1.lname);
let userdata = createUser({fname:"mOhson",lname:"hjkdsh",age:23})
console.log(userdata.fname);

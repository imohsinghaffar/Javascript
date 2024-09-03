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

    return this;
 }
//  const userOne = userDetails()
//  console.log(userOne);
let userOne = new userDetails("Mohsin", true, 25);
//console.log(userOne.username);


 


 


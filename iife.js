//IIFE stands for Immidiately Invoke Function Expression
//It means as soon we declare function, we immidiately call it.
//It avoids global scope pollution
//Variables declared in IIFE cannot be used Globally, prevent from naming conflicts

(function IIFE(){
    console.log("This is IIFE function"); //we can make normal function to  IIFE as well.
})();

// IIFE() //This is normal function

//Here is IIFE it is arrow function
//1. First we will take two parenthesis, first we use to write arrow function inside
//2. 2nd parenthesis are for calling arrow IIFE function
//3. sometimes it make conflict with previous function we have to stop that using semicolon(;) 
(
    (parameter)=>{
        console.log(`This is how we write ${parameter}`);
    })("IIFE") //Pass argument here, as I know i am calling it here
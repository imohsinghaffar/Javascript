let takeObj = 
{
    stdOne:"Ali",
    stdId: 234,
    welcomeStd: function()
    {
        // console.log(`Welcome! ${this.stdOne}${this.stdId}`); //this always used in obejcts
        //it shows all the properties of objects
        // console.log(this);
        
    }
}
takeObj.welcomeStd();
// console.log(this); //when we use it outside of objects it will show empty object.

function checkThis()
{
    // console.log(this); //again we can only use this in objects, cannot use in functions
    
}
checkThis()


//Arrow Function :There are different ways to write arrow function
//Basically arrow function doesnot have this, it inherit it from any object
//1st way
let learnArrowFunction = ()=> 
    // {console.log("Hello");}

    learnArrowFunction()

    
//1. when we use block{} we must have to use return
//2. whenever we use return we have to prinout result using console
//3. this  is explicit return like we write return keyword.
let add = (num1, num2)=>{return num1 + num2} //2nd way

// console.log(add(5,6))


//1. In this case we remove return keyword and write what we want to display in a same line
//2. it automatically understand there is a return keyword so we don't need to write.
let multiplyNum = (a, b)=> a * b; //3rd way
// console.log(multiplyNum(1000,3));


//1. in this way, we use parenthesis around our statement
//2. it also automatically understand there is a return keyword but we dont write.
//3. this is called implicit return like we dont write return.
let divideNum = (a,b)=> ( a/b ); //4th way which is mostly used in react as well.  
// console.log(divideNum(10, 2));






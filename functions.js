// function student(name, age)
// {
//     // console.log(`Your name is ${name}, Your age is ${age}`);
// }

// function add(num1 = 5, num2 = 2) // we can also pass random values to parameter incase we don't
// //give values as arguments then random values be used as a result. if provided it will overwrite it.
// {
//     // console.log(num1 + num2);
//     // return num1 + num2;
//     let check //precautions: Every statement below return will not execute untill it moved above
//     //return. Keep in mind, this is important.
// }
// student("Mohsin", 25);
// let seeResult = add(10, 25);
// //here if we print seeResult we will get undefined because we have not
// //return anything so everytime when we have to save result of a function in variable we have to
// // return it first otherwise we will get undefined. it is used to reuse final result to any other
// //place as well. This is the main difference between return and without return. 
// // console.log(seeResult); 
// //if we comment this line it will not give any output because of return.

// // if(!seeResult)
// // {
//     // console.log("Please use return to print it");
    
// }
// else{
//     // console.log(seeResult);
    
// }

// //Task 1: Create a function named greet that takes 
// //no arguments and logs "Hello, World!" to the console.
// function greet()
// {
//     // console.log("Hello World");
    
// }
// greet()

// //Task 2: Write a function named addNumbers that takes two 
// //arguments (numbers) and returns their sum.
// function addNumbers(num1, num2)

// {
//     // let sum = num1 + num2
//     // console.log(sum);
    
// }
// addNumbers(5,9)

// //Task 3: Create a function sayMyName that takes your name as an argument 
// //and logs "Hello, [name]" to the console.
// function sayMyName(name)
// {
//     // console.log("Hello", name);
// }
// sayMyName("Mohsin")

// //Task 4: Write a function named square that takes a number 
// //as an argument and returns its square.
// function square(num)
// {
//     let findSquare  = num *num;
//     // console.log(`Square:${findSquare}`);
// }
// square(5)

// //Task 5: Create a function named isEven that takes a number as an argument 
// //and returns true if the number is even, otherwise returns false
// function isEven(num)
// {
//     if(num%2==0)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
// }
// let getResult = isEven(5)
// // console.log(getResult);

// //Task 6: Write a function named multiply that takes three arguments and returns their product.
// function multiply(a,b,c)
// {
//     return a*b*c
// }
// let result = multiply(3,2,3)
// // console.log(result);

// //Task 7: Create a function greetPerson that takes two arguments, 
// //name and age, and logs "Hello, [name], you are [age] years old."
// function greetPerson(name,age)
// {
//     // console.log(`Hello, ${name}, you are ${age} years old`);
// }
// greetPerson("Ali", 25)

// //Task 8: Write a function named findMax that takes three numbers as arguments and returns the largest number.
// function findMax(num1, num2, num3)
// {
//     if(num1>num2 && num1>num3){
//     return num1
// }
//     else if(num2>num1 && num2>num3){
//     return num2
// }
//     else{
//     return num3
// }
// }

// let findMaxNum = findMax(5,7,8)
// // console.log(findMaxNum);

// //Task 9: Create a function named reverseString that 
// //takes a string as an argument and returns the string reversed.
// function reverseString(str)
// {
//     let firstSplitStr = str.split("")
//     // console.log(firstSplitStr.reverse())
// }
// reverseString("Hello")


// //Task 10: Write a function calculateArea that calculates the 
// //area of a rectangle, given its length and width as arguments.
// function calculateArea(length, width)
// {
//     let area = length * width
//     // console.log(area);
// }
// calculateArea(3,5)

// //We will learn about arrow functions
// // let greeting  = "Hi Good Morning"
// // let welcome = greet => console.log(greet);
// // welcome(greeting)

function add(num1, num2)
{
    let num3 = num1;
    let num4 = num2;
    let add = num1 + num2;
    console.log(add)
}
// console.log(add(5,8));
add(34,5)
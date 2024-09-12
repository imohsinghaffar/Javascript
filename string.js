// let aString = "Hello! I am Mohsin";
// let result=aString.split(" ");
// console.log(result);

//Find Method JS
// let numbers = [1, 2, 3, 4, 5];
// let found = numbers.find((getElement)=>
// {
//     if(getElement>3){
//     console.log(getElement);
//     }
// });

                //POP Method is used to remove last value from Array 
// let retrieveArray = ["Mohsin",3,5,6,7,8,"Ghaffar"];
// console.log(`Pop Value is: ${retrieveArray.pop()}`);
// console.log(retrieveArray);

        //Push Method is used to add value at the end of Array
// let retrieveArray = ["Mohsin",3,5,6,7,8,"Ghaffar"];
// retrieveArray.push(10)
// console.log(retrieveArray);


        //Slice Method is used to get specific elements new array from original Array
// let retrieveArray = ["Mohsin",3,5,6,7,8,"Ghaffar"];
// console.log(retrieveArray.slice(1,3));


            //Shift Method is used to remove first element in Array
// let retrieveArray = ["Mohsin",3,5,6,7,8,"Ghaffar"];
// retrieveArray.shift();
// console.log(retrieveArray);

        //Sort is used to sort Elements in Array
// let retrieveArray = ["Mohsin",3,5,6,7,8,"Ghaffar"];
// retrieveArray.sort();
// console.log(retrieveArray);

       //Unshift is used to add Elements in start in Array
// let retrieveArray = ["Mohsin",3,5,6,7,8,"Ghaffar"];
// retrieveArray.unshift(2,3,5);
// console.log(retrieveArray);


// let reduceMethod = [1,2,3,4,5,6];
//  let check = reduceMethod.reduce((a,b)=>a+b,0);
//  console.log(check)

        //Reduce Method is used to add all values to one value, it means to sum all Array
        //elements to one value
// let grades = [10,20,25,30,45];
// let max = grades.reduce(getMax);
// let min = grades.reduce(getMini)

// console.log(`Maximum Value: ${max}`);
// console.log(`Minimum Value: ${min}`);

// // console.log(`${total}`);
// // function sum(a , b)
// // {
// //     return a + b;
// // }
 
// function getMax(a,b)
// {
//     return Math.max(a , b);
// }
// function getMini(a , b)
// {
//     return Math.min(a , b);
// }


// let students = ["Mohsin ","Ali ","Ahsan ","Usama "];
// let stdList = students.reduce(combine);
// console.log(`${stdList}`);

// function combine(a , b)
// {
//     return (a + b);
// }

                //IndexOf is used to check element index 
// let tryIndexOf = [1,2,3,4,5];
// let getIt = tryIndexOf.indexOf(2);
// console.log(getIt);

                //FindIndex
// let tryFindIndex = [1,2,3,4,5];
// let getIt = tryIndexOf.findIndex(element=>element>=3);
// console.log(getIt);

                //Filter method is used to filter values from Array
// let grades = [10,40,30,25,35];
// let find = grades.filter((element)=>element>30);
// console.log(find);

//Task 1: Create a string variable with your name and log it to the console.
let myName = " Mohsin Ghaffar "
// console.log(myName);

//Task 2: Find the length of a string and log it to the console.
let findLength = myName.length
// console.log(findLength);

//Task 3: Convert a string to uppercase and log it to the console.
let stringUpperCase = myName.toUpperCase()
// console.log(stringUpperCase);

//Task 4: Take a string and check if it contains a 
//specific word (e.g., check if "hello" is in the string).
if(myName.includes("Ghaffar"))
{
        // console.log("True");
        
}

//Task 5: Extract the first 5 characters from a string and log it to the console.
let extract = myName.substring(1,5)
// console.log(extract);

//Task 6: Concatenate two strings and log the result.
let fname = "Mohsin"
let lname = "Ghaffar"
let fullName = `${fname} ${lname}`
let Name = fname.concat(lname)
// console.log(Name);
// console.log(fullName);

//Task 7: Replace a word in a string with another word and log the result.
// myName = "Ali"
// console.log(myName);
let replaceName = myName.replace("Mohsin", "Hussnain")
// console.log(replaceName);


//Task 8: Trim any extra spaces at the beginning and end of a string.
let trimMyName = myName.trim()
console.log(trimMyName);
// console.log(myName);

//Task 9: Split a string into an array of words (e.g., split a sentence by spaces).
let newString = "My name is Mohsin"
let splitIt = newString.split(" ")
// console.log(splitIt);

//Task 10: Combine an array of words back into a single string.
let fruits = ["Apple","is", "Sweet"]
let combine = fruits.join(" ")
console.log(combine);







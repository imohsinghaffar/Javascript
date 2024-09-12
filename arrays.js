// //Retrieval of all elements using For loop
// // let arr = [1,44,23,56,454, 34];
// // for(let i = 0;i<=arr.length; i++) 
// // {
// //     let getArrElements = arr[i];
// //     console.log(getArrElements)
// // }

// let newArray = [2,5,7,9,11,13,15];
// for(let i=0; i<newArray.length; i++)
// {
//     let addInarray = newArray[i] + 1; //For Addition
//     console.log(`New Element: ${addInarray}, Old Element: ${newArray[i]} `);
//     // let multiplyArray = newArray[i] * 5; //For Multiplication
//     // console.log(`Array After Mulitiplcation: ${multiplyArray}: `);
    
    
// }

let newArr = [1,2,3,4,5,6];

//Splice can add and remove both
//To remove just tell from which index start remove and how many elements 
//to remove e.g newArr.splice(index, how many numbers to remove)
// let arrSplice = newArr.splice(1,3);
// console.log(arrSplice);
// console.log(newArr);

//To add e.g newArr.splice(index, number of elements to remove, 
//addele1,addele2)
// let addUsingSplice = newArr.splice(2,0,"Element1","Element2","ABC");
// console.log(addUsingSplice);
// console.log(newArr);



//Slice Create new array of elements from original array
// let arrSlice = newArr.keys(1,2);
// console.log(arrSlice);

//Task 1: Create an array of your favorite fruits and log the array to the console.
let fruits = ["apple","banana","orange","grapes"];
// console.log(fruits);

//Task 2: Access the second item in an array of numbers and log it.
let findSecondItem = fruits[1];
// console.log(findSecondItem);

//Task 3: Add a new fruit to the end of your favorite fruits array 
//using the push() method.
fruits.push("Pine Apple")
// console.log(fruits);

//Task 4: Remove the last item from an array of numbers using the pop() method and log the array.
fruits.pop()
// console.log(fruits);

//Task 5: Use the shift() method to remove the first item from an array and log the result.
fruits.shift()
// console.log(fruits);

//Task 6: Use the unshift() method to add a new number to the beginning of an array and log the array.
fruits.unshift("Amrood")
// console.log(fruits);

//Task 7: Sort an array of numbers in ascending order using the sort() method.
fruits.sort()
// console.log(fruits);

//Task 8: Use the reverse() method to reverse the order of an array of strings.
fruits.reverse()
// console.log(fruits);

//Task 9: Create an array of numbers and use the map() 
//method to create a new array where each number is doubled.
let takeArr = [2,4,6,7,20,100,250]
let seeResult = takeArr.map((num)=>num*2)
// console.log(seeResult);

//Task 10: Write a function that takes an array of numbers and returns a new array 
//with only the even numbers using the filter() method.
let resultArr = []
function filterEvenNum()
{
    for(let i=0;i<takeArr.length;i++)
    {
        if(takeArr[i]%2==0)
        {
            resultArr.push(takeArr[i])
        }
        
    }
    // console.log("Yes there are some even numbers in your provided array");
    return resultArr
}
let result = filterEvenNum()
// console.log(result);

//2nd solution of task 10
takeArr = [5,10,15,20,25,30];
// console.log(takeArr);

function findEvenNumber()
{
    return takeArr.filter((num)=>{
        if(num%2==0)
        {
            return num
        }
     })
}

let Result = findEvenNumber()
// console.log(Result);


//Task11: Use the reduce() method to find the sum of all numbers in an array.
let sum = takeArr.reduce((acc, num)=>acc + num)
// console.log(sum);

//Task 12: Use the find() method to find the first number in an array that is greater than 10.
let bigNum = takeArr.find(num=>num>10)
// console.log(bigNum);



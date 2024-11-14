// for(i = 1; i<=10; i++) //outer loop
// {
//     // console.log(`Here is printed Values: ${i}`);
//     if(i==5)
//     {
//         // console.log("Continue execpt 5");
//         continue;
//     }
//     for(j = 10; j<=20; j++) //inner loop
//     {
//         // console.log(j);
//         if(j==15)
//         {
//             // console.log("15 Detected!");
//             break;
            
//         }
        
//     }
    
    
// }

// let fruitsArray = ["Banana", "Mango", "Oranges"];
// // console.log(`Array Length is: ${fruitsArray.length}`);

// for(i = 0; i<fruitsArray.length; i++)
// {
//     // console.log(`${i+1}: ${fruitsArray[i]}`);
//     if(fruitsArray[i] == "Mango")
//     {
//         // console.log(`--> ${i+2}: Array Broked`);
//         // console.log(`--> Array Broked`);
//         continue;
//     }
// }

// //Write a program that prints the numbers from 1 to 100. 
// //For multiples of 3, print "Fizz" instead of the number, 
// //and for multiples of 5, print "Buzz". For numbers that are 
// //multiples of both 3 and 5, print "FizzBuzz".
// for (let index = 1; index <= 100; index++) {
//     // console.log(index)
//     if(index%3===0 && index%5===0)
//         {
//             // console.log(index, "FuzzBuzz");
//         }
//     else if(index%3===0)
//     {
//         // console.log(index, "Fuzz");
//     }
//     else if(index%5===0)
//     {
//         // console.log(index, "Buzz");
//     }
//     else{
//         // console.log(index, "Not Divisible");
//     }
// }

// //Task to find factorial
// function Calcfactorial(num){
//     let result = 1;
//     for(let i = 1;i<=num;i++)
//     {
       
//         result = result*i
//         // console.log(result);
        
//     }
//     return result
// }
// console.log(Calcfactorial(3))

// // Task 1: Write a function findLongestWord(arr) that takes an array of words 
// // and uses a for loop to find the longest word in the array.
// //  and should return "watermelon".

// let longestEle = "";
// function findLongestWord(anArray)
// {
//     for(let i = 0; i<anArray.length; i++)
//         {
//             if(anArray[i].length > longestEle.length)
//             {
//                 longestEle = anArray[i]
//             }
//         }
//         return longestEle;
//     }
// console.log(findLongestWord(["apple", "banana", "watermelon", "peach"]))

//ask 2: Write a function sumOfSquares(arr) that takes an array of numbers, squares each number, and returns the sum of all the squares using a for loop.

//sumOfSquares([1, 2, 3]) should return 14 because =14.


function sumOfSquares(Array)
{
    let sum = 0;
    for(let i=0; i<Array.length; i++)
    {
         let square = Array[i]*Array[i];
          sum += square;
        }
    console.log(sum);    
}
sumOfSquares([1,2,3])

//Task 3: Write a function countOccurrences(arr, target) that takes an array 
//and a target element, then uses a for loop to count how many times the target
// element appears in the array.
// should return 3.
function countOccurrences(arr, target)
{
    let count = 0;
    for(let i = 0; i<arr.length; i++)
        {
            if(arr[i]==target)
                {
                   count+= 1;
                }
            }
        console.log(count);
        
        }
    countOccurrences(["a", "b", "a", "c", "a"], "a") 

    //------------------------------------------------------

//Task 4: Write a function filterNumbers(arr) that uses a for loop to filter
// out all non-numeric values from an array and returns an array with only numbers.
// Hint: Use typeof to check for numbers.
// should return [1, 2, 3].

//1st way
// function filterNumbers(arr)
// {
//     let number = [];
//     for(let i =0; i<arr.length;i++)
//         {
//             if(typeof arr[i] === "number")
//                 {
//             number.push(arr[i])
//         }
//     }
//     return number;
// }
// let result = filterNumbers([1, "hello", 2, true, 3]) 
// console.log(result);

// 2nd way
function filterNumbers(arr)
{
    return arr.filter(ele=>typeof ele==="number")
}
let result = filterNumbers([1, "hello", 2, true, 3]) 
console.log(result);

//---------------------------------------------------------------
//Task 5: Write a function arrayDifference(arr1, arr2) that returns an array 
//containing only the elements that are in arr1 but not in arr2.
//Hint: Use indexOf to check if an element from arr1 is not in arr2.
///should return [1, 2].
function arrayDifference(arr1,arr2)
{
    let diff1 = arr1.filter(num=>!arr2.includes(num))
    let diff2 = arr2.filter(num=>!arr1.includes(num))
    return [...diff1, ...diff2];
}
console.log(arrayDifference([1, 2, 3, 4],[3, 4, 5]))
//----------------------------------------------------------
//Task: Write a function groupByFirstLetter(arr) that takes an array 
//of strings and groups them by their first letter. Use an object to store the grouped arrays.
//groupByFirstLetter(["apple", "banana", "cherry", "apricot"]) 
//should return { a: ["apple", "apricot"], b: ["banana"], c: ["cherry"] }.

function groupByFirstLetter(arr)
{
    let result = {};
    arr.forEach(ele=>
    {
        let first_letter = ele[0];
        
        if(!result[first_letter])
        {
            result[first_letter] = []; //result[a] = [] , a:[]
        }
        result[first_letter].push(ele)
    })
    return result

}   
console.log(groupByFirstLetter(["apple", "banana", "cherry", "apricot"]))

//Task: Write a function calculateWordFrequencies(arr) that takes an 
//array of words and returns an object representing the frequency of each word in the array.
//calculateWordFrequencies(["apple", "banana", "apple", "orange", "banana", "banana"]) 
//should return { apple: 2, banana: 3, orange: 1 }.
function calculateWordFrequencies(arr)
{
    let result = {};
    arr.forEach(element =>
    {
        if(result[element]) //result[apple]
        {
            result[element]+=1;
        }
        else{
            result[element] = 1
        }
    })
    console.log(result);
    
}
calculateWordFrequencies(["apple", "banana", "apple", "orange", "banana", "banana"])
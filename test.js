fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
// .then(actual_data=>
// {
//     actual_data.forEach(user => {
//         console.log(user.username); 
//     });
// console.log(actual_data);

// })

//Task
let sumNestedArrays = ([[1, 2, 3], [4, 5], [6, 7, 8]])  // 36
sumNestedArrays.forEach(ele => {
    ele.reduce((sum, num) => sum + num, 0)
})

//Task 1: Filter and Map
//Given an array of numbers, filter out the odd numbers and then double the even numbers.
// Input:
// [1, 2, 3, 4, 5, 6]
// Output:
// [4, 8, 12]
let array = [1, 2, 3, 4, 5, 6];
let doubleNum = array.filter(num => num % 2 == 0)
    // {
    //     if(num%2==0)
    //     {
    //         return num;
    //     }

    // })
    .map(dnum => dnum * 2)
// {
//     dnum*=2;
//     return dnum

// })
console.log(doubleNum);


// ask 2: For Loop with Object
// You have an object where the keys are item names and the values are their prices. 
//Write a function to return the total cost of all items.
// Output: 100
let obj = {
    apple: 50,
    banana: 30,
    orange: 20
}

function findSum(obj) {
    let sum = 0;
    let values = Object.values(obj)
    // values.forEach(ele=>
    // {
    //     sum+=ele;
    // })
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}
let result = findSum(obj)
console.log(result);

// Task 3: Nested Array with Map
// Description:
// You have an array of arrays where each sub-array represents a student's scores. 
// Write a function to calculate the average score for each student.
// Input:
// [[80, 90, 70], [60, 75, 85], [95, 85, 100]]
// Output:
// [80, 73.33, 93.33] (rounded to 2 decimals)
let input = [[80, 90, 70], [60, 75, 85], [95, 85, 100]];
let sums = [];
function calcAvg() {
    for (let i = 0; i < input.length; i++) {
        let sum = 0;
        let avg;
        for (let j = 0; j < input[i].length; j++) {
            sum += input[i][j];
        }
        avg = sum / input[i].length;
        if (i === 1 || i === 2) {
            avg = parseFloat(avg.toFixed(2))
        }
        sums.push(avg);
    }
    console.log(sums);
}
// calcAvg()

let sumarr = [];
let input2 = [[80, 90, 70], [60, 75, 85], [95, 85, 100]];
input2.map(ele => {
    let sum = 0;
    let avg;
    for (let i = 0; i < ele.length; i++) {
        sum += ele[i];
    }
    avg = sum / ele.length;
    if (input2.indexOf(ele) == 1 || input2.indexOf(ele) == 2) {
        avg = parseFloat(avg.toFixed(2))
    }
    sumarr.push(avg)
})
console.log(sumarr);


let books = 
[
    { title: "Book A", available: true },
    { title: "Book B", available: false },
    { title: "Book C", available: true }
  ]
  books.forEach(bk=>
  {
    if(bk.available==true){
        console.log(bk.title); 
    }
  })
  

//Task 5: Reduce with Filter
//Given an array of numbers, filter out all negative numbers and calculate the 
//sum of the remaining numbers.
// Input:
// [-5, 10, -2, 20, -3, 30]
// Output:
// 60

let numArr = [-5, 10, -2, 20, -3, 30];
let sum = 0
numArr.filter(num =>
{
    if(num>0)
    {
        sum+=num;
    }
})
console.log(sum);


// Task 6: Combining For Loop and Function
// Write a function that takes an array of strings and 
//returns the longest string. Use a for loop to find the result.
// ["apple", "watermelon", "banana", "cherry"]
// Output: "watermelon"

let fruitArr = ["apple", "watermelon", "banana", "cherry"];
function longest(Array)
{
    let empArr = "";
    for(let i=0;i<Array.length;i++)
    {
        if(Array[i].length>empArr.length)
        {
            empArr = Array[i];
        }
    }
    return empArr
}
console.log(longest(fruitArr));

// Task 1: Fetch Data and Display
// Write an async function that fetches data from https://jsonplaceholder.typicode.com/posts 
//and logs the titles of the first 5 posts.

async function fetchData() {
    let APIHere = await fetch("https://jsonplaceholder.typicode.com/posts");
    let getJSONData = await APIHere.json();
    return getJSONData;
    
}
fetchData()
.then(data=>{
        for(let i=0; i<5;i++)
        {
            console.log(data[i].title);
        }
})
.catch(error=>{
    console.log(error);
})

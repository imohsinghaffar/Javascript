// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(data => data.json())
// // .then(actual_data=>
// // {
// //     actual_data.forEach(user => {
// //         console.log(user.username); 
// //     });
// // console.log(actual_data);

// // })

// //Task
// let sumNestedArrays = ([[1, 2, 3], [4, 5], [6, 7, 8]])  // 36
// sumNestedArrays.forEach(ele => {
//     ele.reduce((sum, num) => sum + num, 0)
// })

// //Task 1: Filter and Map
// //Given an array of numbers, filter out the odd numbers and then double the even numbers.
// // Input:
// // [1, 2, 3, 4, 5, 6]
// // Output:
// // [4, 8, 12]
// let array = [1, 2, 3, 4, 5, 6];
// let doubleNum = array.filter(num => num % 2 == 0)
//     // {
//     //     if(num%2==0)
//     //     {
//     //         return num;
//     //     }

//     // })
//     .map(dnum => dnum * 2)
// // {
// //     dnum*=2;
// //     return dnum

// // })
// console.log(doubleNum);


// // ask 2: For Loop with Object
// // You have an object where the keys are item names and the values are their prices. 
// //Write a function to return the total cost of all items.
// // Output: 100
// let obj = {
//     apple: 50,
//     banana: 30,
//     orange: 20
// }

// function findSum(obj) {
//     let sum = 0;
//     let values = Object.values(obj)
//     // values.forEach(ele=>
//     // {
//     //     sum+=ele;
//     // })
//     for (let i = 0; i < values.length; i++) {
//         sum += values[i];
//     }
//     return sum;
// }
// let result = findSum(obj)
// console.log(result);

// // Task 3: Nested Array with Map
// // Description:
// // You have an array of arrays where each sub-array represents a student's scores. 
// // Write a function to calculate the average score for each student.
// // Input:
// // [[80, 90, 70], [60, 75, 85], [95, 85, 100]]
// // Output:
// // [80, 73.33, 93.33] (rounded to 2 decimals)
// let input = [[80, 90, 70], [60, 75, 85], [95, 85, 100]];
// let sums = [];
// function calcAvg() {
//     for (let i = 0; i < input.length; i++) {
//         let sum = 0;
//         let avg;
//         for (let j = 0; j < input[i].length; j++) {
//             sum += input[i][j];
//         }
//         avg = sum / input[i].length;
//         if (i === 1 || i === 2) {
//             avg = parseFloat(avg.toFixed(2))
//         }
//         sums.push(avg);
//     }
//     console.log(sums);
// }
// // calcAvg()

// let sumarr = [];
// let input2 = [[80, 90, 70], [60, 75, 85], [95, 85, 100]];
// input2.map(ele => {
//     let sum = 0;
//     let avg;
//     for (let i = 0; i < ele.length; i++) {
//         sum += ele[i];
//     }
//     avg = sum / ele.length;
//     if (input2.indexOf(ele) == 1 || input2.indexOf(ele) == 2) {
//         avg = parseFloat(avg.toFixed(2))
//     }
//     sumarr.push(avg)
// })
// console.log(sumarr);


// let books =
//     [
//         { title: "Book A", available: true },
//         { title: "Book B", available: false },
//         { title: "Book C", available: true }
//     ]
// books.forEach(bk => {
//     if (bk.available == true) {
//         console.log(bk.title);
//     }
// })


// //Task 5: Reduce with Filter
// //Given an array of numbers, filter out all negative numbers and calculate the 
// //sum of the remaining numbers.
// // Input:
// // [-5, 10, -2, 20, -3, 30]
// // Output:
// // 60

// let numArr = [-5, 10, -2, 20, -3, 30];
// let sum = 0
// numArr.filter(num => {
//     if (num > 0) {
//         sum += num;
//     }
// })
// console.log(sum);


// // Task 6: Combining For Loop and Function
// // Write a function that takes an array of strings and 
// //returns the longest string. Use a for loop to find the result.
// // ["apple", "watermelon", "banana", "cherry"]
// // Output: "watermelon"

// let fruitArr = ["apple", "watermelon", "banana", "cherry"];
// function longest(Array) {
//     let empArr = "";
//     for (let i = 0; i < Array.length; i++) {
//         if (Array[i].length > empArr.length) {
//             empArr = Array[i];
//         }
//     }
//     return empArr
// }
// console.log(longest(fruitArr));

// // Task 1: Fetch Data and Display
// // Write an async function that fetches data from https://jsonplaceholder.typicode.com/posts 
// //and logs the titles of the first 5 posts.

// async function fetchData() {
//     let APIHere = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let getJSONData = await APIHere.json();
//     return getJSONData;

// }
// fetchData()
//     .then(data => {
//         for (let i = 0; i < 5; i++) {
//             // console.log(data[i].title);
//         }
//     })
//     .catch(error => {
//         console.log(error);
//     })
// //-------------------------------------------------
// // Task: Fetch User Information and Filter
// // Description:
// // Write an async function that fetches data from https://jsonplaceholder.typicode.com/users. 
// //Extract and log the names of users who live in a city starting with the letter 'S'.
// async function fetchUserInfo() {
//     let API = await fetch("https://jsonplaceholder.typicode.com/users");
//     let getUserJSON = await API.json();
//     return getUserJSON;
// }
// fetchUserInfo()
//     .then(data => {
//         data.filter(user => {
//             // console.log(user.address.city);
//             if (user.address.city.startsWith('S')) {
//                 console.log(`Name: ${user.name}`);
//             }
//         })
//     })
//     .catch(error => {
//         console.log(error.message);
//     })

// //Promises
// // Task 4: Simple Promise
// // Create a function that returns a promise. If a random number is greater than 0.5, 
// // resolve the promise with "Success". Otherwise, reject it with "Failure".
// function learnPromise() {
//     let randomNum = Math.random().toFixed(2);
//     console.log(randomNum);

//     let newPr = new Promise((resolve, reject) => {
//         if (randomNum > 0.5) {

//             resolve("Success")
//         }
//         else {
//             reject("Failure");
//         }
//     })
//     newPr.
//         then(data => {
//             console.log(data);

//         })
//         .catch(error => {
//             console.log(error);
//         })
// }
// learnPromise()
// //----------------------------
// //index.html
// // Task 8: Todo List
// // Build a simple to-do list where:
// // You can add new items.
// // You can remove an item by clicking on it.
// let getInput = document.querySelector(".input");
// let btnClick = document.querySelector(".btn");
// let accessUl = document.querySelector('.ul');
// function todo() {
//     if (getInput.value) {
//         let createlist = document.createElement("li");
//         createlist.innerHTML = getInput.value.toUpperCase();
//         createlist.setAttribute("class", "li-style newEle");
//         accessUl.appendChild(createlist)

//         let deleteBtn = document.createElement('button');
//         deleteBtn.innerHTML = 'Delete';
//         deleteBtn.setAttribute('class','delBtn')

//         createlist.appendChild(deleteBtn);
//         getInput.value = "";

//         deleteBtn.addEventListener('click', () => {
//             accessUl.removeChild(createlist);
//             if(deleteBtn.event.key==="mouseover")
//             {
//                 document.write("Success");
//             }
//         })

//     } else {
//         alert("There is something wrong!");
//     }
// }

// btnClick.addEventListener("click", todo)
// getInput.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         todo()
//     }
// })

let products = [
    {name: "Apple",price: 50},
    {name: "Banana",price: 30},
    {name: "Orange",price: 20},
    {name: "Mango",price: 40},
    {name: "Grape",price: 60},
    {name: "Strawberry",price: 70},
    {name: "Watermelon",price: 80}
]
let filteredProducts = products.filter(product=>{
    return product;
    })
filteredProducts.forEach(product=>{
    console.log(`Product Price: ${product.price}`);
})

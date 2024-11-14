//ForEach Loop
let anArray = ["Ali", "Mohsin", "Hussnain", "Abdullah"];
//Now apply foreach loop
anArray.forEach(function(elements)
{
    // console.log(elements); //1st way
})

anArray.forEach((arrayElements)=>{
    // console.log(arrayElements); //2nd way
    
})

function printMe(items)  //3rd way
{
    // console.log(items);    
}

anArray.forEach(printMe) //3rd way

//Now we will see how to apply froeach on objects in array

let arrayObjects = [
    {
        language: "JavaScript",
    },
    {
        language: "Java",
    },
    {
        language: "Python",
    },
]

arrayObjects.forEach((arrayElements)=>{ //this syntax is used in databases mostly
    //to retrieve values.
    // console.log(arrayElements.language);
    
})

let forEachArray = ["Ali", "Mohsin", "Hussnain", "Abdullah"];
forEachArray.forEach((elements, index)=>{
    try {
        console.log(`Element ${index} is: ${elements}`);
        
    } catch (error) {
        console.log(error);
        
    }
})

// Task
// Use forEach to convert each string to uppercase and store in a new array
let empArray = [];
const words = ["hello", "world", "javascript", "rocks"];
words.forEach(word=>
{
    let capitalLetters = word.toUpperCase();
    empArray.push(capitalLetters);
})

console.log(empArray);

// Task
// Use forEach to calculate the sum of all numbers in the array
const numbers = [1, 2, 3, 4, 5];
let sum = 0
numbers.forEach(result=>
{
    sum+=result;
})
console.log(`Total Sum is: ${sum}`);

// Task
// Use forEach to count how many times "banana" appears in the array
const items = ["apple", "banana", "orange", "banana", "apple", "banana"];
const target = "banana";
let count = 0;
items.forEach(item=>
{
    if(item==target)
    {
        count++
    }
})
console.log(count);



//Task Given an array of numbers, use forEach to print each number multiplied by 2.

// [1, 2, 3] → Logs 2, 4, 6.
let array = [1,2,3]
array.forEach(ele=>
    {
        console.log(ele*2);
        
    });

//Task: Given an array of words, use forEach to print the length of each word.
// → Logs 5, 6, 6.

let fruits = ["apple", "banana", "cherry"] 
fruits.forEach(le=>
    {
        console.log(le.length);
        
    })

// Task 4: Given an array of objects representing students, 
// use forEach to print each student's name and grade.
// → Logs "Alice: A", "Bob: B".
let std_record = [{ name: "Alice", grade: "A" }, { name: "Bob", grade: "B" }];
std_record.forEach(record => 
{
    // console.log(record);
    // let[name1, grade1]  =  record;
    // let[name2, grade2]  =  record;
    // console.log(record);
    console.log(`${record.name}: ${record.grade}`);
})

//Task
// Use forEach to count the total number of even numbers in an array.
// → Logs the total count of even numbers, 3.
let findEven = [1, 2, 3, 4, 5, 6];
findEven.forEach(even=>{
    if(even%2==0)
        {
            console.log(even);
        }
})


// Task: Given an array of numbers, use forEach to create a new array containing 
// only the positive numbers.
// → Logs [2, 4].
let nums = [-1, 2, -3, 4];
let positive = [];
nums.forEach(num=>{
    if(num>0)
    {
        positive.push(num);
    }
})
console.log(positive);

//Task: Given an array of product objects, each with properties name and price, use forEach to print out products that cost more than $20.
// → Logs "Book: 25".
let findBook = [{ name: "Pen", price: 5 }, { name: "Book", price: 25 }];
findBook.forEach((bk)=>{
    if(bk.price>20)
    {
        console.log(`${bk.name}: ${bk.price}`);
    }
})

// Task: Given an array of words, use forEach to find and print any words 
//that start with the letter "a".
//→ Logs "apple", "avocado".
let findFruit = ["apple", "banana", "avocado", "cherry"];
findFruit.forEach(fruit=>
{
    if(fruit[0]=="a")
    {
        console.log(fruit);
    }
})

// Task: Create a function that takes an array of numbers and uses 
//forEach to find the sum of all numbers divisible by 3.
//→ Logs 45.
let findNum = [3, 6, 9, 12, 15, 20];
let Sum = 0;
findNum.forEach(num =>
{
    if(num%3==0)
    {
        Sum+=num
    }
})
console.log(Sum);

// Task: Given an array of mixed data types (e.g., numbers, strings, booleans), 
// use forEach to create two separate arrays: one for strings and one for numbers.
// → Logs ["apple", "banana"] and [1, 3].
let arr =  [1, "apple", true, 3, "banana"];
let string = [];
let number  = [];
arr.forEach(find=>
{
    if(typeof find == "string")
    {
        string.push(find);
    }
    if(typeof find == "number")
    {
        number.push(find);
    }
    
})
console.log(string);
console.log(number);



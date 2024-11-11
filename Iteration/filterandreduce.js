//Major difference between forEach and filter is
//filter return value and forEach doesn't so we can save filter in a varible
let anArray = [23,45,24,56,87];
let result = anArray.filter((element)=> element>23) //everytime when we will
//use brackets in call back function{} then we must return otherwise get empty 
//array like this []. (1)
result = anArray.filter((arrayElements)=>
    {
        return arrayElements > 45; // like this (1)
    })
    // console.log(result);
    
    //------as forEach doesn't return anything but still 
    //we have a way to save in array--------------------
let emptyArray = [];
anArray.forEach((items)=>{
    if(items>45)
    {
        let result = emptyArray.push(items)
        // console.log(result);
        
    }
})
// console.log(emptyArray);



//---------------More on Filter--------------------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let saveBooksElements = [];
books.forEach((values)=>
{
    if(values.genre==="Fiction" && values.title==="Book One")
    {
        saveBooksElements.push(values.edition);
    }
})

// console.log(saveBooksElements); //This is how we can retrieve values from
//database specifically what we needed.

//--------------------Now will see with filter---------------------

let checkResult = books.filter((bk)=>{
    return bk.title==="Book One"&&bk.edition===2004; 
})

// console.log(checkResult); //this is how we can retrieve data using objects

//------------------------Add using Map----------------------
let arrayForReduce = [1,2,3,4,5,6,7,8,9,10]
let add = arrayForReduce.map((num)=>num + 10)
// console.log(add); //this is how we can add using map

//-----------------Chaining-----------------------------------
//in chaing we can use map, filter together

let getChainValues = arrayForReduce
.map((num)=>num*10) //[10,20,30,40,50,60,70,80,90,100]
.map((num)=>num+10) //[20,30,40,50,60,70,80,90,100,110]
.filter((num)=>num>50) //[60,70,80,90,100]

// console.log(getChainValues); //This is how chaining works

//-----------------Reduce Method-----------------------------
const nums = [1,2,3,4,5,6,7,8,9,10];
let reduceValue = nums.reduce((acc, currentValue)=>
    {
        // console.log(acc, "and", currentValue);
        // return acc+currentValue;
    },0);
// console.log(reduceValue);

// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); // Output: 10

// ---------------------Filter Tasks---------------------------
// Task 1
// Output: [2, 4, 6, 8, 10]
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let see = num.filter(evenNo=>evenNo%2==0)
// console.log(see);

// Task2
// Output: [1, 3, 5, 7, 9]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let findOdd = numbers.filter(odd => odd%2==1)
// console.log(findOdd);

//Task3
// Output: ['apple', 'grape']
let words = ['apple', 'banana', 'cherry', 'date', 'grape'];
const substring = 'ap';
// let findFruit = words.filter((fruit, index) => index===0 || index===1)
let findSubString = words.filter(data=>data.includes(substring)) //Find SubString
// console.log(findSubString);


// Task
// Output: [{ name: 'Jane', age: 35 }, { name: 'Bill', age: 40 }]
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 35 },
    { name: 'Bill', age: 40 },
    { name: 'Alice', age: 28 }
  ];

  let findPeople = people.filter(isAge => isAge.age>30)
//   console.log(findPeople);

  //Task
  // Output: [1, 2, 3, 4, 5, 6, 7]
  const numbers = [1, 2, 2, 3, 4, 5, 1, 6, 7, 4];
  let findUniqueNo = numbers.filter((value, index, self) =>{
    return self.indexOf(value) === index;
  })  
  
//   console.log(findUniqueNo);

// Task
// Output: [199, 349, 450]
const prices = [199, 50, 349, 25, 450, 120];
let findNo = prices.filter(num=> {
    return num >= 199
})
// console.log(findNo);

// Task: Filter only elements which have any value
// Output: ['apple', 'banana', 'cherry']
const strings = ['apple', '', 'banana', ' ', 'cherry'];
let removeSpace = strings.filter(remove => remove.trim()!=="")
// console.log(removeSpace);

// Task
const number = [5, 10, 15, 20, 25, 30];
const lowerBound = 10;
const upperBound = 25;
let checkNo = number.filter(num => num>=lowerBound && num<=upperBound)
// console.log(checkNo);



// Output: ["Bret", "Antonette", "Samantha"]
const users = [
    { id: 1, username: "Bret", email: "Sincere@april.biz" },
    { id: 2, username: "Antonette", email: "Shanna@melissa.tv" },
    { id: 3, username: "Samantha", email: "Nathan@yesenia.net" }
  ];
const usernames = users.map(u => u.email);
// console.log(usernames);

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 400 }
];

const productDetails = products.map(product => {
  return {...product,discountedPrice: product.price * 0.9 // applying 10% discount
};
});

// console.log(productDetails);



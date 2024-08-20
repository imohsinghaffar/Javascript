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
.map((num)=>num*10)
.map((num)=>num+10)
.filter((num)=>num>50)

// console.log(getChainValues); //This is how chaining works

//-----------------Reduce Method-----------------------------
const nums = [1,2,3,4,5,6,7,8,9,10];
let reduceValue = nums.reduce((acc, currentValue)=>
    {
        console.log(acc, "and", currentValue);
        return acc+currentValue;
    },0);
// console.log(reduceValue);

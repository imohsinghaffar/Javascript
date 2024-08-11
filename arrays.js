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
let arrSlice = newArr.slice(2,5);
console.log(arrSlice);



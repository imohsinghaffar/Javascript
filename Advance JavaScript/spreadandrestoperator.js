//Rest Parameter 
//Spread operator
// let num1 = [3,5,7,9]
// let sum = 0
// function add(...num)  //Rest Parameter 
// {
//     console.log(`nums: ${num}`);
//     let sum = 0;
//     for(let i=0; i<num.length;i++)
//     {
//         sum = sum + num[i]
//     }
//     return sum
    

// }

// let findResult = add(...num1) //3,5,7,9 spread operator
// console.log(findResult);

//Spread and Rest Operator in more advanced
let arr = [12,26,76,100,146];
// let sumArray;
function sum(total, ...arg) {
    for (let i = 0; i < arg.length; i++) {
        total += arg[i];
        console.log(total)
    }
    
}
sum(10, ...arr)
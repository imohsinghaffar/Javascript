//Rest Parameter 
//Spread operator
let num1 = [3,5,7,9]
let sum = 0
function add(...num)  //Rest Parameter 
{
    console.log(`nums: ${num}`);
    let sum = 0;
    for(let i=0; i<num.length;i++)
    {
        sum = sum + num[i]
    }
    return sum
    

}

let findResult = add(...num1) //3,5,7,9 spread operator
console.log(findResult);



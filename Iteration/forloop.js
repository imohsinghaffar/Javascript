for(i = 1; i<=10; i++) //outer loop
{
    // console.log(`Here is printed Values: ${i}`);
    if(i==5)
    {
        // console.log("Continue execpt 5");
        continue;
    }
    for(j = 10; j<=20; j++) //inner loop
    {
        // console.log(j);
        if(j==15)
        {
            // console.log("15 Detected!");
            break;
            
        }
        
    }
    
    
}

let fruitsArray = ["Banana", "Mango", "Oranges"];
// console.log(`Array Length is: ${fruitsArray.length}`);

for(i = 0; i<fruitsArray.length; i++)
{
    // console.log(`${i+1}: ${fruitsArray[i]}`);
    if(fruitsArray[i] == "Mango")
    {
        // console.log(`--> ${i+2}: Array Broked`);
        // console.log(`--> Array Broked`);
        continue;
    }
}

//Write a program that prints the numbers from 1 to 100. 
//For multiples of 3, print "Fizz" instead of the number, 
//and for multiples of 5, print "Buzz". For numbers that are 
//multiples of both 3 and 5, print "FizzBuzz".
for (let index = 1; index <= 100; index++) {
    // console.log(index)
    if(index%3===0 && index%5===0)
        {
            // console.log(index, "FuzzBuzz");
        }
    else if(index%3===0)
    {
        // console.log(index, "Fuzz");
    }
    else if(index%5===0)
    {
        // console.log(index, "Buzz");
    }
    else{
        // console.log(index, "Not Divisible");
    }
}

//Task to find factorial
function Calcfactorial(num){
    let result = 1;
    for(let i = 1;i<=num;i++)
    {
       
        result = result*i
        // console.log(result);
        
    }
    return result
}
console.log(Calcfactorial(3))

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
console.log(`Array Length is: ${fruitsArray.length}`);

for(i = 0; i<fruitsArray.length; i++)
{
    console.log(`${i}: ${fruitsArray[i]}`);
    if(fruitsArray[i] == "Mango")
    {
        console.log(`Array Broked`);
        break;
        
    }
}
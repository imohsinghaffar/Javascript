let takeObject = 
{
    name: "mohsin",
    age: 25,
    address: "Wurzburg"
}

function objectFunc(anyobject)
{
    console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}, Address: ${anyobject.address}`);
    
}

// objectFunc(takeObject); //we can do in both way.
// objectFunc({
//     name:"Ali",
//     age: 29,
//     address: "SKG"
// })

let arrFunction = [200,599,288,232];
function arrFunc(anyArray)
{
    console.log(anyArray[2]);
    
}

// arrFunc(arrFunction)   //Same we can use both ways
// arrFunc([100,499,2343,23434,4567534]);


//sometimes we dont how many values our function have to calculate for that we use
//spread operator/rest operator ....
function restoperator(...num1)
{
    return num1;
}
console.log(restoperator(100,200,300,400,500));
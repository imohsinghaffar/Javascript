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
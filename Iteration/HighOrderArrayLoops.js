//High Order Array Loops
//String, Objects and Arrays are iterators.
let myArray = [120, 250, 234, 654, 787];
for(const arrIndex of myArray)
{
    // console.log(arrIndex);
    
}

let stringIs = "Mohsin Ghaffar";
for(let stringChar of stringIs)
{
    // console.log(`Each Character is: ${stringChar}`);
}

let newArray = [1,2,3,4,5];
for (const values of newArray) {
    // console.log(values);
    
}

let newObject = 
{
    name: "Mohsin Ghaffar",
    age: 25,
    address: "Wurzburg"
}

//ForOF Loop
// for (const element of newObject) { //here Object is pointing to current object, this is
//     //is not a builtin object
    
// }

//Again Revise 
let takeArray = [1,2,3,4,5]; 
//Now apply forof loop
for (const arrayElements of takeArray) {
    // console.log(arrayElements); //This will print all the array elements
    
}
//Now check for string
let myStr = "I am learning JavaScript";
for (const myStringChar of myStr) {
    // console.log(myStringChar); //Now here it will printout each character of string 
}


//Map
const map = new Map(); //This is object in JS, Map don't repeat or duplicate any
//value. 
map.set("Greet:","Hello"); //First parameter is key and 2nd is value of that key
map.set("Pak:","Pakistan");
map.set("DuetchLand:","Germany");

for (const [key, value] of map) {
    console.log(`key is ${key} and its value is ${value}`); //This will printout all values in array like
    //['greet', 'Hello'], we dont want in this way so we will do array destructure
    // for that we will use [key, value].
    
}

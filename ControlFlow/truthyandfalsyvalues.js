                        //Truthy Values
//1, "false", "0",true, [], {}, function(){}, " "
// let check = function(){};we will always check array by knowing its values 
//like this
let arr = [];
if(arr.length===0)
{
    // console.log("This is empty array");
    
}
//same in objects
let obj = {};
if(Object.keys(obj).length===0)
{
    // console.log("This object is empty");
}

// let check = []; 
let check = " ";
if(check)
{
    // console.log("This is truthy value");
    
}
else{
    // console.log("Falsy Value");
    
}

//falsy Values:
//false, 0, -0, BigInt on, "", undefined, NUll, NaN

//Nullish Colecsing Operator (??) : null undefined
let val1;
val1 = 5 ?? 9; //This operator is used in database, in this case it will pick
//first value but incase of null, it will get 2nd values which is 100 below.
let val2;
val2 = null ?? 100; //This operator is used to show 2nd value if there is any null
//value because we don't want to show null to users.  
console.log(val2);

//Tertiary Operator vs Nullishing : Both are different
//condition ? true : false e.g
val2 ? console.log("True") : console.log("False")



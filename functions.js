function student(name, age)
{
    console.log(`Your name is ${name}, Your age is ${age}`);
}

function add(num1 = 5, num2 = 2) // we can also pass random values to parameter incase we don't
//give values as arguments then random values be used as a result. if provided it will overwrite it.
{
    // console.log(num1 + num2);
    return num1 + num2;
    let check //precautions: Every statement below return will not execute untill it moved above
    //return. Keep in mind, this is important.
}
student("Mohsin", 25);
let seeResult = add(10, 25);
//here if we print seeResult we will get undefined because we have not
//return anything so everytime when we have to save result of a function in variable we have to
// return it first otherwise we will get undefined. it is used to reuse final result to any other
//place as well. This is the main difference between return and without return. 
// console.log(seeResult); 
//if we comment this line it will not give any output because of return.

if(!seeResult)
{
    console.log("Please use return to print it");
    
}
else{
    console.log(seeResult);
    
}
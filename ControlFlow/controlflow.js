//We will learn about how scope work, how our code work in a flow.
//if-else statement
if(2!=3) 
   { 
    // console.log("True");
   } //so what it means block is a scope {} anything declared in scope cannot be
   //accessed outside of block.
   //Var still allows us to use outside the scope so we always use let and const

let std_id = 101;
if(std_id===101)
{
    // var std_name = "Mohsin";
    // console.log(std_name);
    
}
// console.log(std_name = "Ali");// here we can see we have used stdname outside
//the scope of if, that is not true/recommended so always we have to use let and const.

//Now check with const and let
if(std_id===101)
{
    let std_name = "Mohsin";
    // console.log(std_name);
}

// console.log(`Student Name is: ${std_name}`);

//Now we will check how in real we use these statements
let userLoggedIn = true;
let userDebitCard  =true;
if(userLoggedIn && userDebitCard)
{
    console.log("You are allowed to shopping");
    
}
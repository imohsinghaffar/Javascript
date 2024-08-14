function one()
{
    let userOne = "Mohsin Ghaffar"; //closure is to use variable of parent function in child
    function two()
    {
        let userTwo = "Ali";
        // console.log(userOne);
        
    }
    //  console.log(userTwo); becuase of scope it will get error.
     two()
}
one()

if(true)
    {
    let username = "Mohsin";
    if(username==="Mohsin")
    {
        let lastName = " Ghaffer";
        // console.log(username + lastName);
        
    }

}

// console.log(addOne(5))
function addOne(num)
{
 return num + 1;
}

console.log(addTwo(7))
let addTwo = function(num) //this is also called expression means to declare variable and pass
//function in it and we cannot call it before initialization. it will get error.  but in normal
//function we can do this.                                                                                                                                                                                                                                                                                                                
{
    return num +2;
}

//
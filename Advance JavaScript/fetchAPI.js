
fetch('https://api.github.com/users/hiteshchoudry')
.then((response)=>{
    if(!response)
        {
            console.log("There is any error");
        } 
    return response.json();
     
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>
{
    console.log(error);
    
})
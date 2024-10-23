
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

//Async code is used in these cases:
//fetch, XMLHttpRequest, axios,promises, setttimeout, setinterval
//When these run in result of these callback, then catch, async await 
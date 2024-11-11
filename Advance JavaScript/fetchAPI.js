
// fetch('https://api.github.com/users/hiteshchoudry')
// .then((response)=>{
//     if(!response)
//         {
//             console.log("There is any error");
//         } 
//     return response.json();
     
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>
// {
//     console.log(error);
    
// })

//Async code is used in these cases:
//fetch, XMLHttpRequest, axios,promises, setttimeout, setinterval
//When these run in result of these callback, then catch, async await 

// Learning more about Fetch 
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>{
//     return response.json();
// })
// .then((data)=>
// {
//     // const user = data.find(u => u.username === "Bret");
//     // console.log(user);
//     console.log(data);  
// })

//Task 2: Fetch and Display Specific Property
//Fetch the list of users again from https://jsonplaceholder.typicode.com/users.
//Log only the username and email of each user in the array to the console.
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((reponse)=>
//     {return reponse.json()
//     })
// .then((data)=>
// {
//     let finalData = data.filter(u =>  u.username ==="Moriah.Stanton" 
//     && u.email==="Rey.Padberg@karina.biz")
//     console.log(finalData);
// })


// Task 3: Find a Specific User
// Fetch the list of users and use .find() to locate a user by their username.
// For example, find and log the user with username: "Bret".
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data => {
    let findUser = data.find(u=>u.id=="Bret");
    // let findId = data.find(u=>u.id=="2") //Task4
    // console.log(findId);
    console.log(findUser);
})
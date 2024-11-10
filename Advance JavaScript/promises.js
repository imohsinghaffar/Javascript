// // let learnPromise = new Promise((resolve, reject)=>{
// //     setTimeout(() => {
// //         console.log("Learning Promise");
// //         resolve();
// //     }, 1000);
// // })
// // learnPromise.then(function(){
// //     console.log("Promise Resolved");
    
// // })

// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         // console.log("Method Two of Promise");
//         resolve()
//     },1000)
// }).then(function(){
//     // console.log("Promise Done");
    
// })

// let learnPromiseThree = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let userDetails = true
//         if(!userDetails){
//         resolve({username:"Mohsin", pass:123})
//         }
//         else{
//             reject("User DoesN't Exist")
//         }
//     },1000)
// })
// learnPromiseThree
// .then((user)=>{
//     return user.username
// })
// .then((username)=>{
//     // console.log(username);
// })
// .catch(()=>{
//     // console.log("Something Wrong");
    
// })
// .finally(()=>{
//     // console.log("Everything is working");
    
// })

// let practicePromise = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let promsiseFullfiled = false
//         if(!promsiseFullfiled)
//             {
//                 resolve("Promise Fulfilled")
//             }
//             else{
//                 reject("Promise is not fullfilled")
//             }
//     },1000)
    
// })

// async function promisethroughasync(){
//     try{
//         let promise = await practicePromise;
//         console.log(promise);
// }
// catch(error){
//     console.log(error);
//             }    
  
    
// }

// promisethroughasync()


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>
// {
//     return response.json();
// })
// .then((output)=>{
//     // console.log(output.name);
// })
// .catch((error)=>
// {
//     // console.log(error);
// })

// // fetch('https://dummyjson.com/products/add', {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify({
// //       title: 'BMW Pencil',
// //       /* other product data */
// //     })
// //   })
// //   .then(res => res.json())
// //   .then((data)=>console.log(data));

// let learn_promises = new Promise((resolve, reject)=>
// {
//     let num=35;
//     if(num%2==0)
//     {
//         resolve(`Even Number`)
//     }
//     else{
//         reject(`No is not Even`);
//     }
// })
// learn_promises.then((result)=>
//     {
//         console.log(result);
// }).catch((error)=>
//     {console.log(error);
// })

// Your task: Create and use a promise based on `isLoggedIn`.
// let isLoggedIn = true;
// let user = new Promise((resolve, reject)=>
//     {
//         if(isLoggedIn)
//         {
//             resolve(`Yes, user is loggedIn: ${isLoggedIn}`);
//         }
//         else{
//             reject(`User is not loggedIn`);
//         }
//     })
// user.then((result)=>{console.log(result);})
// .catch((error)=>{console.log(error);
// })


//Task
// let isLoggedIn = true;
// let user = new Promise((resolve, reject)=>
//     {
//         setTimeout(() => {
//             if(isLoggedIn)
//                 {
//                     resolve(`Data fetched Successfully`);
//                 }
//                 else{
//                     reject(`Data is not fetched`);
//                 }
//         }, 2000);
//     })
// user.then((result)=>{console.log(result);})
// .catch((error)=>{console.log(error);
// })

//Task 6: Fetching Data with Promises
//Write a function fetchUserData that returns a promise. Simulate an API call with setTimeout
// that resolves after 3 seconds with a user object { id: 1, name: "John" }.
//Call fetchUserData and log the user data once it resolves.

function fetchUserData()
{
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            // resolve({id:1,name:"John"})
        }, 3000);
    });
}
fetchUserData()
.then((resolve)=>
{
    // console.log(resolve);
})
.catch((error)=>
{
    // console.log(error);
    
})


// Task: Creating a Fake Login System
// Write a function login that takes a username and password as parameters. 
//Return a promise that:
// Resolves with "Login successful" if the username is "admin" and password is "password".
// Rejects with "Invalid credentials" otherwise.
//Then call the function with different usernames and passwords to test both the resolve 
//and reject scenarios.

function loginSystem(username,password)
{
    return new Promise(function(resolve,reject)
{
    if(username=="admin" && password == 'password')
    {
        resolve("Login successful")
    }
    else
    {
        reject("Invalid credentials")
    }
});
}

loginSystem("admin","password")
.then((data)=>{console.log(data);})
.catch((error)=>{console.log(error);
})
// let learnPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Learning Promise");
//         resolve();
//     }, 1000);
// })
// learnPromise.then(function(){
//     console.log("Promise Resolved");
    
// })

new Promise(function(resolve, reject){
    setTimeout(()=>{
        // console.log("Method Two of Promise");
        resolve()
    },1000)
}).then(function(){
    // console.log("Promise Done");
    
})

let learnPromiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let userDetails = true
        if(!userDetails){
        resolve({username:"Mohsin", pass:123})
        }
        else{
            reject("User DoesN't Exist")
        }
    },1000)
})
learnPromiseThree
.then((user)=>{
    return user.username
})
.then((username)=>{
    // console.log(username);
})
.catch(()=>{
    // console.log("Something Wrong");
    
})
.finally(()=>{
    // console.log("Everything is working");
    
})

let practicePromise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let promsiseFullfiled = false
        if(!promsiseFullfiled)
            {
                resolve("Promise Fulfilled")
            }
            else{
                reject("Promise is not fullfilled")
            }
    },1000)
    
})

async function promisethroughasync(){
    try{
        let promise = await practicePromise;
        console.log(promise);
}
catch(error){
    console.log(error);
            }    
  
    
}

promisethroughasync()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>
{
    return response.json();
})
.then((output)=>{
    // console.log(output.name);
})
.catch((error)=>
{
    // console.log(error);
})

// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'BMW Pencil',
//       /* other product data */
//     })
//   })
//   .then(res => res.json())
//   .then((data)=>console.log(data));


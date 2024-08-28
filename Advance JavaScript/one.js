let learnPromisesOne = new Promise(function(resolve, reject){

    setTimeout(() => {
        //console.log("Promise is completed");
        resolve(); //(1)
    }, 1000);

})
//Untill we don't use resolved method in the main promise untill then we cannot print out
//this promise consumed msg. First main task will complete then this then will output(1).
learnPromisesOne.then(()=>{
    //console.log("Promise Consumed!");
    
})


let learnSecondWay = new Promise((resolve, reject)=>{ //if we have to get data defined in resolve then we have
    //to use promise without storing it in variable then it will work
    setTimeout(()=>{
        //console.log("This Async is second method");
        resolve({username: "Mohsin Ghaffar", passw: 123}) //If we have to pass any data then we pass in resolve in object form
    }, 1000)
})

learnSecondWay.then((userData)=>{ //now we will access above data here
    //console.log(userData);
    //return userData
}) 

//Third Way
let learnThirdWay = new Promise((resolve, reject)=>{ 
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username: "Mohsin Ghaffar", passw: 123});        
        }
        else{
            reject("There is an Error!");
        }
    }, 1000)
})

learnThirdWay
.then((printResult)=>{
    //console.log(printResult);
    return printResult.username
})
.then((userFullName)=>{
//console.log(userFullName);
})
.catch((err)=>{
    //console.log(err);
})
.finally(()=>{
    //console.log("All Set No Error!");
    
})


//Fourth Way
let newpromiseFour = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let checkError = true;
        if(checkError){
            resolve({username: "Ali"})
        }
        else{
            reject("There is Something Wrong!")
        }
    }, 1000);
})

async function consumePromise() {
    try {
        let checkResult = await newpromiseFour;
        //console.log(checkResult.username);
    } catch (error) {
        //console.log(error);
        
    }
    
}

consumePromise() // we have to must call async function otherwise will get error


/*
let arr1 = [1,2,3,4,5];
let arr2 = [1,6,3,9,5];

let x = 1;
if(x<arr1.length)
{                        //2 * 256 = 512 => arr[512]
    let result = arr2[arr1[x]*0];
    if(!result)
    {
        console.log("You array Indexed doesn't meet the condition!");   
    }
    else{
    console.log(`Condition met, Result is:${result}`);
    }
    
}
else{
    console.log("Condition Doesn't fullfill");
    
}
*/